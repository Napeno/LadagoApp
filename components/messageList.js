import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase";
import styles from "../styles/messageList";
import { getAuth } from "firebase/auth";

const MessageList = () => {
  const [conversations, setConversations] = useState([]);
  const navigation = useNavigation();
  const currentUserId = getAuth().currentUser?.uid;

  useEffect(() => {
    const q = query(collection(firestore, "chats"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const conversationMap = new Map();

      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        const { senderId, receiverId, text, createdAt } = data;

        const userPairKey =
          senderId === currentUserId
            ? `${receiverId}_${currentUserId}`
            : `${senderId}_${currentUserId}`;

        if (!conversationMap.has(userPairKey)) {
          conversationMap.set(userPairKey, {
            id: doc.id,
            avatarUrl:
              "https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/Message%2FEllipse%20144.png?alt=media&token=0f9fbda9-80f8-4131-8dc3-d32658858875",
            name: senderId === currentUserId ? 'Ha' : 'Hanh Nguyen', 
            lastMsg: text,
            time: createdAt?.toDate().toLocaleTimeString(),
            chatPartnerId: senderId === currentUserId ? receiverId : senderId,
          });
        }
      });

      setConversations([...conversationMap.values()]);
    });

    return () => unsubscribe();
  }, [currentUserId]);

  return (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      showsVerticalScrollIndicator={false}
      data={conversations}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MessageListItem
          id={item.id}
          name={item.name}
          imgUrl={item.avatarUrl}
          lastMsg={item.lastMsg}
          time={item.time}
          chatPartnerId={item.chatPartnerId}
        />
      )}
    />
  );
};

const MessageListItem = ({ id, name, imgUrl, lastMsg, time, chatPartnerId }) => {
  const navigation = useNavigation();
  const currentUserId = getAuth().currentUser?.uid;

  return (
    <View style={[styles.cardWrap]}>
      <Pressable
        onPress={() =>
          navigation.navigate("CHATDETAIL", {
            currentUserId: currentUserId,
            chatPartnerId: chatPartnerId,
          })
        }
        style={[styles.cardHolder]}
      >
        <Image
          source={{ uri: imgUrl }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 12,
          }}
          resizeMode="cover"
        />


        <View style={styles.cardInfo}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>


          <View style={styles.textLine}>
            <Text style={styles.lastMsg} numberOfLines={1}>
              {lastMsg}
            </Text>
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
      </Pressable>
    </View>
   
  );
};


export default MessageList;
