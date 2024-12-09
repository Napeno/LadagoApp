import {
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import styles from "../../../styles/CreatingPlace/stepfour";
import close from "../../../constants/close.png";
import BottomTabCreate from "../../../components/bottomTabCreate";
import RoomTabCreate from "../../../components/roomTabCreate";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

const StepFourScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });
  const backNav = "STEPTHREE";
  const nextNav = "STEPFIVE";

  const [roomTabs, setRoomTabs] = useState([{ id: 0 }]);

  const handleAddRoom = () => {
    setRoomTabs((prevTabs) => [
      ...prevTabs,
      { id: prevTabs[prevTabs.length - 1].id + 1 },
    ]);
  };

  const handleDeleteRoom = useCallback((idToRemove) => {
    setRoomTabs((prevTabs) =>
      prevTabs.filter((room) => room.id !== idToRemove),
    );
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.viewContainer}>
            <Image style={styles.closeIcon} source={close} resizeMode="cover" />
            <Text style={styles.titleStep}>Step 4</Text>

            <Text style={styles.titleInfo}>Room Information</Text>

            {roomTabs.map((tab) => (
              <RoomTabCreate
                key={tab.id}
                roomTabs={tab.id}
                onDeleteRoom={handleDeleteRoom}
              />
            ))}

            <Pressable style={styles.pressBtn} onPress={handleAddRoom}>
              <Text style={styles.textBtn}>Add another room</Text>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>

      <BottomTabCreate
        navigation={navigation}
        backNav={backNav}
        nextNav={nextNav}
      />
    </SafeAreaView>
  );
};

export default StepFourScreen;
