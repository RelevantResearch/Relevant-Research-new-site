import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' })
    }
    console.log('Contact API called')
    const { name, email, subject, message, token } = req.body

    if (!token) {
        return res.status(400).json({ message: 'No reCAPTCHA token provided' })
    }

    try {
        // Verify reCAPTCHA
        const secret = process.env.RECAPTCHA_SECRET_KEY
        const { data } = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify`,
            null,
            {
                params: {
                    secret,
                    response: token,
                },
            }
        )

        if (!data.success) {
            return res.status(400).json({ message: 'reCAPTCHA failed', errorCodes: data['error-codes'] })
        }

        // Do something with the data (e.g., send email, store in DB)
        res.status(200).json({ message: 'Message sent successfully!' })
    } catch (error) {
        console.error('Contact API error:', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}
