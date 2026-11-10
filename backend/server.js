import { createServer } from 'node:http'
import { appendFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const directory = dirname(fileURLToPath(import.meta.url))
const port = Number(process.env.PORT || 3000)
const inquiriesFile = process.env.INQUIRIES_FILE || join(directory, 'data', 'inquiries.jsonl')
const bodyLimit = 8192
const rateWindow = 15 * 60 * 1000
const rateLimit = 5
const requestsByAddress = new Map()

function sendJson(response, status, data) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  })
  response.end(JSON.stringify(data))
}

async function readJson(request) {
  const chunks = []
  let size = 0

  for await (const chunk of request) {
    size += chunk.length
    if (size > bodyLimit) {
      const error = new Error('Request body is too large')
      error.status = 413
      throw error
    }
    chunks.push(chunk)
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'))
  } catch {
    const error = new Error('Request body must be valid JSON')
    error.status = 400
    throw error
  }
}

function cleanText(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function isRateLimited(address) {
  const now = Date.now()
  const recentRequests = (requestsByAddress.get(address) || []).filter((time) => now - time < rateWindow)

  if (recentRequests.length >= rateLimit) {
    requestsByAddress.set(address, recentRequests)
    return true
  }

  recentRequests.push(now)
  requestsByAddress.set(address, recentRequests)
  return false
}

const server = createServer(async (request, response) => {
  if (request.method === 'GET' && request.url === '/api/health') {
    sendJson(response, 200, { status: 'ok' })
    return
  }

  if (request.method !== 'POST' || request.url !== '/api/contact') {
    sendJson(response, 404, { error: 'Not found' })
    return
  }

  if (isRateLimited(request.socket.remoteAddress || 'unknown')) {
    sendJson(response, 429, { error: 'Please wait before sending another inquiry.' })
    return
  }

  try {
    const body = await readJson(request)
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      sendJson(response, 400, { error: 'Please submit a valid inquiry.' })
      return
    }

    const inquiry = {
      name: cleanText(body.name, 100),
      email: cleanText(body.email, 254).toLowerCase(),
      company: cleanText(body.company, 120),
      message: cleanText(body.message, 3000),
    }

    if (!inquiry.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email) || inquiry.message.length < 10) {
      sendJson(response, 400, { error: 'Enter your name, a valid email address, and a message of at least 10 characters.' })
      return
    }

    await mkdir(dirname(inquiriesFile), { recursive: true })
    await appendFile(inquiriesFile, `${JSON.stringify({ ...inquiry, receivedAt: new Date().toISOString() })}\n`, { encoding: 'utf8', mode: 0o600 })
    sendJson(response, 201, { message: 'Your inquiry has been received.' })
  } catch (error) {
    sendJson(response, error.status || 500, { error: error.status ? error.message : 'Unable to save your inquiry right now.' })
  }
})

server.listen(port, () => {
  console.log(`Sahavi contact API listening on http://localhost:${port}`)
})