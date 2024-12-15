import { StyleSheet, View } from "react-native";
import { Chat, MessageType } from "@flyerhq/react-native-chat-ui";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GoogleGenerativeAI } from "@google/generative-ai";

const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    const v = c === "x" ? r : (r % 4) + 8;
    return v.toString(16);
  });
};

const API_KEY = "AIzaSyAYgI03WYPHyJWUlz5H5643W6hB7MPj0N8";

const ChatBot = () => {
  const [messages, setMessages] = useState<MessageType.Any[]>([]);
  const user = { id: "06c33e8b-e835-4736-80f4-63f44b66666c" };

  // Initialize the GoogleGenerativeAI instance with the API key
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Function to add messages to the chat
  const addMessage = (message: MessageType.Any) => {
    setMessages([message, ...messages]);
  };

  // Handle sending of messages
  const handleSendPress = async (message: MessageType.PartialText) => {
    // Create and add the user's message
    const userMessage: MessageType.Text = {
      author: user,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: "text",
    };
    addMessage(userMessage);

    // Call the Gemini model and fetch a response asynchronously
    try {
      const botMessageText = await getBotResponse(message.text);
      const botMessage: MessageType.Text = {
        author: { id: "bot", name: "GeminiBot" },
        createdAt: Date.now(),
        id: uuidv4(),
        text: botMessageText,
        type: "text",
      };

      // Simulate typing delay for the bot
      setTimeout(() => {
        addMessage(botMessage);
      }, 1000); // Delay for 1 second to simulate bot typing
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage: MessageType.Text = {
        author: { id: "bot", name: "GeminiBot" },
        createdAt: Date.now(),
        id: uuidv4(),
        text: "Sorry, I encountered an error. Please try again later.",
        type: "text",
      };
      addMessage(errorMessage);
    }
  };

  // Fetch a response from the Gemini model
  const getBotResponse = async (userMessage: string) => {
    try {
      const chat = model.startChat({
        generationConfig: {
          temperature: 0.9,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        },
      });

      const result = await chat.sendMessage(userMessage);
      console.log("result: ",result)
      const botResponse = result.response.text();
      return botResponse;
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      throw error;
    }
  };

  return (
    <SafeAreaProvider>
      <Chat messages={messages} onSendPress={handleSendPress} user={user} />
    </SafeAreaProvider>
  );
};

export default ChatBot;

const styles = StyleSheet.create({});

