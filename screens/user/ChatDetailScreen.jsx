import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase";
import styles from "../../styles/chatdetail";

const ChatDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { currentUserId, chatPartnerId } = route.params;
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const q = query(collection(firestore, "chats"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesFirestore = snapshot.docs
        .map((doc) => {
          const data = doc.data();
          return {
            _id: doc.id,
            text: data.text,
            createdAt: data.createdAt?.toDate(),
            senderId: data.senderId,
            receiverId: data.receiverId,
          };
        })
        .filter(
          (msg) =>
            (msg.senderId === currentUserId && msg.receiverId === chatPartnerId) ||
            (msg.senderId === chatPartnerId && msg.receiverId === currentUserId)
        );

      setMessages(messagesFirestore);
    });

    return () => unsubscribe();
  }, [currentUserId, chatPartnerId]);

  const handleSend = useCallback(async () => {
    if (text.trim() === "") return;

    const messageData = {
      text,
      createdAt: new Date(),
      senderId: currentUserId,
      receiverId: chatPartnerId,
    };

    await addDoc(collection(firestore, "chats"), messageData);
    setText("");
  }, [text, currentUserId, chatPartnerId]);

  const renderMessage = ({ item }) => {
    const isCurrentUser = item.senderId === currentUserId;

    return (
      <View
        style={[
          styles.messageWrapper,
          isCurrentUser ? styles.messageWrapperRight : styles.messageWrapperLeft,
        ]}
      >
        {!isCurrentUser && (
          <Image
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/Message%2FEllipse%20144.png?alt=media&token=0f9fbda9-80f8-4131-8dc3-d32658858875",
            }}
            style={styles.avatar}
          />
        )}
        <View
          style={[
            styles.messageContainer,
            isCurrentUser ? styles.myMessage : styles.partnerMessage,
          ]}
        >
          <Text style={isCurrentUser ? styles.myText : styles.partnerText}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header Chat */}
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/Message%2FEllipse%20144.png?alt=media&token=0f9fbda9-80f8-4131-8dc3-d32658858875",
          }}
          style={styles.avatarHeader}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>Hanh Nguyen</Text>
          <Text style={styles.status}>Online</Text>
        </View>
        <TouchableOpacity>
          <Image source={require("../../constants/video_icon.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../constants/call_icon.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Tin nhắn */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item._id}
        inverted
      />

      {/* Input và gửi */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatDetailScreen;