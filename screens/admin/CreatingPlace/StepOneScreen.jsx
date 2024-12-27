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
import React, { useState } from "react";
import styles from "../../../styles/CreatingPlace/stepone";
import house from "../../../constants/3dhouse.png";
import close from "../../../constants/close.png";
import BottomTabCreate from "../../../components/bottomTabCreate";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { Filter } from "react-native-svg";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const StepOneScreen = ({ navigation, formDataRetrieve }) => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    name: "",
    description: "",
  });
  const backNav = "CREATE";
  const nextNav = "STEPTWO";
  const [number, onChangeNumber] = React.useState("");

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const handleInputText = (text, type) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: text,
    }));
  };

  const handleSetTime = (time, type) => {
    const selectedTime = time?.nativeEvent?.timestamp;
    // const formattedTime = new Date(selectedTime).toLocaleTimeString();
    if (selectedTime) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [type]: new Date(selectedTime),
      }));
    }
  };

  console.log("formData", formData);

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
            <Pressable onPress={() => navigation.navigate("ADMIN")}>
              <Image
                style={styles.closeIcon}
                source={close}
                resizeMode="cover"
              />
            </Pressable>

            <Text style={styles.titleStep}>Step 1</Text>

            <Text style={styles.titleInfo}>Place Information</Text>
            <Text style={styles.titleName}>Hotel Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Type here"
              returnKeyType="done"
              placeholderTextColor="gray"
              onChangeText={(text) => handleInputText(text, "name")}
            />
            <Text style={styles.titleName}>Description</Text>
            <TextInput
              style={styles.desInput}
              multiline={true}
              maxLength={1000}
              placeholder="Type here"
              placeholderTextColor="gray"
              onChangeText={(text) => handleInputText(text, "description")}
            />
            <Text style={styles.titleName}>CheckIn - Checkout Time</Text>
            <View style={styles.checkTime}>
              <Text style={{ fontSize: 18 }}>{"In: "}</Text>
              <RNDateTimePicker
                value={formData.checkIn || new Date()}
                mode="time"
                onChange={(event) => handleSetTime(event, "checkIn")}
              />
              <View style={styles.lineSpace}></View>
              <Text style={{ fontSize: 18 }}>{"Out: "}</Text>
              <RNDateTimePicker
                value={formData.checkIn || new Date()}
                mode="time"
                onChange={(event) => handleSetTime(event, "checkOut")}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.titleName}>Rating:</Text>
              <View style={[styles.borderCheck, { width: 40, marginLeft: 5 }]}>
                <TextInput
                  style={{ width: 30, textAlign: "center", fontSize: 18 }}
                  keyboardType="numeric"
                  placeholder="00"
                  maxLength={2}
                  onChangeText={(text) => handleInputText(text, "rating")}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>

      <BottomTabCreate
        navigation={navigation}
        backNav={backNav}
        nextNav={nextNav}
        formData={formData}
        currentPage={2}
      />
    </SafeAreaView>
  );
};

export default StepOneScreen;
