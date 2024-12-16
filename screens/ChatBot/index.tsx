import { StyleSheet, View } from "react-native";
import { Chat, MessageType } from "@flyerhq/react-native-chat-ui";
import React, { useState } from "react";
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

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const addMessage = (message: MessageType.Any) => {
    setMessages((prevMessages) => [message, ...prevMessages]);
  };

  const handleSendPress = async (message: MessageType.PartialText) => {
    const userMessage: MessageType.Text = {
      author: user,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: "text",
    };
    addMessage(userMessage);

    try {
      const botMessageText = await getBotResponse(message.text);
      const botMessage: MessageType.Text = {
        author: { id: "bot", name: "GeminiBot" },
        createdAt: Date.now(),
        id: uuidv4(),
        text: botMessageText,
        type: "text",
      };

      setTimeout(() => {
        addMessage(botMessage);
      }, 1000);
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
      console.log("result: ", result);
      const botResponse = result.response.text();
      return botResponse;
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      throw error;
    }
  };

  return (
    <SafeAreaProvider>
      <View style={{ height: "95%" }}>
        <Chat messages={messages} onSendPress={handleSendPress} user={user} />
      </View>
    </SafeAreaProvider>
  );
};

export default ChatBot;

const styles = StyleSheet.create({});
