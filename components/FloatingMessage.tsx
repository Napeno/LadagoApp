import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const FloatingMessage = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate("Chat Bot" as never);
      }}
      style={styles.root}
    >
      <AntDesign name="message1" size={30} color="white" />
    </TouchableOpacity>
  );
};

export default FloatingMessage;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#365488",
    position: "absolute",
    zIndex: 10,
    right: 10,
    top: "80%",
    padding: 15,
    borderRadius: 100,
  },
});
