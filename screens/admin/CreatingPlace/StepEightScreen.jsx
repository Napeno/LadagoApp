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
import styles from "../../../styles/CreatingPlace/stepeight";
import close from "../../../constants/close.png";
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

const StepEightScreen = ({ route, navigation }) => {

  const { formDataRetrieve } = route?.params;

  const [selected, setSelected] = useState({
    promotion: false,
    weekly: false,
    monthly: false,
  });

  const [formData, setFormData] = useState({
  });

  useEffect(() => {
    if (formDataRetrieve) {
      setFormData((prev) => ({
        ...prev,
        ...formDataRetrieve,
      }));
    }
  }, [formDataRetrieve]);

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const handleToggle = (key) => {
    setSelected((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  console.log("formData", formData);

  if (!fontsLoaded) {
    return null;
  }

  const backNav = "STEPSEVEN";
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
              onPress={() => navigation.navigate('ADMIN')}
            >
              <Image style={styles.closeIcon} source={close} resizeMode="cover" />
            </Pressable>

            <Text style={styles.titleStep}>Step 8</Text>
            <Text style={styles.titleInfo}>Add discount</Text>
            <Text style={styles.description}>
              Make your accommodation stand out to quickly get bookings and
              attract intial reviews
            </Text>

            <View style={styles.option}>
              <Text style={styles.percentage}>20%</Text>
              <View style={styles.info}>
                <Text style={styles.title}>
                  Promotion for new house/room rentals
                </Text>
                <Text style={styles.description}>
                  Get a 30% discount on your first 3 bookings.
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handleToggle("promotion")}
                style={styles.checkbox}
              >
                <Icon
                  name={
                    selected.promotion ? "check-box" : "check-box-outline-blank"
                  }
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.option}>
              <Text style={styles.percentage}>5%</Text>
              <View style={styles.info}>
                <Text style={styles.title}>Weekly discount</Text>
                <Text style={styles.description}>
                  For stays of 7 nights or more
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handleToggle("weekly")}
                style={styles.checkbox}
              >
                <Icon
                  name={
                    selected.weekly ? "check-box" : "check-box-outline-blank"
                  }
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.option}>
              <Text style={styles.percentage}>15%</Text>
              <View style={styles.info}>
                <Text style={styles.title}>Monthly discount</Text>
                <Text style={styles.description}>
                  For stays of 28 nights or more
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handleToggle("monthly")}
                style={styles.checkbox}
              >
                <Icon
                  name={
                    selected.monthly ? "check-box" : "check-box-outline-blank"
                  }
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.footerText}>
              Only one discount offer can be applied per stay.
            </Text>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Show more</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <BottomTabCreate
        navigation={navigation}
        backNav={backNav}
        nextNav={nextNav}
        formData={formData}
        currentPage={9}
      />
    </SafeAreaView>
  );
};

export default StepEightScreen;
