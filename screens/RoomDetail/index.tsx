import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useFonts } from "expo-font";
import {
  Quicksand_400Regular,
  Quicksand_500Medium,
} from "@expo-google-fonts/quicksand";

const RoomDetail = () => {
  const nav = useNavigation();

  // Load the Quicksand fonts
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
  });

  if (!fontsLoaded) {
    return null; // You can show a loading screen or spinner while fonts load
  }

  return (
    <View style={styles.root}>
      <View style={styles.iconListContainer}>
        <TouchableOpacity
          onPress={() => nav.navigate("MAIN")}
          style={styles.iconContainer}
        >
          <AntDesign name="arrowleft" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign name="heart" size={20} color="red" />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: "https://motogo.vn/wp-content/uploads/2023/05/homestay-da-lat-rung-thong-3.jpg",
        }}
      />
      <View style={styles.infoLocationNameContainer}>
        <Text
          style={[styles.locationName, { fontFamily: "Quicksand_500Medium" }]}
        >
          Sunny house with lake view
        </Text>
        <View style={styles.infoContainer}>
          <MaterialCommunityIcons
            name="map-marker-radius"
            size={20}
            color="#365486"
          />
          <Text style={[styles.info, { fontFamily: "Quicksand_400Regular" }]}>
            Bao Loc, Vietnam
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Fontisto name="star" size={20} color="#fec008" />
          <Text style={[styles.info, { fontFamily: "Quicksand_400Regular" }]}>
            4.8 -{" "}
          </Text>
          <TouchableOpacity onPress={() => nav.navigate("Review")}>
            <Text style={[{ textDecorationLine: "underline" }, styles.info]}>
              6 reviewers
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <MaterialCommunityIcons
            name="map-marker-multiple"
            size={20}
            color="#365486"
          />
          <Text style={[styles.info, { fontFamily: "Quicksand_400Regular" }]}>
            232 km
          </Text>
        </View>
      </View>
      <View style={styles.introductionContainer}>
        <Text
          style={[
            styles.introductionTitle,
            { fontFamily: "Quicksand_500Medium" },
          ]}
        >
          Introducing this place
        </Text>
        <Text style={{ fontFamily: "Quicksand_400Regular" }}>
          Our accommodation is where you truly come back to nature. Surrounding
          you are coffee, avocado, and durian gardens. The most important is the
          natural lake (Dak Long Thuong Lake) where you can kayak. In the near
          future, we will install wind power to supply electricity to our
          area...
        </Text>
        <TouchableOpacity
          onPress={() => nav.navigate("INTRODUCTION" as never)}
          style={styles.showMoreContainer}
        >
          <Text style={styles.showMore}>Show more</Text>
          <AntDesign name="right" size={16} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.meeTheOwnerContainer}>
        <View style={styles.divider} />
        <Text
          style={[
            styles.meetTheOwnerTitle,
            { fontFamily: "Quicksand_500Medium" },
          ]}
        >
          Meet the owner
        </Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.priceBookContainer}>
        <Text style={[styles.price, { fontFamily: "Quicksand_500Medium" }]}>
          700k VND/night
        </Text>
        <TouchableOpacity
          onPress={() => nav.navigate("Booking" as never)}
          style={styles.bookBtn}
        >
          <Text style={[styles.bookNow, { fontFamily: "Quicksand_500Medium" }]}>
            Book now
          </Text>
        </TouchableOpacity>
      </View>
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
    gap: 10,
  },
  image: {
    width: "100%",
    height: "40%",
  },
  iconContainer: {
    padding: 5,
    borderRadius: 100,
    backgroundColor: "white",
  },
  iconListContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    position: "absolute",
    top: 10,
    zIndex: 10,
  },
  locationName: {
    fontSize: 23,
    fontWeight: "600",
  },
  info: {
    fontWeight: "400",
    fontSize: 16,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoLocationNameContainer: {
    paddingHorizontal: 10,
    gap: 10,
  },
  introductionContainer: {
    paddingHorizontal: 10,
    gap: 10,
  },
  meeTheOwnerContainer: {
    paddingHorizontal: 10,
    width: "100%",
    gap: 20,
  },
  meetTheOwnerTitle: {
    fontWeight: "600",
    fontSize: 23,
  },
  divider: {
    width: "100%",
    height: 0.5,
    backgroundColor: "black",
  },
  showMore: {
    textDecorationLine: "underline",
  },
  introductionTitle: {
    fontWeight: "600",
    fontSize: 23,
  },
  showMoreContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bookBtn: {
    backgroundColor: "#365486",
    width: 192,
    height: 42,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  priceBookContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookNow: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    fontWeight: "600",
    fontSize: 20,
  },
});
