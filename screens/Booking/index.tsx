import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRef } from "react";
import BottomSheetCal from "./components/BottomSheetCal";
import BottomSheet from "@gorhom/bottom-sheet";
import { useState } from "react";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Divider } from "./components/Divider";
import { SeperateBar } from "./components/SeperateBar";
import OverLay from "./components/Overlay";
import BottomSheetPeople from "./components/BottomSheetPeople";
import { useNavigation } from "@react-navigation/native";
const Booking = () => {
  const [isSheetCalVisible, setIsSheetCalVisible] = useState(false);
  const [isSheetPeopleVisible, setIsSheetPeopleVisible] = useState(false);
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
  const handleSheetChange = (index: number) => {
    if (index === -1) {
      setIsSheetCalVisible(false);
      setIsSheetPeopleVisible(false);
    }
  };
  const nav = useNavigation();

  return (
    <GestureHandlerRootView>
      <ScrollView
        contentContainerStyle={styles.root}
        showsVerticalScrollIndicator={false}
      >
        {(isSheetCalVisible || isSheetPeopleVisible) && <OverLay />}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://motogo.vn/wp-content/uploads/2023/05/homestay-da-lat-rung-thong-3.jpg",
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>RAON HOI AN1</Text>
            <View style={styles.popularBadge}>
              <Text style={styles.popularText}>Most popular</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Fontisto name="star" size={20} color="#fec008" />
              <Text style={styles.ratingValue}>4.8</Text>
              <Text style={styles.ratingText}>Excellent</Text>
              <Text style={styles.reviewsText}>200 reviews</Text>
            </View>
            <View style={styles.addressContainer}>
              <MaterialCommunityIcons
                name="map-marker-radius-outline"
                size={20}
                color="#365486"
              />
              <Text style={styles.addressText}>
                1 Cua Dai Street, Cửa Đại, Hội An, Việt Nam
              </Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>6th June - 9th June,2024</Text>
            </View>
          </View>
        </View>
        <View style={styles.cancellationContainer}>
          <FontAwesome5 name="calendar-alt" size={25} color="#365488" />
          <View>
            <Text style={styles.cancellationTitle}>
              Free cancellation 24 hours in advance.
            </Text>
            <Text style={styles.cancellationText}>
              Get a full refund if you change your plans
            </Text>
          </View>
        </View>
        <SeperateBar />

        <View style={styles.tripContainer}>
          <Text style={styles.sectionTitle}>Your trip</Text>
          <View style={styles.tripDetails}>
            <View style={styles.tripDetail}>
              <Text style={styles.tripDetailTitle}>Date</Text>
              <Text style={styles.tripDetailText}>6th -9th June 2024</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setIsSheetCalVisible(true);
              }}
            >
              <AntDesign name="edit" size={20} color="#365486" />
            </TouchableOpacity>
          </View>
          <View style={styles.tripDetails}>
            <View>
              <Text style={styles.tripDetailTitle}>Room and passenger</Text>
              <Text style={styles.tripDetailText}>
                1 room - 2 passenger - 0 children
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setIsSheetPeopleVisible(true);
              }}
            >
              <AntDesign name="edit" size={20} color="#365486" />
            </TouchableOpacity>
          </View>
        </View>
        <SeperateBar />

        <View style={styles.paymentContainer}>
          <Text style={styles.sectionTitle}>Payment Option</Text>
          <Text style={styles.paymentText}>Pay 2,399,000 VND now</Text>
          <View>
            <Text style={styles.paymentOptionTitle}>
              Pay half now, pay the rest later
            </Text>
            <Text style={styles.paymentOptionText}>
              You need to pay 1,200,00 VND now and 1,200,000 VND in 5th June
              2024. No extra fee
            </Text>
          </View>
        </View>
        <SeperateBar />
        <View style={[styles.priceDetailsContainer]}>
          <Text style={styles.sectionTitle}>Price detail</Text>
          <View style={styles.priceDetail}>
            <View style={styles.priceDetailRow}>
              <Text style={styles.priceDetailText}>3 nights</Text>
              <Text style={styles.priceDetailAmount}>2,399,000 VND</Text>
            </View>
            <View style={styles.priceDetailRow}>
              <Text style={styles.priceDetailText}>Cleaning fee</Text>
              <Text style={styles.priceDetailAmount}>300,000 VND</Text>
            </View>
            <View style={styles.priceDetailRow}>
              <Text style={styles.priceDetailText}>Ladago service fee</Text>
              <Text style={styles.priceDetailAmount}>100,000 VND</Text>
            </View>
            <Divider />
            <View style={styles.priceDetailRow}>
              <Text style={styles.priceDetailText}>Total</Text>
              <Text style={styles.priceDetailAmount}>2,799,000 VND</Text>
            </View>
          </View>
        </View>
        <SeperateBar />
        <View style={{ width: "100%", display: "flex", gap: 16 }}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={{ display: "flex", gap: 10 }}>
            <Text>Email</Text>
            <Text style={{ color: "'rgba(0, 0, 0, 0.4)'" }}>Email address</Text>
          </View>
          <View style={{ display: "flex", gap: 10 }}>
            <Text>Card number</Text>
            <Text style={{ color: "'rgba(0, 0, 0, 0.4)'" }}>
              1234 1234 1234 1234
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ display: "flex", gap: 10 }}>
              <Text>Expiration</Text>
              <Text style={{ color: "'rgba(0, 0, 0, 0.4)'" }}>MM/YY</Text>
            </View>
            <View style={{ display: "flex", gap: 10 }}>
              <Text>CVC</Text>
              <Text style={{ color: "'rgba(0, 0, 0, 0.4)'" }}>CVC</Text>
            </View>
            <View>
              <Image
                style={{ width: "20", height: "20" }}
                source={{
                  uri: "https://thietkelogo.mondial.vn/wp-content/uploads/2024/02/visa-logo-preview.png",
                }}
              />
              <Image
                style={{ width: "20", height: "20" }}
                source={{
                  uri: "https://www.mastercard.com/content/dam/public/mastercardcom/vn/vi/logos/mastercard-og-image.png",
                }}
              />
            </View>
          </View>

          <View style={{ display: "flex", gap: 10 }}>
            <Text>Country</Text>
            <Text style={{ color: "'rgba(0, 0, 0, 0.4)'" }}>Viet Nam</Text>
          </View>
        </View>
        <SeperateBar />
        <View style={{ width: "100%", display: "flex", gap: 10 }}>
          <Text style={styles.sectionTitle}>Cancellation policy</Text>
          <Text style={{ fontSize: 14 }}>
            Free cancellation 24 hours in advance.
          </Text>
          <Text style={{ fontSize: 12, color: "rgba(0, 0, 0, 0.4)" }}>
            Get a full refund if you change your plans
          </Text>
        </View>
        <SeperateBar />
        <View>
          <Text style={{ fontSize: 12, color: "#736E6F" }}>
            By selecting below button, it means that I agree with Owner’s Policy
            , General policy and Ladago cancelation policy
          </Text>
        </View>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => {
            nav.navigate("Confirm" as never);
          }}
        >
          <Text style={styles.confirmButtonText}>Confirm and booking</Text>
        </TouchableOpacity>
      </ScrollView>
      {isSheetCalVisible && (
        <BottomSheetCal handleSheetChange={handleSheetChange} />
      )}
      {isSheetPeopleVisible && (
        <BottomSheetPeople handleSheetChange={handleSheetChange} />
      )}
    </GestureHandlerRootView>
  );
};

export default Booking;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    gap: 15,
    flexGrow: 1,
    paddingHorizontal: 20,
    width: "100%",
    fontFamily: "Quicksand_400Regular",
  },
  imageContainer: {
    width: "100%",
    height: 150,
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  image: {
    width: "40%",
    height: "100%",
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
    display: "flex",
  },
  title: {
    fontSize: 16,
    fontFamily: "Quicksand_500Medium",
  },
  popularBadge: {
    backgroundColor: "#E9F5FE",
    padding: 3,
    width: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#365486",
    borderWidth: 0.5,
  },
  popularText: {
    fontSize: 12,
    fontFamily: "Quicksand_400Regular",
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  ratingValue: {
    fontWeight: "bold",
    fontSize: 12,
    fontFamily: "Quicksand_500Medium",
  },
  ratingText: {
    fontWeight: "500",
    fontSize: 12,
    fontFamily: "Quicksand_400Regular",
  },
  reviewsText: {
    color: "#A19F9F",
    fontFamily: "Quicksand_400Regular",
  },
  addressContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    width: "90%",
  },
  addressText: {
    fontSize: 12,
    fontFamily: "Quicksand_400Regular",
  },
  dateContainer: {
    width: 165,
    borderWidth: 1,
    padding: 5,
    borderRadius: 6,
  },
  dateText: {
    fontSize: 12,
    fontFamily: "Quicksand_400Regular",
  },
  cancellationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "120%",
    gap: 10,
    borderTopColor: "#A19E9F",
    borderTopWidth: 0.3,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  cancellationTitle: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Quicksand_500Medium",
  },
  cancellationText: {
    color: "#73636F",
    fontFamily: "Quicksand_400Regular",
  },
  tripContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Quicksand_600SemiBold",
  },
  tripDetails: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tripDetail: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  tripDetailTitle: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Quicksand_500Medium",
  },
  tripDetailText: {
    fontSize: 16,
    fontFamily: "Quicksand_400Regular",
  },
  paymentContainer: {
    width: "100%",
    display: "flex",
    gap: 16,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Quicksand_500Medium",
  },
  paymentOptionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Quicksand_500Medium",
  },
  paymentOptionText: {
    color: "#736E6F",
    fontSize: 12,
    fontFamily: "Quicksand_400Regular",
  },
  priceDetailsContainer: {
    width: "100%",
    display: "flex",
    gap: 10,
  },
  priceDetail: {
    display: "flex",
    gap: 10,
    backgroundColor: "white",
  },
  priceDetailRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceDetailText: {
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Quicksand_500Medium",
  },
  priceDetailAmount: {
    fontSize: 16,
    fontFamily: "Quicksand_400Regular",
  },
  confirmButton: {
    width: "100%",
    backgroundColor: "#365486",
    height: 42,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmButtonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Quicksand_500Medium",
  },
});
