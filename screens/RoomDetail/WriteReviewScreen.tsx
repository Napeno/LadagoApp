import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { Hotel } from "@/types/type";
import { firestore } from "@/firebase";
import { addDoc, collection, getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
type WriteReviewScreenParams = {
  WriteReview: {
    hotelDocId: string;
  };
};

type ReviewProps = {
  avatarUrl: string;
  dateOfStay: Date;
  hotelDocId: string;
  location: string;
  name: string;
  rating: number;
  reviewText: string;
};

const WriteReviewScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const route = useRoute<RouteProp<WriteReviewScreenParams, "WriteReview">>();
  const hotelDocId = route.params.hotelDocId;
  const [loading, setLoading] = useState<boolean>(false);
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const nav = useNavigation();
  const [review, setReview] = useState<ReviewProps>({
    avatarUrl:
      "https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?semt=ais_hybrid",
    dateOfStay: new Date(),
    hotelDocId: hotelDocId,
    location: "",
    name: "Henry",
    rating: 3.0,
    reviewText: "",
  });
  useEffect(() => {
    if (!hotelDocId) return;

    const getHotelById = async () => {
      setLoading(true);

      try {
        const hotelDocRef = doc(firestore, "hotel", hotelDocId);
        const hotelDocSnapshot = await getDoc(hotelDocRef);

        if (hotelDocSnapshot.exists()) {
          const hotelData = hotelDocSnapshot.data() as Hotel;
          setHotel(hotelData);
        } else {
          console.warn(`No hotel found with ID: ${hotelDocId}`);
        }
      } catch (error) {
        console.error("Error fetching hotel:", error);
      } finally {
        setLoading(false);
      }
    };

    getHotelById();
  }, [hotelDocId]);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const handleChange = (name: string, value: string) => {
    setReview((prev) => ({
      ...review,
      [name]: value,
    }));
  };

  const submitReview = async () => {
    try {
      setLoading(true);
      const reviewRef = await addDoc(collection(firestore, "review"), review);
    } catch (error) {
    } finally {
      setLoading(false);
      nav.navigate("MAIN" as never);
    }
  };

  if (loading) return <ActivityIndicator />;

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
            uri: hotel?.imgHotel[0],
          }}
        />
        <View style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 19 }}>
            {hotel?.name}
          </Text>
          <Text>{hotel?.description}</Text>
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
          onChangeText={(value) => {
            handleChange("reviewText", value);
          }}
        />
      </View>
      <TouchableOpacity style={[styles.submitBtn]} onPress={submitReview}>
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
