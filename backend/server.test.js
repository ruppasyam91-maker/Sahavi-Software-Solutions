import assert from 'node:assert/strict'
import test from 'node:test'
import { createContactServer } from './server.js'

const origin = 'https://website.example'

async function withServer(t, options = {}) {
  const server = createContactServer({ allowedOrigins: [origin], ...options })
  await new Promise((resolve) => server.listen(0, resolve))
  t.after(() => new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve())
  }))
  return `http://127.0.0.1:${server.address().port}`
}

const validInquiry = {
  name: 'Sam Lee',
  email: 'sam@example.com',
  company: 'Example Co.',
  message: 'We need help with Oracle EPM.',
}

test('health endpoint responds with JSON and CORS headers', async (t) => {
  const baseUrl = await withServer(t)
  const response = await fetch(`${baseUrl}/api/health`, { headers: { Origin: origin } })

  assert.equal(response.status, 200)
  assert.equal(response.headers.get('access-control-allow-origin'), origin)
  assert.deepEqual(await response.json(), { status: 'ok' })
})

test('accepts a valid inquiry and sends normalized fields to delivery', async (t) => {
  let received
  const baseUrl = await withServer(t, { sendInquiry: async (inquiry) => { received = inquiry } })
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { Origin: origin, 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...validInquiry, email: ' SAM@EXAMPLE.COM ' }),
  })

  assert.equal(response.status, 201)
  assert.deepEqual(received, { ...validInquiry, email: 'sam@example.com' })
  assert.deepEqual(await response.json(), { message: 'Your inquiry has been received.' })
})

test('rejects invalid submissions without delivering them', async (t) => {
  let delivered = false
  const baseUrl = await withServer(t, { sendInquiry: async () => { delivered = true } })
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { Origin: origin, 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...validInquiry, email: 'invalid' }),
  })

  assert.equal(response.status, 400)
  assert.equal(delivered, false)
})

test('rejects oversized request bodies', async (t) => {
  const baseUrl = await withServer(t)
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { Origin: origin, 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...validInquiry, message: 'x'.repeat(9000) }),
  })

  assert.equal(response.status, 413)
})

test('handles browser CORS preflight and blocks unknown origins', async (t) => {
  const baseUrl = await withServer(t)
  const preflight = await fetch(`${baseUrl}/api/contact`, {
    method: 'OPTIONS',
    headers: { Origin: origin, 'Access-Control-Request-Method': 'POST' },
  })
  const blocked = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { Origin: 'https://untrusted.example', 'Content-Type': 'application/json' },
    body: JSON.stringify(validInquiry),
  })

  assert.equal(preflight.status, 204)
  assert.equal(preflight.headers.get('access-control-allow-origin'), origin)
  assert.equal(blocked.status, 403)
})

test('reports email delivery failures without a success response', async (t) => {
  const baseUrl = await withServer(t, {
    sendInquiry: async () => {
      const error = new Error('provider private details')
      error.statusCode = 502
      throw error
    },
  })
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { Origin: origin, 'Content-Type': 'application/json' },
    body: JSON.stringify(validInquiry),
  })

  assert.equal(response.status, 502)
  assert.deepEqual(await response.json(), { error: 'Unable to deliver your inquiry right now. Please try again later.' })
})

test('rate limits repeated inquiries', async (t) => {
  const baseUrl = await withServer(t, { sendInquiry: async () => {} })
  const submit = () => fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validInquiry),
  })

  for (let attempt = 0; attempt < 5; attempt++) {
    assert.equal((await submit()).status, 201)
  }
  assert.equal((await submit()).status, 429)
})
