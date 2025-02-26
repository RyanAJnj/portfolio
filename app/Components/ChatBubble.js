const express = require('express');
const { OpenAI } = require("openai");
require('dotenv').config();

const app = express();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4", // Choose the model
            messages: [
                { role: "user", content: message }
            ],
            temperature: 0.7
        });

        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        console.error("Error in OpenAI API request", error);
        res.status(500).json({ error: "Error fetching OpenAI response" });
    }
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
