import { ScrollView, View, Image, Text, Pressable, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import { SafeAreaView, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../../../styles/CreatingPlace/stepnine';
import close from '../../../constants/close.png';
import confirm from '../../../constants/clipboard.png';
import calendar from '../../../constants/blank_calendar.png';
import { data } from '../../../constants/data';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomTabCreate from '../../../components/bottomTabCreate'
import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

const StepNineScreen = ({ navigation }) => {

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

    const backNav = "STEPEIGHT";
    const nextNav = "STEPTEN";

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <TouchableWithoutFeedback onPress={() => { 
                    Keyboard.dismiss();
                    }}>
                    <View style={styles.viewContainer}>
                        <Image
                            style={styles.closeIcon}
                            source={close}
                            resizeMode='cover'
                        />

                        <Text style={styles.titleStep}>Step 9</Text>
                        <Text style={styles.titleInfo}>Reiview the upload place</Text>
                        <Text style={styles.description}>
                            Below is the information we will display to guests.
                            Please ensure everything is correct.
                        </Text>
                        <View style={styles.container}>
                            <View style={styles.card}>
                                <Image
                                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/LocationPlace%2Fimg1.png?alt=media&token=5e968fb3-c07d-4039-ac6a-1a689b7bf715' }} 
                                style={styles.image}
                                />
                                <View style={styles.cardContent}>
                                <View>
                                    <Text style={styles.title}>Paradise</Text>
                                    <Text style={styles.price}>$16/ night</Text>
                                </View>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>New</Text>
                                    <Icon name="star-border" size={24} color="#000" />
                                </View>
                                </View>
                            </View>

                            <Text style={styles.sectionTitle}>What is next?</Text>

                            <View style={styles.step}>
                                <Image
                                    style={styles.stepIcon}
                                    source={confirm}
                                    resizeMode='cover'
                                />
                                <View style={styles.stepContent}>
                                <Text style={styles.stepTitle}>Confirm information then upload for rent</Text>
                                <Text style={styles.stepDescription}>
                                    We will let you know if you need to verify, identify, or register to the government.
                                </Text>
                                </View>
                            </View>

                            <View style={styles.step}>
                                <Image
                                    style={styles.stepIcon}
                                    source={calendar}
                                    resizeMode='cover'
                                />
                                <View style={styles.stepContent}>
                                <Text style={styles.stepTitle}>Set up calendar</Text>
                                <Text style={styles.stepDescription}>
                                    Choose a day which has slot for customer. The day for rent will show up after 24 hours starting from uploading.
                                </Text>
                                </View>
                            </View>
                        </View>
                        

                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
            <BottomTabCreate navigation={navigation} backNav={backNav} nextNav={nextNav}/>
        </SafeAreaView>
    );
};

export default StepNineScreen;