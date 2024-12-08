import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const WriteReviewScreen = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.root}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          height: "20%",
          gap: 10,
        }}
      >
        <Image
          style={[styles.image]}
          source={{
            uri: "https://motogo.vn/wp-content/uploads/2023/05/homestay-da-lat-rung-thong-3.jpg",
          }}
        />
        <View style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 19 }}>
            Nắng house with lake view
          </Text>
          <Text>
            Chỗ ở của chúng tôi là nơi bạn về với thiên nhiên thật sự. Bao quanh
            bạn là những vườn cà phê và bơ, sầu riêng. Quan trọng nhất là hồ tự
            ...
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 23, fontWeight: "bold" }}>
          Add photo or video
        </Text>
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "#f3f3f3",
            height: 150,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
          onPress={pickImage}
        >
          <FontAwesome5 name="cloud-upload-alt" size={24} color="black" />
          <Text>Click here to upload</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 23, fontWeight: "bold" }}>
          Write your review
        </Text>

        <TextInput
          multiline
          numberOfLines={3}
          style={{ backgroundColor: "#f3f3f3", height: 250, padding: 10 }}
        />
      </View>
      <TouchableOpacity style={[styles.submitBtn]}>
        <Text style={[styles.submit]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WriteReviewScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    gap: 10,
  },
  image: {
    width: "40%",
    height: "100%",
  },
  submitBtn: {
    backgroundColor: "#365486",
    width: "100%",
    height: 42,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  submit: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
