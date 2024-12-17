import React from 'react';
import styles from "../../styles/placeOfferStyles";
import {View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AmenitiesScreen = () => {
	const nav = useNavigation();
	return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Amenities</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Popular amenities</Text>
        <View style={styles.amenitiesGrid}>
          <View style={styles.amenityItem}>
		  	<Icon name="pool" size={30} color="black" />
            <Text style={styles.amenityText}>Pool</Text>
          </View>
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="stove" size={30} color="black" />
            <Text style={styles.amenityText}>Kitchen</Text>
          </View>
          <View style={styles.amenityItem}>
            <Ionicons name="wifi" size={30} color="black" />
            <Text style={styles.amenityText}>Wi-fi</Text>
          </View>
          <View style={styles.amenityItem}>
            <Ionicons name="car-sport" size={30} color="black" />
            <Text style={styles.amenityText}>Parking</Text>
          </View>
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="cctv" size={30} color="black" />
            <Text style={styles.amenityText}>Security camera</Text>
          </View>
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="air-conditioner" size={30} color="black" />
            <Text style={styles.amenityText}>A/C</Text>
          </View>
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="silverware-fork-knife" size={30} color="black" />
            <Text style={styles.amenityText}>Restaurant</Text>
          </View>
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="dumbbell" size={30} color="black" />
            <Text style={styles.amenityText}>Gym</Text>
          </View>
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="glass-cocktail" size={30} color="black" />
            <Text style={styles.amenityText}>Hotel bar</Text>
          </View>
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="spa-outline" size={30} color="black" />
            <Text style={styles.amenityText}>Spa</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Property amenities</Text>
        <View style={styles.amenityItemDetail}>
          <Ionicons name="wifi" size={30} color="black" />
          <View style={styles.amenityDetailText}>
            <Text style={styles.amenityText}>Internet</Text>
            <Text style={styles.amenityDescription}>Available in all rooms: Free Wifi</Text>
            <Text style={styles.amenityDescription}>Available in some public areas: Free Wifi</Text>
          </View>
        </View>
        <View style={styles.divider} />

        <View style={styles.amenityItemDetail}>
          <Ionicons name="car-sport" size={30} color="black" />
          <View style={styles.amenityDetailText}>
            <Text style={styles.amenityText}>Parking</Text>
            <Text style={styles.amenityDescription}>Free parking lot (1 slot per group)</Text>
          </View>
        </View>
        <View style={styles.divider} />

        <View style={styles.amenityItemDetail}>
          <MaterialCommunityIcons name="silverware-fork-knife" size={30} color="black" />
          <View style={styles.amenityDetailText}>
            <Text style={styles.amenityText}>Food and drink</Text>
            <Text style={styles.amenityDescription}>Restaurant which serve the best seafood</Text>
            <Text style={styles.amenityDescription}>Hotel bar has drinks for child and non-alcohol</Text>
          </View>
        </View>
        <View style={styles.divider} />

        <View style={styles.amenityItemDetail}>
            <MaterialCommunityIcons name="cctv" size={30} color="black" />
            <View style={styles.amenityDetailText}>
                <Text style={styles.amenityText}>Security</Text>
                <Text style={styles.amenityDescription}>Cameras at hotel hall that work 24/7</Text>
                <Text style={styles.amenityDescription}>Security guards available 24/24</Text>
            </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.amenityItemDetail}>
            <MaterialCommunityIcons name="stove" size={30} color="black" />
            <View style={styles.amenityDetailText}>
                <Text style={styles.amenityText}>Room facilities</Text>
                <Text style={styles.amenityDescription}>Our hotel room has kitchen for basic cooking</Text>
                <Text style={styles.amenityDescription}>A/C ready to use</Text>
            </View>
        </View>
        <View style={styles.divider} />

        <View style={styles.amenityItemDetail}>
			<Icon name="pool" size={30} color="black" />
            <View style={styles.amenityDetailText}>
                <Text style={styles.amenityText}>Hotel services</Text>
                <Text style={styles.amenityDescription}>Outdoor public swimming pool available 24/24</Text>
                <Text style={styles.amenityDescription}>Gym and spa available in the afternoon</Text>
            </View>
        </View>
        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Not Included</Text>
        <View style={styles.amenitiesGrid}>
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="cat" style={ styles.amenityIcon} />
            <Text style={styles.amenityNText}>Pets</Text>
          </View>
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="television-classic" style={ styles.amenityIcon} />
            <Text style={styles.amenityNText}>TV</Text>
          </View>
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="washing-machine" style={ styles.amenityIcon} />
            <Text style={styles.amenityNText}>Washing machine</Text>
          </View>
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="radiator" style={ styles.amenityIcon} />
            <Text style={styles.amenityNText}>Heater</Text>
          </View>
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="smoke-detector-variant-off" style={ styles.amenityIcon} />
            <Text style={styles.amenityNText}>Smoking room</Text>
          </View>
          <View style={styles.amenityItem}>
            <MaterialCommunityIcons name="coffee-off-outline" style={ styles.amenityIcon} />
            <Text style={styles.amenityNText}>Cafe</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


export default AmenitiesScreen;