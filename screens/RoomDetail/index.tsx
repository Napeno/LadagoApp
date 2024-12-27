import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";
import { Hotel } from "@/types/type";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/firebase";
import { roomDetail } from "@/constants/data";
import { RouteProp } from "@react-navigation/native";
type RoomDetailRouteParams = {
  RoomDetail: {
    docId: string;
  };
};
const RoomDetail = () => {
  const nav = useNavigation();
  const [hotel, setHotel] = useState<Hotel | null>(roomDetail);
  const [loading, setLoading] = useState<boolean>(false);
  const route = useRoute<RouteProp<RoomDetailRouteParams, "RoomDetail">>();
  const docId = route.params?.docId;
  useEffect(() => {
    if (!docId) return;

    const getHotelById = async () => {
      setLoading(true);

      try {
        const hotelDocRef = doc(firestore, "hotel", docId);
        const hotelDocSnapshot = await getDoc(hotelDocRef);

        if (hotelDocSnapshot.exists()) {
          const hotelData = hotelDocSnapshot.data() as Hotel;
          setHotel(hotelData);
        } else {
          console.warn(`No hotel found with ID: ${docId}`);
        }
      } catch (error) {
        console.error("Error fetching hotel:", error);
      } finally {
        setLoading(false);
      }
    };

    getHotelById();
  }, [docId]);

  if (loading) return <ActivityIndicator />;
  return (
    <ScrollView
      style={[styles.root]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, gap: 20 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={[styles.iconListContainer]}>
        <TouchableOpacity
          onPress={() => nav.navigate("MAIN" as never)}
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
          uri: hotel?.imgHotel[0],
        }}
      />
      <View style={styles.infoLocationNameContainer}>
        <Text
          style={[styles.locationName, { fontFamily: "Quicksand_700Bold" }]}
        >
          {hotel?.name}
        </Text>
        <View style={styles.infoContainer}>
          <MaterialCommunityIcons
            name="map-marker-radius"
            size={20}
            color="#365486"
          />
          <Text style={[styles.info, { fontFamily: "Quicksand_700Bold" }]}>
            {hotel?.address}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Fontisto name="star" size={20} color="#fec008" />
          <Text style={[styles.info, { fontFamily: "Quicksand_700Bold" }]}>
            4.8 -{" "}
          </Text>
          <TouchableOpacity onPress={() => nav.navigate("Review" as never)}>
            <Text
              style={[
                {
                  textDecorationLine: "underline",
                  fontFamily: "Quicksand_700Bold",
                },
                styles.info,
              ]}
            >
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
          <Text style={[styles.info, { fontFamily: "Quicksand_700Bold" }]}>
            232 km
          </Text>
        </View>
      </View>
      <View style={styles.introductionContainer}>
        <Text
          style={[
            styles.introductionTitle,
            { fontFamily: "Quicksand_700Bold" },
          ]}
        >
          Introducing this place
        </Text>
        <Text style={{ fontFamily: "Quicksand_400Regular" }} numberOfLines={3}>
          {/* Our accommodation is where you truly come back to nature. Surrounding
          you are coffee, avocado, and durian gardens. The most important is the
          natural lake (Dak Long Thuong Lake) where you can kayak. In the near
          future, we will install wind power to supply electricity to our
          area... */}
          {hotel?.description}
        </Text>
        <TouchableOpacity
          onPress={() => nav.navigate("INTRODUCTION" as never)}
          style={styles.showMoreContainer}
        >
          <Text style={styles.showMore}>Show more</Text>
          <AntDesign name="right" size={16} color="black" />
        </TouchableOpacity>
      </View>
      <View style={[styles.meeTheOwnerContainer]}>
        <View style={[styles.divider]} />
        <Text style={[styles.meetTheOwnerTitle]}>Meet the owner</Text>

        <View style={[styles.ownerContainer]}>
          <View style={[styles.ownerCard]}>
            <View style={[styles.ownerInfo]}>
              <View style={[styles.ownerAvatar]}>
                <Text style={[styles.ownerInitial]}>B</Text>
              </View>
              <View style={[styles.ownerInfo]}>
                <Text style={[styles.ownerName]}>Ben</Text>
                <Text style={[styles.ownerRole]}>Reputable host</Text>
              </View>
            </View>
            <View style={[styles.ownerStats]}>
              <Text style={[styles.statItem]}>
                6 {"\n"}
                reviews
              </Text>
              <Text style={[styles.statItem]}>
                4.9 {"\n"}
                stars
              </Text>
              <Text style={[styles.statItem]}>
                3 {"\n"}
                years experience
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.placeOffersContainer]}>
          <Text style={[styles.offersTitle]}>What this place offers</Text>
          <View style={[styles.offerList]}>
            <View style={styles.offerItem}>
              <Icon name="pool" size={24} color="black" />
              <Text style={styles.offerText}>Pool</Text>
            </View>
            <View style={styles.offerItem}>
              <MaterialCommunityIcons name="stove" size={24} color="black" />
              <Text style={styles.offerText}>Kitchen</Text>
            </View>
            <View style={styles.offerItem}>
              <Ionicons name="wifi" size={24} color="black" />
              <Text style={styles.offerText}>Wi-fi</Text>
            </View>
            <View style={styles.offerItem}>
              <Ionicons name="car-sport" size={24} color="black" />
              <Text style={styles.offerText}>Parking</Text>
            </View>
            <View style={styles.offerItem}>
              <MaterialCommunityIcons name="cctv" size={24} color="black" />
              <Text style={styles.offerText}>Security camera</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.showAllButton}
            onPress={() => {
              nav.navigate("Amenities" as never);
            }}
          >
            <Text style={[styles.showAll]}>Show all</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.divider]} />
      </View>

      <View style={[styles.priceBookContainer]}>
        <Text style={[styles.price]}>700k VND/night</Text>
        <TouchableOpacity
          style={[styles.bookBtn]}
          //@ts-ignore
          onPress={() => nav.navigate("Booking", { docId: docId })}
        >
          <Text style={[styles.bookNow]}>Book now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RoomDetail;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    height: "100%",
    //alignItems: "flex-start",
    borderColor: "red",
    //gap: 10,
  },
  image: {
    width: "100%",
    height: 300,
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
    marginBottom: -8,
  },
  showMore: {
    textDecorationLine: "underline",
    fontFamily: "Quicksand_500Medium",
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
    width: 160,
    height: 50,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10,
    justifyContent: "center",
  },
  priceBookContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    marginLeft: 5,
  },
  bookNow: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Quicksand_500Medium",
  },
  price: {
    fontWeight: "600",
    fontSize: 20,
  },

  ownerContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  ownerCard: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 25,
    flexDirection: "row", // Changed to row
    alignItems: "center",
    backgroundColor: "#f8f9fa", // Changed background color
    justifyContent: "space-around", // Added to space elements
  },
  ownerAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#343a40", // Changed background color
    justifyContent: "center",
    alignItems: "center",
  },
  ownerInitial: {
    fontSize: 22,
    fontWeight: "600",
    color: "white", // Changed text color
  },
  ownerInfo: {
    //marginTop: 10,
    alignItems: "center", // Align text to the left
    marginLeft: 5, // Added margin to separate from avatar
    flexDirection: "column",
  },
  ownerName: {
    fontSize: 20, // Changed font size
    fontWeight: "bold",
  },
  ownerRole: {
    color: "#555",
  },
  ownerStats: {
    //marginTop: 10,
    alignItems: "flex-start", // Align text to the right
  },
  statItem: {
    fontSize: 14,
    color: "#11111",
    textAlign: "left", // Added to align text inside each item
    fontWeight: "400",
    marginLeft: 30,
  },

  //style place offer
  placeOffersContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  offersTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  offerList: {
    flexDirection: "column",
    gap: 10,
  },
  offerItem: {
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 5,
  },
  offerText: {
    fontSize: 16,
  },
  showAll: {
    color: "black",
    textDecorationLine: "none", // Bỏ gạch chân
    fontWeight: "600",
    textAlign: "center",
  },
  showAllButton: {
    marginTop: 10,
    borderWidth: 1, // Thêm đường viền
    borderColor: "#748CAB", // Màu đường viền
    borderRadius: 5, // Bo góc
    paddingVertical: 10, // Thêm padding dọc
    paddingHorizontal: 80, // Thêm padding ngang
    alignSelf: "center",
  },
});
