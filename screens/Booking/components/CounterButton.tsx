import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/store/reduxStore";

type Props = {
  number: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
};
const CounterButton = ({ number, handleIncrease, handleDecrease }: Props) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 35,
        gap: 10,
        paddingHorizontal: 10,
        borderColor: "#365486",
      }}
    >
      <TouchableOpacity onPress={handleIncrease}>
        <Entypo name="plus" size={20} color="#365486" />
      </TouchableOpacity>
      <Text style={{ color: "#365486", fontSize: 16, fontWeight: 500 }}>
        {number}
      </Text>
      <TouchableOpacity onPress={handleDecrease}>
        <Entypo name="minus" size={20} color="#365486" />
      </TouchableOpacity>
    </View>
  );
};

export default CounterButton;

const styles = StyleSheet.create({});
