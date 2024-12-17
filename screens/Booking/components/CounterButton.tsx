import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";
type Props = {
  number:number
}
const CounterButton = ({number}:Props) => {
  const [counter, setCounter] = useState<number>(number);
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
      <TouchableOpacity>
        <Entypo name="plus" size={20} color="#365486" />
      </TouchableOpacity>
      <Text style={{ color: "#365486", fontSize: 16, fontWeight: 500 }}>
        {counter}
      </Text>
      <TouchableOpacity>
        <Entypo name="minus" size={20} color="#365486" />
      </TouchableOpacity>
    </View>
  );
};

export default CounterButton;

const styles = StyleSheet.create({});
