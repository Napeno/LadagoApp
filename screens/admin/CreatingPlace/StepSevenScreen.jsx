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
import styles from "../../../styles/CreatingPlace/stepseven";
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

const StepSevenScreen = ({ route, navigation }) => {
  const { formDataRetrieve } = route?.params;

  const [isEditing, setIsEditing] = useState(false);
  const [price, setPrice] = useState(20);
  const [subPrice, setSubPrice] = useState(20 + 20 * 0.02);
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const [formData, setFormData] = useState({
    price: 20,
  });

  useEffect(() => {
    if (formDataRetrieve) {
      setFormData((prev) => ({
        ...prev,
        ...formDataRetrieve,
        price: formDataRetrieve.price || 20,
      }));
      setPrice(formDataRetrieve.price || 20);
    }
  }, [formDataRetrieve]);


  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handlePriceChange = (text) => {
    const numericPrice = parseFloat(text);
    if (!isNaN(numericPrice)) {
      setPrice(text);
      setFormData((prev) => ({
        ...prev,
        price: numericPrice,
      }));
      const subPrice = numericPrice + numericPrice * 0.02;
      setSubPrice(subPrice.toFixed(2));
    } else {
      setFormData((prev) => ({
        ...prev,
        price: 0,
      }));
      setPrice(0);
      setSubPrice(0);
    }
  };

  console.log("formData", formData);

  const handleFinishEditing = () => {
    setIsEditing(false);
  };

  if (!fontsLoaded) {
    return null;
  }

  const backNav = "STEPSIX";
  const nextNav = "STEPEIGHT";

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
            handleFinishEditing();
          }}
        >
          <View style={styles.viewContainer}>
            <Pressable
              onPress={() => navigation.navigate('ADMIN')}
            >
              <Image style={styles.closeIcon} source={close} resizeMode="cover" />
            </Pressable>

            <Text style={styles.titleStep}>Step 7</Text>
            <Text style={styles.titleInfo}>Add price of your place</Text>
            <Text style={styles.description}>
              You can change the price of any time.
            </Text>

            <View style={styles.container}>
              <View style={styles.priceRow}>
                {isEditing ? (
                  <TextInput
                    style={styles.priceInput}
                    value={price}
                    onChangeText={handlePriceChange}
                    onSubmitEditing={handleFinishEditing}
                    autoFocus={true}
                    keyboardType={"numeric"}
                  />
                ) : (
                  <Text style={styles.price}>{price} US$</Text>
                )}
                <TouchableOpacity
                  onPress={handleEditPress}
                  style={styles.editButton}
                >
                  <Icon name="edit" size={20} color="#000" />
                </TouchableOpacity>
              </View>
              <Text style={styles.subText}>
                Price for customer (before tax){" "}
                <Text style={styles.subPrice}>{subPrice} US$</Text>
              </Text>
            </View>

            <View style={styles.containerNotifi}>
              <Icon
                name="location-on"
                size={24}
                color="#3A69A8"
                style={styles.icon}
              />
              <Text style={styles.text}>
                Compare similar houses/rooms for rent within the price range of{" "}
                <Text style={styles.priceNotifi}>$18-$26</Text>
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <BottomTabCreate
        navigation={navigation}
        backNav={backNav}
        nextNav={nextNav}
        formData={formData}
        currentPage={8}
      />
    </SafeAreaView>
  );
};

export default StepSevenScreen;
