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
import {data} from '../../../constants/data'
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

const StepFourScreen = ({ route, navigation }) => {
  const { formDataRetrieve } = route.params;

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

  const createAmenitiesObject = (amenitiesList) => {
    const amenitiesObject = {};
    amenitiesList.forEach((item) => {
      amenitiesObject[item] = false;
    });
    return amenitiesObject;
  };

  const [formData, setFormData] = useState({
    roomType: [
      {
        id: 0,
        occupacity: 0,
        type: "",
        amenities: createAmenitiesObject(data.amenities),
      },
    ],
  });

  useEffect(() => {
    if (formDataRetrieve) {
      setFormData((prev) => ({
        ...prev,
        ...formDataRetrieve,
      }));
    }
  }, [formDataRetrieve]);

  const handleAddRoom = () => {
    const newId = roomTabs[roomTabs.length - 1]?.id + 1 || 0;
    setRoomTabs((prevTabs) => [...prevTabs, { id: newId }]);
    setFormData((prev) => ({
      ...prev,
      roomType: [
        ...prev.roomType,
        {
          id: newId,
          occupacity: 0,
          type: "",
          amenities: {
            bathTub: false,
            cleaningService: false,
            pet: false,
            wifi: false,
          },
        },
      ],
    }));
  };

  const handleDeleteRoom = useCallback(
    (idToRemove) => {
      setRoomTabs((prevTabs) =>
        prevTabs.filter((room) => room.id !== idToRemove),
      );
      setFormData((prev) => ({
        ...prev,
        roomType: prev.roomType.filter((room) => room.id !== idToRemove),
      }));
    },
    [setFormData],
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.viewContainer}>
            <Pressable
              onPress={() => navigation.navigate('ADMIN')}
            >
              <Image style={styles.closeIcon} source={close} resizeMode="cover" />
            </Pressable>
            <Text style={styles.titleStep}>Step 4</Text>

            <Text style={styles.titleInfo}>Room Information</Text>

            {roomTabs.map((tab) => (
              <RoomTabCreate
                key={tab.id}
                roomTabs={tab.id}
                setFormData={setFormData}
                formData={formData}
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
        formData={formData}
        currentPage={5}
        />
    </SafeAreaView>
  );
};

export default StepFourScreen;
