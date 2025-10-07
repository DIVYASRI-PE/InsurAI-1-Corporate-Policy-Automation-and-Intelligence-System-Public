import React, { useState, useContext } from "react";
import { ChatbotContext } from "../../context/ChatbotContext";

const ChatbotPage = () => {
  const { messages, sendMessage } = useContext(ChatbotContext);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="p-8 max-w-2xl mx-auto mt-10 bg-white rounded-2xl shadow-md flex flex-col h-[600px]">
      <h2 className="text-2xl font-bold mb-4">AI Chatbot</h2>
      <div className="flex-1 overflow-y-auto border p-4 rounded mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 p-2 rounded ${
              msg.sender === "user" ? "bg-blue-100 self-end" : "bg-gray-200 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-md p-2"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage;
