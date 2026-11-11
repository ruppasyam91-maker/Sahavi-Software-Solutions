function cleanText(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

export function validateInquiry(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { error: 'Please submit a valid inquiry.' }
  }

  const inquiry = {
    name: cleanText(body.name, 100),
    email: cleanText(body.email, 254).toLowerCase(),
    company: cleanText(body.company, 120),
    message: cleanText(body.message, 3000),
  }

  if (!inquiry.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email) || inquiry.message.length < 10) {
    return { error: 'Enter your name, a valid email address, and a message of at least 10 characters.' }
  }

  return { inquiry }
}
