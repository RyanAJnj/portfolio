const ChatMessage = ({ message, sender }) => {
    return (
      <div className={`p-2 rounded-lg w-fit max-w-[75%] ${sender === "bot" ? "bg-gray-200 self-start" : "bg-blue-500 text-white self-end"}`}>
        {message}
      </div>
    );
  };
  
  export default ChatMessage;