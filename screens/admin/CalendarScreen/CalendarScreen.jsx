import { View, Text } from "react-native";
import { SafeAreaView } from "react-native";
import styles from "../../../styles/admin/calendar";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

import { Filter } from "react-native-svg";
import { Tabs } from "@ant-design/react-native";
import CalendarMonthScreen from "./CalendarMonthScreen";
import CalendarDetailScreen from "./CalendarDetailScreen";
const CalendarScreen = () => {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const items = [
    {
      title: "Month",
    },
    {
      title: "Detail",
    },
  ];

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.viewContainer}>
        <Text style={styles.titleCalendar}>Calendar</Text>
        <Tabs tabs={items} initialPage={0}>
          <CalendarDetailScreen />
          <CalendarMonthScreen />
        </Tabs>
      </View>
    </SafeAreaView>
  );
};

export default CalendarScreen;
