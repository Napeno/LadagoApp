import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RouteProp, useRoute } from "@react-navigation/native";

type ConfirmScreenParms = {
  Confirm: {
    docId: string;
  };
};

const ConfirmScreen = () => {
  const nav = useNavigation();
  const route = useRoute<RouteProp<ConfirmScreenParms, "Confirm">>();
  const docId = route.params.docId;
  return (
    <View style={[styles.root]}>
      <AntDesign name="checkcircle" size={100} color="#365486" />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 23, fontFamily: "Quicksand_500" }}>
          Booking successfully
        </Text>
        <Text style={{ color: "#878D93", fontSize: 14 }}>
          You have paid sucessfully
        </Text>
        <Text style={{ color: "#365486", fontFamily: "Quicksand_400" }}>
          2,799,00 VND
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            nav.navigate("MAIN" as never);
          }}
          style={{
            borderColor: "#365486",
            borderWidth: 1,
            paddingHorizontal: 25,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontFamily: "Quicksand_400", color: "#365486" }}>
            Homepage
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: "#365486",
            backgroundColor: "#365486",
            borderWidth: 1,
            paddingHorizontal: 25,
            paddingVertical: 10,
            borderRadius: 10,
          }}
          onPress={() => {
            //@ts-ignore
            nav.navigate("Detail", { docId: docId });
          }}
        >
          <Text style={{ color: "white", fontFamily: "Quicksand_400" }}>
            View detail
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
});
