import { ScrollView, View, Image, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/CreatingPlace/stepthree';
import close from '../../constants/close.png';
import BottomTabCreate from '../../components/bottomTabCreate';
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
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
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
                setRegion((prev) => ({
                    ...prev,
                    latitude: currentLocation.coords.latitude,
                    longitude: currentLocation.coords.longitude,
                }));
                setLoading(false);
            }
        };
    
        if (!location) {
            requestLocationPermission();
        }
    }, [location]);

    if (!fontsLoaded || loading) {
        return <SafeAreaView style={styles.safeAreaView}><Text>Loading...</Text></SafeAreaView>;
    }


    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.viewContainer}>
                <Image
                    style={styles.closeIcon}
                    source={close}
                    resizeMode='cover'
                />
                <Text style={styles.titleStep}>
                    Step 3
                </Text>

                <Text style={styles.titleInfo}>
                    Location of your place
                </Text>

                <TextInput
                    style={styles.textInput}
                    placeholder="Type here"
                    returnKeyType='done'
                    placeholderTextColor="gray"
                />

                {errorMsg ? (
                    <Text style={{ color: 'red' }}>{errorMsg}</Text>
                ) : (
                    <MapView
                        showsUserLocation={true}
                        followsUserLocation={true}  // Optional: Ensures map moves with user location
                        style={styles.map}
                        region={region} // Use region here to update the map view dynamically
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
