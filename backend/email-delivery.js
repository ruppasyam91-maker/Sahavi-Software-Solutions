export class DeliveryError extends Error {}

export function createEmailDelivery({ apiKey, recipient, sender, fetchImpl = fetch }) {
  if (!apiKey || !recipient || !sender) return null

  return async (inquiry) => {
    let response
    try {
      response = await fetchImpl('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: sender,
          to: [recipient],
          reply_to: inquiry.email,
          subject: 'New website inquiry — Sahavi Software Solutions',
          text: [
            `Name: ${inquiry.name}`,
            `Email: ${inquiry.email}`,
            `Company: ${inquiry.company || 'Not provided'}`,
            '',
            inquiry.message,
          ].join('\n'),
        }),
        signal: AbortSignal.timeout(10000),
      })
    } catch (error) {
      throw new DeliveryError('Inquiry delivery failed.', { cause: error })
    }

    if (!response.ok) throw new DeliveryError('Inquiry delivery failed.')
  }
}
