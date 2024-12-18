import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const ChatScreen = () => {
  


  return (
    <ScrollView style={styles.container}>
      

      <View style={styles.messageContainer}>
        <Text style={styles.senderName}>Hanh</Text>
        <Text style={styles.message}>Hello, my name is Hanh and I find your apartment quite interesting. Is your apartment habitable all year round?</Text>
        <Text style={styles.timestamp}>05/06/2024</Text>
      </View>
      <View style={[styles.messageContainer, styles.receiverContainer]}>
        <Text style={styles.senderName}>You</Text>
        <Text style={styles.message}>Of course, my apartment is open all year round and you can rent it long term.</Text>
        <Text style={styles.timestamp}>05/06/2024</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.senderName}>Hanh</Text>
        <Text style={styles.message}>So that's really great!</Text>
        <Text style={styles.timestamp}>05/06/2024</Text>
      </View>
      <View style={[styles.messageContainer, styles.receiverContainer]}>
        <Text style={styles.senderName}>You</Text>
        <Text style={styles.message}>May I ask some more information about your apartment?</Text>
        <Text style={styles.timestamp}>05/06/2024</Text>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  messageContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  receiverContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#e0e0e0',
  },
  senderName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
    marginTop: 4,
  },
});


export default ChatScreen;