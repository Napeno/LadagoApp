import {
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native";
import styles from "../../styles/bookingScreen";
import BookingList from "../../components/bookingList";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { getDocs, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "@/firebase";
import { collection } from "firebase/firestore";
const BookingScreen = () => {
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

  if (loading) return <ActivityIndicator />;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.viewContainer}>
        <View style={styles.firstLayer}>
          <Text style={styles.tilteBooking}>Booking List</Text>

          <Text style={styles.editBooking}>Edit</Text>
        </View>

        <BookingList />
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;
