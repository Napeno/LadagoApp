import {
  ScrollView,
  View,
  Image,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/CreatingPlace/stepfive";
import close from "../../../constants/close.png";
import { data } from "../../../constants/data";
import BottomTabCreate from "../../../components/bottomTabCreate";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

const StepFiveScreen = ({ route, navigation }) => {
  const { formDataRetrieve } = route.params;

  const[formData, setFormData] = useState([{

  }])

  useEffect(() => {
    if (formDataRetrieve) {
      const updatedRoomType = formDataRetrieve.roomType.map((room) => ({
        ...room,
        bathroom: room.bathroom || 1, 
        bed: room.bed || 1,         
        bedroom: room.bedroom || 1,  
      }));
  
      setFormData((prev) => ({
        ...prev,
        ...formDataRetrieve,
        roomType: updatedRoomType, 
      }));
  
      const initialCounts = {};
      updatedRoomType.forEach((room) => {
        initialCounts[room.id] = data?.itemRoom?.reduce((acc, item) => {
          acc[item.key] = 1; 
          return acc;
        }, {});
      });
      setCounts(initialCounts);
    }
  }, [formDataRetrieve]);
  


  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const [counts, setCounts] = useState({})

    const handleIncrement = (roomId, key) => {

      setCounts((prev) => ({
        ...prev,
        [roomId]: {
          ...prev[roomId],
          [key]: prev[roomId][key] + 1,
        },
      }));

      setFormData((prev) => {
        const updatedRooms = prev.roomType.map((room) =>
          room.id === roomId
            ? {
                ...room,
                [key]: (room[key] || 0) + 1,
              }
            : room
        );
        return { ...prev, roomType: updatedRooms };
      });
  };

  // console.log(counts)
  console.log('formDataRetrieveStep5', formData);

  const handleDecrement = (roomId, key) => {
  
    setCounts((prev) => ({
      ...prev,
      [roomId]: {
        ...prev[roomId],
        [key]: prev[roomId][key] > 0 ? prev[roomId][key] - 1 : 0,
      },
    }));

    setFormData((prev) => {
      const updatedRooms = prev.roomType.map((room) =>
        room.id === roomId
          ? {
              ...room,
              [key]: room[key] > 0 ? room[key] - 1 : 0,
            }
          : room
      );
      return { ...prev, roomType: updatedRooms };
    });

  };

  if (!fontsLoaded) {
    return null;
  }

  const backNav = "STEPFOUR";
  const nextNav = "STEPSIX";

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

            <Text style={styles.titleStep}>Step 5</Text>
            <Text style={styles.titleInfo}>Place Information</Text>
            <Text style={styles.description}>
              After this, you can add other information.
            </Text>
            
            {formData?.roomType?.map((room) => (
              <View key={room.id} style={styles.container}>
                <Text style={styles.roomTitle}>Room {room.type}</Text>
                {data?.itemRoom?.map((item) => (
                  <View key={item.key} style={styles.item}>
                    <Text style={styles.label}>{item.label}</Text>
                    <View style={styles.counterContainer}>
                      <Pressable
                        style={styles.button}
                        onPress={() => handleDecrement(room.id, item.key)}
                      >
                        <Text style={styles.buttonText}>-</Text>
                      </Pressable>
                      <Text style={styles.count}>
                        {counts[room.id]?.[item.key] || 0}
                      </Text>
                      <Pressable
                        style={styles.button}
                        onPress={() => handleIncrement(room.id, item.key)}
                      >
                        <Text style={styles.buttonText}>+</Text>
                      </Pressable>
                    </View>
                  </View>
                ))}
              </View>
            ))}
            
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <BottomTabCreate
        navigation={navigation}
        backNav={backNav}
        nextNav={nextNav}
        formData={formData}
      />
    </SafeAreaView>
  );
};

export default StepFiveScreen;
