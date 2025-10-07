package com.insurai.service;

import org.springframework.stereotype.Service;

@Service
public class ChatbotService {

    public String processMessage(String message) {
        // Integrate AI/NLP logic here
        return "Chatbot reply: " + message;
    }
}
