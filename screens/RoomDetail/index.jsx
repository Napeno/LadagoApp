import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../styles/admin/roomdetail';

const RoomDetail = ({route}) => {
  const navigation = useNavigation();
  const { formData } = route?.params;
  const {distanceMatrix} = route?.params;

  console.log(formData);
  // console.log(distanceMatrix);
  return (
    <ScrollView style={[styles.root]} showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1,  gap:20 }} keyboardShouldPersistTaps="handled">
      <View style={[styles.iconListContainer]}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MAIN")}
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
          uri: formData.imgHotel[0],
        }}
      />
      <View style={styles.container}>
        <View style={styles.infoLocationNameContainer}>
          <Text
            style={[styles.locationName, { fontFamily: "Quicksand_700Bold" }]}
          >
            {formData.name}
          </Text>
          <View style={styles.infoContainer}>
            <MaterialCommunityIcons
              name="map-marker-radius"
              size={20}
              color="#365486"
            />
            <Text numberOfLines={2} style={[styles.info, { fontFamily: "Quicksand_700Bold" }]}>
              {formData.address}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Fontisto name="star" size={20} color="#fec008" />
            <Text style={[styles.info, { fontFamily: "Quicksand_700Bold" }]}>
              {formData.rating} -{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Review")}>
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
              {distanceMatrix} km
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
          <Text style={{ fontFamily: "Quicksand_400Regular" }}>
            {formData.description}
            {/* Our accommodation is where you truly come back to nature. Surrounding
            you are coffee, avocado, and durian gardens. The most important is the
            natural lake (Dak Long Thuong Lake) where you can kayak. In the near
            future, we will install wind power to supply electricity to our
            area... */}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("INTRODUCTION")}
            style={styles.showMoreContainer}
          >
            <Text style={styles.showMore}>Show more</Text>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
        </View>

        <View style={[styles.divider]} />

        <View style={[styles.meeTheOwnerContainer]}>
          <Text style={[styles.meetTheOwnerTitle]}>Meet the owner</Text>

          <View style={[styles.ownerContainer]}>
            <View style={[styles.ownerCard]}>
              <View style ={[styles.ownerInfo]}>
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
                <MaterialCommunityIcons
                  name="stove"
                  size={24}
                  color="black"
                />
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
                <MaterialCommunityIcons
                  name="cctv"
                  size={24}
                  color="black"
                />
                <Text style={styles.offerText}>Security camera</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.showAllButton} 
              onPress={() => {
                navigation.navigate("Amenities");
              }}>
              <Text style={[styles.showAll]}>Show all</Text>

            </TouchableOpacity>
          </View>

          <View style={[styles.divider]} />
        </View>
        
        <View style={[styles.priceBookContainer]}>
          <Text style={[styles.price]}>700k VND/night</Text>
          <TouchableOpacity style={[styles.bookBtn]}
                    onPress={() => navigation.navigate("Booking")}
          >
            <Text style={[styles.bookNow]}>Book now</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
};

export default RoomDetail;

