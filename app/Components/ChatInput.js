import { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="p-2 border-t flex">
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        className="flex-1 border rounded-lg p-2"
        placeholder="Type a message..."
      />
      <button onClick={handleSend} className="ml-2 bg-blue-500 text-white p-2 rounded-lg">
        Send
      </button>
    </div>
  );
};

export default ChatInput;