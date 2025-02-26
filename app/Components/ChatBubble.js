import React, { useState } from 'react';
import './ChatBubble.css'; // Make sure to create and style the CSS file

const ChatBubble = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim()) {
      // User's message
      const userMessage = { role: 'user', content: input };
      setMessages([...messages, userMessage]);
      setInput('');

      // Respond with AI message (you can customize this)
      const aiResponse = await getAIResponse(input);
      const aiMessage = { role: 'ai', content: aiResponse };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }
  };

  const getAIResponse = async (message) => {
    // Here you can make an API call to OpenAI or any AI service
    // For now, we return a placeholder response
    return "This is a placeholder response from AI.";
  };

  return (
    <div className="chat-container">
      <div className="chat-bubble-list">
        {messages.map((message, index) => (
          <div key={index} className={`chat-bubble ${message.role}`}>
            <span>{message.content}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBubble;
