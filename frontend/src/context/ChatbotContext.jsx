import React, { createContext, useState } from "react";

export const ChatbotContext = createContext();

export const ChatbotProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! How can I assist you with your insurance today?" },
  ]);
  const [listening, setListening] = useState(false);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { from: "user", text };
    setMessages((prev) => [...prev, userMsg]);

    // Simulated AI bot response
    setTimeout(() => {
      let reply = "I'm processing your request...";
      if (text.toLowerCase().includes("policy"))
        reply = "You can view or enroll policies in the Policies section.";
      else if (text.toLowerCase().includes("claim"))
        reply = "Go to the Claims page to submit or check your claim status.";
      else if (text.toLowerCase().includes("payment"))
        reply = "Payments can be made securely in the Payments tab.";
      else reply = "Sorry, I didn’t quite get that. Try rephrasing!";

      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 800);
  };

  return (
    <ChatbotContext.Provider
      value={{
        messages,
        sendMessage,
        listening,
        setListening,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};
