import React, { useState } from 'react';

// ChatBubble Component
const ChatBubble = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);

    // Handle user input
    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    // Handle sending the message
    const handleSendMessage = async () => {
        if (message.trim() === '') return;

        const userMessage = message;

        // Clear the input
        setMessage('');

        // Call the serverless function (e.g., /api/openai)
        try {
            const res = await fetch('/api/openai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: userMessage }),
            });

            const data = await res.json();
            setResponse(data.message); // Set the response from OpenAI
        } catch (error) {
            console.error("Error fetching OpenAI response:", error);
        }
    };

    return (
        <div>
            <div
                className={`chat-container ${isChatOpen ? 'open' : ''}`}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    width: '300px',
                    padding: '10px',
                    zIndex: 1000,
                    transition: 'transform 0.3s ease',
                }}
            >
                <div
                    className="chat-header"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={() => setIsChatOpen(!isChatOpen)}
                >
                    <span>Chat with AI</span>
                    <button
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '18px',
                        }}
                    >
                        {isChatOpen ? '-' : '+'}
                    </button>
                </div>
                {isChatOpen && (
                    <div className="chat-content" style={{ marginTop: '10px' }}>
                        <div className="chat-messages" style={{ height: '200px', overflowY: 'auto' }}>
                            <div className="message user-message" style={{ textAlign: 'right', marginBottom: '10px' }}>
                                <div
                                    style={{
                                        backgroundColor: '#4CAF50',
                                        color: 'white',
                                        padding: '8px',
                                        borderRadius: '12px',
                                        maxWidth: '80%',
                                        marginLeft: 'auto',
                                    }}
                                >
                                    {message}
                                </div>
                            </div>
                            {response && (
                                <div className="message ai-message" style={{ textAlign: 'left', marginBottom: '10px' }}>
                                    <div
                                        style={{
                                            backgroundColor: '#f1f1f1',
                                            color: 'black',
                                            padding: '8px',
                                            borderRadius: '12px',
                                            maxWidth: '80%',
                                        }}
                                    >
                                        {response}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="chat-input" style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="text"
                                value={message}
                                onChange={handleInputChange}
                                placeholder="Type a message..."
                                style={{
                                    width: '80%',
                                    padding: '8px',
                                    borderRadius: '20px',
                                    border: '1px solid #ccc',
                                    marginRight: '10px',
                                }}
                            />
                            <button
                                onClick={handleSendMessage}
                                style={{
                                    padding: '8px 16px',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                }}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatBubble;
