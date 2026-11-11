import assert from 'node:assert/strict'
import test from 'node:test'
import { validateInquiry } from './contact-validation.js'

test('normalizes a valid inquiry', () => {
  assert.deepEqual(validateInquiry({
    name: '  Sam Lee ',
    email: '  SAM@EXAMPLE.COM ',
    company: '  Example Co. ',
    message: '  We need help with Oracle EPM. ',
  }), {
    inquiry: {
      name: 'Sam Lee',
      email: 'sam@example.com',
      company: 'Example Co.',
      message: 'We need help with Oracle EPM.',
    },
  })
})

test('rejects non-object inquiry bodies', () => {
  for (const body of [null, [], 'inquiry']) {
    assert.deepEqual(validateInquiry(body), { error: 'Please submit a valid inquiry.' })
  }
})

test('rejects missing required fields and invalid email addresses', () => {
  const valid = { name: 'Sam', email: 'sam@example.com', message: 'A sufficiently long message' }

  for (const body of [
    { ...valid, name: '   ' },
    { ...valid, email: 'not-an-email' },
    { ...valid, message: 'short' },
  ]) {
    assert.equal(validateInquiry(body).error, 'Enter your name, a valid email address, and a message of at least 10 characters.')
  }
})

test('trims and caps inquiry field lengths', () => {
  const result = validateInquiry({
    name: ` ${'n'.repeat(101)} `,
    email: `${'a'.repeat(242)}@example.com`,
    company: 'c'.repeat(121),
    message: 'm'.repeat(3001),
  })

  assert.equal(result.inquiry.name.length, 100)
  assert.equal(result.inquiry.email.length, 254)
  assert.equal(result.inquiry.company.length, 120)
  assert.equal(result.inquiry.message.length, 3000)
})
