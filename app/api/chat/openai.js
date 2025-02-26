// api/openai.js
import { OpenAI } from 'openai'; // Import OpenAI SDK

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const openai = new OpenAI({
                apiKey: process.env.OPENAI_API_KEY, // API key from .env file
            });

            const response = await openai.chat.completions.create({
                model: "gpt-4",
                messages: [
                    {
                        role: "user",
                        content: req.body.prompt, // Get prompt from the frontend
                    },
                ],
                temperature: 0.7,
            });

            res.status(200).json({ message: response.choices[0].message.content });
        } catch (error) {
            res.status(500).json({ error: 'Error processing request' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
