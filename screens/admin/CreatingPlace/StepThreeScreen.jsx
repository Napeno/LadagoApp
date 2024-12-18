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
import React, { useState, useEffect } from "react";
import styles from "../../../styles/CreatingPlace/stepthree";
import close from "../../../constants/close.png";
import {
  getAutoComplete,
  getPlaceDetail,
  getReverseGeoCode,
} from "../../../api/goongmap";
import BottomTabCreate from "../../../components/bottomTabCreate";
import { Dropdown } from "react-native-element-dropdown";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";

const StepThreeScreen = ({ route, navigation }) => {
  const { formDataRetrieve } = route.params;
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [markLocaiton, setMarkLocation] = useState(null);
  const [choosenLocation, setChoosenLocation] = useState(null);
  const [predictLocation, setPredictLocation] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const backNav = "STEPTWO";
  const nextNav = "STEPFOUR";

  const [formData, setFormData] = useState([
  ]);

  useEffect(() => {
    if (formDataRetrieve) {
      setFormData((prev) => ({
        ...prev,
        ...formDataRetrieve,
      }));
    }
  }, [formDataRetrieve]);

  useEffect(() => {
    const requestLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLoading(false);
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      if (currentLocation) {
        setLocation(currentLocation);
        setRegion({
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
        setLoading(false);
      }
    };

    if (!location) {
      requestLocationPermission();
    }
  }, [location]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [text]);

  useEffect(() => {
    if (debouncedText && location) {
      const fetchPredictions = async () => {
        try {
          const queryParams = {
            input: debouncedText,
            location: `${location.coords.latitude},${location.coords.longitude}`,
          };
          const response = await getAutoComplete(queryParams);
          // console.log(response)
          setPredictLocation(response.predictions || []);
        } catch (error) {
          console.error("API Error:", error);
        }
      };

      fetchPredictions();
    }
  }, [debouncedText]);

  const handleComboBoxChange = async (item) => {
    try {
      setChoosenLocation({ label: item.label, value: item.value });
      console.log(item);
      const response = await getPlaceDetail(item.value);
      const coorLocation = response?.result?.geometry?.location;
      // console.log(response?.result?.geometry?.location);
      setMarkLocation({
        latitude: coorLocation.lat,
        longitude: coorLocation.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      setFormData((prev) => ({
        ...prev,
        address: item?.label,
        geoCode: `${coorLocation.lat},${coorLocation.lng}`,
      }));
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const handleDraggerChange = async (coordinates) => {
    try {
      setMarkLocation({
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      });
      const geoCode = `${coordinates.latitude},${coordinates.longitude}`;
      const response = await getReverseGeoCode(geoCode);
      const geoLocation = {
        label: response?.results[0]?.formatted_address,
        value: response?.results[0]?.place_id,
      };
      // console.log(response);
      setChoosenLocation({
        label: geoLocation.label,
        value: geoLocation.value,
      });
    } catch (error) {}
  };

  if (!fontsLoaded || loading) {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.viewContainer}>
          <Pressable
              onPress={() => navigation.navigate('ADDHOTEL')}
            >
              <Image style={styles.closeIcon} source={close} resizeMode="cover" />
          </Pressable>
        <Text style={styles.titleStep}>Step 3</Text>

        <Text style={styles.titleInfo}>Location of your place</Text>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={predictLocation.map((item) => ({
            label: item.label || item.description,
            value: item.value || item.place_id,
          }))}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={choosenLocation?.label || "Select location "}
          searchPlaceholder="Search..."
          // value={choosenLocation?.label || text}
          value={"cc"}
          onChangeText={(text) => setText(text)}
          onChange={(item) => handleComboBoxChange(item)}
        />

        {errorMsg ? (
          <Text style={{ color: "red" }}>{errorMsg}</Text>
        ) : (
          <MapView
            showsUserLocation
            showsScale
            showsCompass
            style={styles.map}
            region={markLocaiton ? markLocaiton : region}
          >
            {location && (
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                pinColor={"#69ECFF"}
              >
                <Callout>
                  <Text>Your Location</Text>
                </Callout>
              </Marker>
            )}

            {markLocaiton && (
              <Marker
                coordinate={markLocaiton}
                draggable
                onDragEnd={(e) => {
                  handleDraggerChange(e.nativeEvent.coordinate);
                }}
              >
                <Callout>
                  <Text>{choosenLocation?.label}</Text>
                </Callout>
              </Marker>
            )}
          </MapView>
        )}

        <BottomTabCreate
          navigation={navigation}
          backNav={backNav}
          nextNav={nextNav}
          formData={formData}
          currentPage={4}
        />
      </View>
    </SafeAreaView>
  );
};

export default StepThreeScreen;
