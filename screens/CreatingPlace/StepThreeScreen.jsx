import { ScrollView, View, Image, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/CreatingPlace/stepthree';
import close from '../../constants/close.png';
import { getAutoComplete } from '../../api/goongmap';
import BottomTabCreate from '../../components/bottomTabCreate';
import { Dropdown } from 'react-native-element-dropdown';
import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

const StepThreeScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    });
    const [text, setText] = useState('');
    const [debouncedText, setDebouncedText] = useState('');
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState(null);
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

    useEffect(() => {
        const requestLocationPermission = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setLoading(false);
                setErrorMsg('Permission to access location was denied');
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
            console.log('calledText')
            setDebouncedText(text);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [text]);

    useEffect(() => {
        console.log('called')
        if (debouncedText && location) {
            const fetchPredictions = async () => {
                try {
                    const queryParams = {
                        input: debouncedText,
                        location: `${location.coords.latitude},${location.coords.longitude}`,
                    };
                    const response = await getAutoComplete(queryParams);
                    console.log(response)
                    setPredictLocation(response.predictions || []);
                } catch (error) {
                    console.error('API Error:', error);
                }
            };

            fetchPredictions();
        }
    }, [debouncedText]);

    if (!fontsLoaded || loading) {
        return <SafeAreaView style={styles.safeAreaView}><Text>Loading...</Text></SafeAreaView>;
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.viewContainer}>
                <Image
                    style={styles.closeIcon}
                    source={close}
                    resizeMode="cover"
                />
                <Text style={styles.titleStep}>
                    Step 3
                </Text>

                <Text style={styles.titleInfo}>
                    Location of your place
                </Text>

                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={
                        Array.isArray(predictLocation)
                            ? predictLocation.map(item => ({
                                  label: item.label || item.description,
                                  value: item.value || item.place_id,
                              }))
                            : []
                    }
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Search location"
                    searchPlaceholder="Search..."
                    value={text}
                    onChangeText={(text) => setText(text)} 
                    onChange={(item) => setText(item.label)}
                />

                {errorMsg ? (
                    <Text style={{ color: 'red' }}>{errorMsg}</Text>
                ) : (
                    <MapView
                        showsUserLocation
                        showsScale
                        showsCompass
                        style={styles.map}
                        region={region}
                    >
                        {location && (
                            <Marker coordinate={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                            }}>
                                <Callout>
                                    <Text>Your Location</Text>
                                </Callout>
                            </Marker>
                        )}
                    </MapView>
                )}

                <BottomTabCreate navigation={navigation} backNav={backNav} nextNav={nextNav} />
            </View>
        </SafeAreaView>
    );
};

export default StepThreeScreen;
