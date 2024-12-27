import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const BottomTabCreate = ({
  navigation,
  backNav,
  nextNav,
  formData,
  isSubmit,
  isUploaded,
  currentPage,
}) => {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  const uploadImagesToFirebase = async (images) => {
    const storage = getStorage();
    const imageURLs = [];

    for (const [index, imageUri] of images.entries()) {
      try {
        const response = await fetch(imageUri);
        const blob = await response.blob();

        const storageRef = ref(storage, `images/hotel_${Date.now()}_${index}`);
        await uploadBytes(storageRef, blob);

        const downloadURL = await getDownloadURL(storageRef);
        imageURLs.push(downloadURL);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    return imageURLs;
  };

  const handleNext = () => {
    navigation.navigate(nextNav, { formDataRetrieve: formData });
  };

  const handleBack = () => {
    navigation.navigate(backNav);
  };

  const handleHome = () => {
    navigation.navigate("ADMIN");
  };

  const uploadFirebase = async () => {
    try {
      const uploadedImageUrls = await uploadImagesToFirebase(formData.imgHotel);

      const updatedFormData = { ...formData, imgHotel: uploadedImageUrls };

      const hotelRef = await addDoc(collection(firestore, "hotel"), {
        name: updatedFormData.name,
        price: updatedFormData.price,
        address: updatedFormData.address,
        checkInTime: new Date(updatedFormData.checkIn).toLocaleTimeString(),
        checkOutTime: new Date(updatedFormData.checkOut).toLocaleTimeString(),
        geoCode: updatedFormData.geoCode,
        imgHotel: updatedFormData.imgHotel,
        description: updatedFormData.description,
        access: updatedFormData.access,
        rating: updatedFormData.rating,
      });

      console.log("Hotel added with ID: ", hotelRef.id);

      const roomTypes = Array.isArray(updatedFormData.roomType)
        ? updatedFormData.roomType
        : [updatedFormData.roomType];

      for (const room of roomTypes) {
        console.log("Uploading Room:", room);

        await addDoc(collection(firestore, `hotel/${hotelRef.id}/roomType`), {
          typeName: room.type,
          occupancy: room.occupacity,
          bathroom: room.bathroom,
          bed: room.bed,
          bedroom: room.bedroom,
          amenities: room.amenities,
        });

        console.log(`Room uploaded: ${room.type}`);
      }
    } catch (error) {
      console.error("Error hotel: ", error);
    }
  };

  const barColors = Array.from({ length: 10 }, (_, index) => {
    if (index < currentPage - 1) {
      return "#365486";
    } else if (index === currentPage - 1) {
      return "half"; //
    } else {
      return "#A8A8A8";
    }
  });
  return (
    <View style={styles.bottomBar}>
      <View style={styles.listBar}>
        {barColors.map((color, index) => (
          <View key={index} style={styles.Bar}>
            {color === "half" ? (
              <View style={styles.halfBarContainer}>
                <View
                  style={[styles.halfBar, { backgroundColor: "#365486" }]}
                />
                <View
                  style={[styles.halfBar, { backgroundColor: "#A8A8A8" }]}
                />
              </View>
            ) : (
              <View style={[styles.Bar, { backgroundColor: color }]} />
            )}
          </View>
        ))}
      </View>
      <View style={styles.navigateButtons}>
        {isUploaded ? (
          <Pressable style={styles.finalBar} onPress={handleHome}>
            <Text style={[styles.textNav, { color: "#FFFFFF" }]}>
              Go back home
            </Text>
          </Pressable>
        ) : (
          <>
            <Pressable style={styles.backBar} onPress={handleBack}>
              <Text style={[styles.textNav, { color: "#365486" }]}>Back</Text>
            </Pressable>
            {isSubmit ? (
              <Pressable
                style={styles.nextBar}
                onPress={async () => {
                  await uploadFirebase();
                  handleNext();
                }}
              >
                <Text style={[styles.textNav, { color: "#FFFFFF" }]}>
                  {" "}
                  Submit
                </Text>
              </Pressable>
            ) : (
              <Pressable style={styles.nextBar} onPress={handleNext}>
                <Text style={[styles.textNav, { color: "#FFFFFF" }]}>
                  {" "}
                  Next
                </Text>
              </Pressable>
            )}
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    height: 140,
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },

  listBar: {
    marginTop: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },

  Bar: {
    width: 25,
    height: 5,
    backgroundColor: "#A8A8A8",
    borderRadius: 100,
  },

  navigateButtons: {
    marginTop: 34,
    marginHorizontal: 20,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },

  backBar: {
    width: 127,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#365486",
  },

  nextBar: {
    width: 127,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#365486",
  },

  finalBar: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#365486",
  },

  textNav: {
    fontSize: 20,
    fontFamily: "Quicksand_600SemiBold",
  },
});

export default BottomTabCreate;
