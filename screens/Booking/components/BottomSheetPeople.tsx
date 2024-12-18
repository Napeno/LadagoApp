import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native";
import CounterButton from "./CounterButton";
import { Switch } from "react-native";
import {
  increaseAdult,
  decreaseAdult,
  setBringPet,
  increaseChildren,
  decreaseChildren,
  increaseRoom,
  decreaseRoom,
  setDate,
} from "@/store/reduxStore";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { useBooking } from "../useBooking";
type Props = {
  handleSheetChange: (index: number) => void;
};
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/reduxStore";
const BottomSheetPeople = ({ handleSheetChange }: Props) => {
  const bookingState = useSelector((state: RootState) => state.booking);
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    dispatch(setBringPet());
  };
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleIncreaseAdult = () => {
    dispatch(increaseAdult());
  };

  const handleDecreaseAdult = () => {
    dispatch(decreaseAdult());
  };

  const handleIncreaseRoom = () => {
    dispatch(increaseRoom());
  };

  const handleDecreaseRoom = () => {
    dispatch(decreaseRoom());
  };

  const handleIncreaseChildren = () => {
    dispatch(increaseChildren());
  };
  const handleDecreaseChildren = () => {
    dispatch(decreaseChildren());
  };

  return (
    <BottomSheet
      onChange={handleSheetChange}
      enablePanDownToClose
      snapPoints={["90%"]}
      ref={bottomSheetRef}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View>
          <Text style={[styles.text, { fontWeight: "500", fontSize: 16 }]}>
            Select room and passengers quantity
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Room</Text>
          <CounterButton
            number={bookingState.room}
            handleDecrease={handleDecreaseRoom}
            handleIncrease={handleIncreaseRoom}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Adult</Text>
          <CounterButton
            number={bookingState.adult}
            handleDecrease={handleDecreaseAdult}
            handleIncrease={handleIncreaseAdult}
          />
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.text}>Children</Text>
            <Text style={{ color: "#A19E9F" }}>0 - 17 years old </Text>
          </View>
          <CounterButton
            number={bookingState.children}
            handleDecrease={handleDecreaseChildren}
            handleIncrease={handleIncreaseChildren}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Bring your pet</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#34C759" }}
            onValueChange={toggleSwitch}
            value={bookingState.bringPet}
          />
        </View>
        <TouchableOpacity style={[styles.btn]}>
          <Text style={[styles.btnText]}>Apply</Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default BottomSheetPeople;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: 500,
    paddingHorizontal: 20,
    gap: 20,
  },
  text: {
    fontFamily: "Quicksand_500Bold", // Use Quicksand font
    fontSize: 14,
    fontWeight: "500",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#365486",
    width: "100%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
