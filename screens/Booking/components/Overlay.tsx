import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const OverLay = () => {
  return <View style={styles.overlay}></View>;
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
});

export default OverLay;
