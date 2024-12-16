import {
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView, TouchableOpacity } from "react-native";
import styles from "../../../styles/admin/calendarMonth";
import {
  Calendar,
  CalendarList,
  CalendarUtils,
  DateData,
} from "react-native-calendars";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import avatar from "../../../constants/avatar2.png";
import { useNavigation } from "@react-navigation/native";

const CalendarMonthScreen = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formattedDate = getFormattedDate();

  const [selected, setSelected] = useState(formattedDate);

  const dateUser = ["2024-12-17", "2025-01-07", "2025-01-09"];

  const handleDayPress = (date) => {
    console.log("Day pressed:", date.dateString);
    setSelected(date.dateString);
    navigation.navigate("CALENDARDETAIL");
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.viewContainer}>
        <Text style={styles.titleCalendar}>Calendar</Text>
        <CalendarList
          calendarWidth={"100%"}
          dayComponent={({ date, state }) => {
            const isUserBooked = dateUser.includes(date.dateString);

            return !isUserBooked ? (
              <View>
                <TouchableOpacity onPress={() => handleDayPress(date)}>
                  <Text style={styles.dateCalendar}>{date.day}</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TouchableOpacity onPress={() => handleDayPress(date)}>
                  <Image
                    style={styles.userAvatar}
                    source={avatar}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          theme={{
            textSectionTitleColor: "black",
            textSectionTitleDisabledColor: "black",
            selectedDayBackgroundColor: "black",
            selectedDayTextColor: "black",
            todayTextColor: "black",
            dayTextColor: "black",
            textDisabledColor: "black",
            dotColor: "black",
            selectedDotColor: "#ffffff",
            arrowColor: "orange",
            disabledArrowColor: "#d9e1e8",
            monthTextColor: "black",
            indicatorColor: "black",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 16,
            textMonthFontSize: 14,
            textDayHeaderFontSize: 14,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CalendarMonthScreen;
