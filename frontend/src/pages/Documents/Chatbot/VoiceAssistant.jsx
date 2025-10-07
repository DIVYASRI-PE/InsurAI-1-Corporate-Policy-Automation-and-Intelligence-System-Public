import React, { useEffect, useContext } from "react";
import { ChatbotContext } from "../../context/ChatbotContext";

const VoiceAssistant = () => {
  const { sendMessage } = useContext(ChatbotContext);

  useEffect(() => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      sendMessage(transcript);
    };

    const startListening = () => recognition.start();

    document.getElementById("start-voice").addEventListener("click", startListening);
    return () => recognition.stop();
  }, [sendMessage]);

  return (
    <div className="p-4">
      <button
        id="start-voice"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Speak
      </button>
    </div>
  );
};

export default VoiceAssistant;
