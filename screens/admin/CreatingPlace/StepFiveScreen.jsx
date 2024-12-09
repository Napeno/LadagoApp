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

const StepFiveScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const [counts, setCounts] = useState(
    data?.itemRoom?.reduce((acc, item) => {
      acc[item.key] = 1;
      return acc;
    }, {}),
  );

  const [selectedTabs, setSelectedTabs] = useState([]);

  useEffect(() => {});

  const handlePress = (tabIndex) => {
    setSelectedTabs(
      selectedTabs.includes(tabIndex)
        ? selectedTabs.filter((index) => index !== tabIndex)
        : [...selectedTabs, tabIndex],
    );
  };

  const getTabStyles = (tabIndex) => ({
    backgroundColor: selectedTabs.includes(tabIndex)
      ? "#365486"
      : "transparent",
    color: selectedTabs.includes(tabIndex) ? "white" : "black",
  });

  const handleIncrement = (key) => {
    setCounts((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };

  const handleDecrement = (key) => {
    setCounts((prev) => ({
      ...prev,
      [key]: prev[key] > 0 ? prev[key] - 1 : 0, // Prevent going below 0
    }));
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

            <View style={styles.container}>
              {data?.itemRoom?.map((item) => (
                <View key={item.key} style={styles.item}>
                  <Text style={styles.label}>{item.label}</Text>
                  <View style={styles.counterContainer}>
                    <Pressable
                      style={styles.button}
                      onPress={() => handleDecrement(item.key)}
                    >
                      <Text style={styles.buttonText}>-</Text>
                    </Pressable>
                    <Text style={styles.count}>{counts[item.key]}</Text>
                    <Pressable
                      style={styles.button}
                      onPress={() => handleIncrement(item.key)}
                    >
                      <Text style={styles.buttonText}>+</Text>
                    </Pressable>
                  </View>
                </View>
              ))}
            </View>
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

export default StepFiveScreen;
