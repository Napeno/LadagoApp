import {
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../../styles/homepage";
import Categories from "../../components/categories";
import CategoryLocation from "../../components/categoryLocation";
import CategoryPopularLocation from "../../components/caregoryPopularLocation";
import DiscoverLocation from "../../components/discoverLocation";
import PlaceList from "../../components/placeList";
import { useNavigation } from "@react-navigation/native";
//import Ionicons from "react-native-vector-icons/Ionicons";
import * as Location from 'expo-location';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { data } from "@/constants/data";
import FloatingMessage from "@/components/FloatingMessage";
import { Ionicons } from "@expo/vector-icons";
import {getReverseGeoCode} from '../../api/goongmap'

const Homepage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const nav = useNavigation();
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };
  
  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Bán kính Trái Đất (km)
    const dLat = toRadians(lat2 - lat1); 
    const dLon = toRadians(lon2 - lon1);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    const distance = R * c; 
    return distance;
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLoading(false);
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      if (currentLocation) {
        setLocation(currentLocation);
        let latlng = `${currentLocation?.coords?.latitude},${currentLocation?.coords?.longitude}`
        let response = await getReverseGeoCode(latlng);
        setCurrentLocation(response?.results[0]?.formatted_address);
        console.log(response?.results[0]?.formatted_address);
        setLoading(false);
      }
    };

    if (!location) {
      requestLocationPermission();
    }
  }, []);

  const handleChangeCategory = (cat) => {
    setActiveCategory(cat);
  };

  if (!fontsLoaded || loading) {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FloatingMessage />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.viewContainer}>
          <View style={styles.layerWrap}>
            <View style={styles.locationWrap}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Quicksand_400Regular",
                  marginBottom: 4,
                }}
              >
                Current Location
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontFamily: "Quicksand_600SemiBold",
                  marginRight: 8,
                }}
              >
                {currentLocation}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={styles.iconNoti}
                onPress={() => {
                  nav.navigate("Notification");
                }}>
                <Ionicons name="notifications-outline" size={30} color="black" />
              </TouchableOpacity>
              
              <Image
                source={require("../../constants/avatar.png")}
                style={styles.avatar}
                resizeMode="contain"
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.searchLocation}
            onPress={() => {
              nav.navigate("Search");
            }}
          >
            <Image
              source={require("../../constants/searchIcon.png")}
              style={styles.searchIcon}
              resizeMode="contain"
            />
            <Text
              style={{
                fontFamily: "Quicksand_400Regular",
                fontSize: 16,
                color: "#758086",
                marginStart: 15,
                flex: 1,
              }}
            >
              Where to go
            </Text>
            <Text
              style={{
                fontFamily: "Quicksand_600SemiBold",
                fontSize: 16,
                marginRight: 8,
              }}
            >
              Filter
            </Text>
            <Image
              source={require("../../constants/ic_filter.png")}
              style={styles.ic_filter}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={styles.categories}>
            <Categories
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
              datainput={data.categories}
            />
          </View>

          <View style={styles.cardHoriWrap}>
            <View style={styles.textHoriWrap}>
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                Near Location
              </Text>
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                See all
              </Text>
            </View>
            <CategoryLocation location={location}/>
          </View>

          <View style={styles.cardHoriWrap}>
            <View style={styles.textHoriWrap}>
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                Popular Place
              </Text>
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                See all
              </Text>
            </View>
            <CategoryPopularLocation />
          </View>

          <View style={styles.cardHoriWrap}>
            <View style={styles.textHoriWrap}>
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                Discover
              </Text>
              <Text
                style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16 }}
              >
                See all
              </Text>
            </View>
            <DiscoverLocation />
          </View>
          <View style={[styles.cardHoriWrap, { paddingBottom: 100 }]}>
            <Text
              style={{
                fontFamily: "Quicksand_600SemiBold",
                fontSize: 16,
                marginBottom: 24,
              }}
            >
              Recommend today
            </Text>
            <PlaceList />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;
