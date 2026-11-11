import assert from 'node:assert/strict'
import test from 'node:test'
import { createEmailDelivery, DeliveryError } from './email-delivery.js'

const configuration = {
  apiKey: 'test-secret',
  recipient: 'inquiries@example.com',
  sender: 'Website <website@example.com>',
}

const inquiry = {
  name: 'Sam Lee',
  email: 'sam@example.com',
  company: 'Example Co.',
  message: 'We need help with Oracle EPM.',
}

test('requires email delivery configuration', () => {
  assert.equal(createEmailDelivery({ apiKey: 'key', recipient: '', sender: 'Website <site@example.com>' }), null)
})

test('sends inquiries through Resend without exposing the API key', async () => {
  let request
  const deliver = createEmailDelivery({
    ...configuration,
    fetchImpl: async (url, options) => {
      request = { url, options }
      return { ok: true }
    },
  })

  await deliver(inquiry)
  assert.equal(request.url, 'https://api.resend.com/emails')
  assert.equal(request.options.headers.Authorization, 'Bearer test-secret')
  assert.deepEqual(JSON.parse(request.options.body), {
    from: configuration.sender,
    to: [configuration.recipient],
    reply_to: inquiry.email,
    subject: 'New website inquiry — Sahavi Software Solutions',
    text: 'Name: Sam Lee\nEmail: sam@example.com\nCompany: Example Co.\n\nWe need help with Oracle EPM.',
  })
})

test('reports provider failures without returning provider details', async () => {
  const deliver = createEmailDelivery({
    ...configuration,
    fetchImpl: async () => ({ ok: false, status: 401 }),
  })

  await assert.rejects(deliver(inquiry), DeliveryError)
})
