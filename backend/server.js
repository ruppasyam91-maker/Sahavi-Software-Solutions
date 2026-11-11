import { createServer } from 'node:http'
import { appendFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { validateInquiry } from './contact-validation.js'
import { createEmailDelivery, DeliveryError } from './email-delivery.js'

const directory = dirname(fileURLToPath(import.meta.url))
const port = Number(process.env.PORT || 3000)
const inquiriesFile = process.env.INQUIRIES_FILE || join(directory, 'data', 'inquiries.jsonl')
const bodyLimit = 8192
const rateWindow = 15 * 60 * 1000
const rateLimit = 5

function sendJson(response, status, data, headers = {}) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer',
    ...headers,
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

async function saveInquiry(inquiry) {
  await mkdir(dirname(inquiriesFile), { recursive: true })
  await appendFile(inquiriesFile, `${JSON.stringify({ ...inquiry, receivedAt: new Date().toISOString() })}\n`, { encoding: 'utf8', mode: 0o600 })
}

const configuredEmailDelivery = createEmailDelivery({
  apiKey: process.env.RESEND_API_KEY,
  recipient: process.env.CONTACT_EMAIL,
  sender: process.env.RESEND_FROM_EMAIL,
})

const deliverInquiry = configuredEmailDelivery || (process.env.NODE_ENV === 'production'
  ? async () => {
      const error = new Error('Inquiry delivery is not configured.')
      error.statusCode = 503
      throw error
    }
  : saveInquiry)

export function createContactServer({
  sendInquiry = deliverInquiry,
  allowedOrigins = (process.env.ALLOWED_ORIGINS || process.env.ALLOWED_ORIGIN || 'http://localhost:5173,http://localhost:4173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
} = {}) {
  const allowedOriginSet = new Set(allowedOrigins)
  const requestsByAddress = new Map()

  function getCorsHeaders(origin) {
    return {
      ...(origin ? { 'Access-Control-Allow-Origin': origin } : {}),
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'Origin',
    }
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

  return createServer(async (request, response) => {
    const origin = request.headers.origin
    const pathname = new URL(request.url || '/', 'http://localhost').pathname

    if (origin && !allowedOriginSet.has(origin)) {
      sendJson(response, 403, { error: 'This origin is not allowed.' }, getCorsHeaders())
      return
    }

    const corsHeaders = getCorsHeaders(origin)
    if (request.method === 'OPTIONS' && pathname === '/api/contact') {
      response.writeHead(204, corsHeaders)
      response.end()
      return
    }

    if (request.method === 'GET' && pathname === '/api/health') {
      sendJson(response, 200, { status: 'ok' }, corsHeaders)
      return
    }

    if (request.method !== 'POST' || pathname !== '/api/contact') {
      sendJson(response, 404, { error: 'Not found' }, corsHeaders)
      return
    }

    if (isRateLimited(request.socket.remoteAddress || 'unknown')) {
      sendJson(response, 429, { error: 'Please wait before sending another inquiry.' }, corsHeaders)
      return
    }

    try {
      const body = await readJson(request)
      const result = validateInquiry(body)
      if (result.error) {
        sendJson(response, 400, { error: result.error }, corsHeaders)
        return
      }

      await sendInquiry(result.inquiry)
      sendJson(response, 201, { message: 'Your inquiry has been received.' }, corsHeaders)
    } catch (error) {
      const status = error.statusCode || error.status || (error instanceof DeliveryError ? 502 : 500)
      const message = status === 400 || status === 413
        ? error.message
        : status === 503
          ? 'Inquiry delivery is not configured yet. Please use the LinkedIn contact link.'
          : status === 502
            ? 'Unable to deliver your inquiry right now. Please try again later.'
            : 'Unable to save your inquiry right now.'
      sendJson(response, status, { error: message }, corsHeaders)
    }
  })
}

const server = createContactServer()
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  server.listen(port, () => {
    console.log(`Sahavi contact API listening on http://localhost:${port}`)
  })
}