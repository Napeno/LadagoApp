import {
    ScrollView,
    View,
    Image,
    Text,
    TextInput,
    Pressable,
  } from "react-native";
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
  
  const CalendarScreen = () => {
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
  
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.viewContainer}>
          <Text style={styles.titleCalendar}>Calendar</Text>
        </View>
      </SafeAreaView>
    );
  };
  
  export default CalendarScreen;
  