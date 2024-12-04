import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
const RoomDetail = () => {
  return (
    <View style={[styles.root]}>
      <View>
        <AntDesign name="arrowleft" size={24} color="black" />
      </View>
      <Image
        style={[styles.image]}
        source={{
          uri: "https://motogo.vn/wp-content/uploads/2023/05/homestay-da-lat-rung-thong-3.jpg",
        }}
      />
    </View>
  );
};

export default RoomDetail;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    height: "100%",
    alignItems: "flex-start",
    borderColor: "red",
  },
  image: {
    width: "100%",
    height: "40%",
  },
});
