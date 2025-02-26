'use client';
import { useState } from 'react';

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Function to toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle sending messages
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();
      const botMessage = { role: 'bot', content: data.message };

      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }

    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {/* Chat Bubble */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col overflow-hidden border border-gray-300">
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <span>Chat</span>
            <button onClick={toggleChat} className="text-lg">✖️</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg mb-2 ${msg.role === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'}`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 border-t flex">
            <input
              type="text"
              className="flex-1 p-2 border rounded-l-md"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}