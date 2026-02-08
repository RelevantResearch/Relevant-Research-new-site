import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' })
    }

    console.log('Contact API called')
    const { name, email, subject, message, token } = req.body

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' })
    }

    try {
        // Skip reCAPTCHA verification for demo token
        if (token !== 'demo_token') {
            const secret = process.env.RECAPTCHA_SECRET_KEY
            if (!secret) {
                console.log('reCAPTCHA secret not configured, allowing demo submission')
            } else {
                const response = await fetch(
                    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
                    {
                        method: 'POST'
                    }
                )
                const data = await response.json()

                if (!data.success) {
                    return res.status(400).json({ message: 'reCAPTCHA failed', errorCodes: data['error-codes'] })
                }
            }
        }

        // In a real application, you would:
        // 1. Send an email using a service like SendGrid, AWS SES, etc.
        // 2. Store the message in a database
        // 3. Send notifications to your team

        console.log('Contact form submission:', { name, email, subject, message })

        res.status(200).json({ success: true, message: 'Message sent successfully!' })
    } catch (error) {
        console.error('Contact API error:', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}
