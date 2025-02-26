import { OpenAI } from 'openai'; // Import OpenAI SDK
// pages/api/chat.js

import { OpenAI } from 'openai';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Initialize OpenAI API client
      const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,  // Ensure you have your API key
      });

      // Get the user's prompt from the request body
      const userPrompt = req.body.prompt;

      // Make the request to OpenAI
      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: userPrompt }],
        temperature: 0.7,
      });

      // Send the response from AI back to the client
      res.status(200).json({ message: response.choices[0].message.content });
    } catch (error) {
      // Handle any errors that occur during the API call
      res.status(500).json({ error: 'Error processing request' });
    }
  } else {
    // Handle invalid method (only POST is supported)
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
