import {
  ScrollView,
  View,
  Image,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/CreatingPlace/stepten";
import close from "../../../constants/close.png";
import complete from "../../../constants/compete.png";
import { data } from "../../../constants/data";
import Icon from "react-native-vector-icons/MaterialIcons";
import BottomTabCreate from "../../../components/bottomTabCreate";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

const StepTenScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const backNav = "STEPNINE";
  const nextNav = "STEPNINE";

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.viewContainer}>
            <Pressable
              onPress={() => navigation.navigate('ADDHOTEL')}
            >
              <Image style={styles.closeIcon} source={close} resizeMode="cover" />
            </Pressable>

            <Text style={styles.titleInfo}>
              Your place has been uploaded successfully
            </Text>
            <Text style={styles.description}>
              You can check your uploaded place in the homepage.
            </Text>

            <View style={styles.container}>
              <Image
                style={styles.image}
                source={complete}
                resizeMode="cover"
              />
              <Text style={[styles.titleInfo, { alignSelf: "center" }]}>
                Successfully uploaded!
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <BottomTabCreate
        navigation={navigation}
        backNav={backNav}
        nextNav={nextNav}
        isUploaded={true}
        currentPage={11}
      />
    </SafeAreaView>
  );
};

export default StepTenScreen;
