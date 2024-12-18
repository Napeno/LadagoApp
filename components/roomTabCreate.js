import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import React, { useState, useCallback } from "react";
import { data } from "../constants/data";
import styles from "../styles/CreatingPlace/createRoom";

import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

const RoomTabCreate = ({ roomTabs, setFormData, formData, onDeleteRoom }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const half = Math.ceil(data.amenities.length / 2);
  const amenitiesFirstRow = data.amenities.slice(0, half);
  const amenitiesSecondRow = data.amenities.slice(half);

  const [selectedTabs, setSelectedTabs] = useState([]);
  const roomIndex = formData.roomType.findIndex((room) => room.id === roomTabs);

  const handleUpdateRoom = (key, value) => {
    if(key === 'index'){
      setFormData((prev) => {
        const updatedRooms = [...prev.roomType];
        updatedRooms[roomIndex] = {
          ...updatedRooms[roomIndex],
          [key]: value.value,
          type: value.label,
  
        };
        return { ...prev, roomType: updatedRooms };
      });
    }
    else{
      setFormData((prev) => {
        const updatedRooms = [...prev.roomType];
        updatedRooms[roomIndex] = {
          ...updatedRooms[roomIndex],
          [key]: value,
        };
        return { ...prev, roomType: updatedRooms };
      });
    }
  };

  const handleAmenitiesToggle = (amenity) => {
    setFormData((prev) => {
      const updatedRooms = [...prev.roomType];
      updatedRooms[roomIndex].amenities[amenity] =
        !updatedRooms[roomIndex].amenities[amenity];
      return { ...prev, roomType: updatedRooms };
    });

    setSelectedTabs((prev) =>
      prev.includes(amenity)
        ? prev.filter((tab) => tab !== amenity)
        : [...prev, amenity],
    );
  };

  const handleDelete = () => onDeleteRoom(roomTabs);

  const getTabStyles = (tabIndex) => ({
    backgroundColor: selectedTabs.includes(tabIndex)
      ? "#365486"
      : "transparent",
    color: selectedTabs.includes(tabIndex) ? "white" : "black",
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.coveredRoom}>
      <View style={styles.headerRow}>
        <Text style={styles.roomTitle}>Room {roomTabs + 1}</Text>
        <Pressable onPress={handleDelete}>
          <Text>Delete</Text>
        </Pressable>
      </View>

      <View style={styles.divider}></View>

      <Text style={styles.titleName}>Type of room name</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data.typeRoom}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={formData.roomType[roomIndex]?.index || ""}
        onChange={(item) => handleUpdateRoom("index", item)}
      />

      <Text style={styles.titleName}>Room Occupacity</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        placeholder="0"
        maxLength={2}
        value={formData.roomType[roomIndex]?.occupacity?.toString() || ""}
        onChangeText={(text) =>
          handleUpdateRoom("occupacity", parseInt(text) || 0)
        }
      />

      <Text style={styles.titleName}>Amenities</Text>
      <View style={styles.row}>
      {amenitiesFirstRow.map((amenity) => (
        <Pressable
          key={amenity}
          style={[
            styles.checkedItem,
            { backgroundColor: getTabStyles(amenity).backgroundColor },
          ]}
          onPress={() => handleAmenitiesToggle(amenity)}
        >
          <Text
            style={[styles.textItems, { color: getTabStyles(amenity).color }]}
          >
            {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
          </Text>
        </Pressable>
      ))}
    </View>

    {/* Hàng thứ hai */}
    <View style={styles.row}>
      {amenitiesSecondRow.map((amenity) => (
        <Pressable
          key={amenity}
          style={[
            styles.checkedItem,
            { backgroundColor: getTabStyles(amenity).backgroundColor },
          ]}
          onPress={() => handleAmenitiesToggle(amenity)}
        >
          <Text
            style={[styles.textItems, { color: getTabStyles(amenity).color }]}
          >
            {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
          </Text>
        </Pressable>
      ))}
    </View>
    </View>
  );
};

export default RoomTabCreate;
