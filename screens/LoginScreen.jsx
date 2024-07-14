import { ScrollView, View, Image, Text, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native'
import styles from '../styles/loginscreen';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

const LoginScreen = () => {
  const navigation = useNavigation();
  
  const handleHome = () =>{
    navigation.navigate("HOME");
  }

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
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.viewContainer}>
          <Image
            source={require('../constants/ladago.png')}
            style={styles.logo}
            resizeMode='contain'
          />
          <View style={styles.viewForm}>
            <Text style={styles.titleForm}>
              Log in to LADAGO
            </Text>
            <TextInput style={styles.textInput} placeholder="Username" placeholderTextColor="gray" />
            <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor="gray" />
            <Text style={styles.forgetPassword}>Forget password?</Text>
          </View>
          <View style={styles.interact_btn}>
            <Pressable style={styles.loginScreenButton} onPress={handleHome}>
              <Text style={styles.login_btn}>
                Login
              </Text>
            </Pressable>
            <Text style={{ textAlign: 'center', marginBottom: 16, fontFamily: 'Quicksand_500Medium' }}>Or</Text>
            <Pressable style={styles.registerScreenButton}>
              <Text style={styles.register_btn}>
                Register
              </Text>
            </Pressable>
          </View>
          <View style={styles.other_login}>
            <Text style={{ textAlign: 'center', marginBottom: 32, fontFamily: 'Quicksand_500Medium', }}>-Or sign in with-</Text>
            <View style={styles.icon_login}>
              <Image
                style={styles.icon}
                source={require('../constants/google_icon.png')}
                resizeMode='contain'
              />
              <Image
                style={styles.icon_apple}
                source={require('../constants/apple_icon.png')}
                resizeMode='contain'
              />
              <Image
                style={styles.icon_phone}
                source={require('../constants/phone_icon.png')}
                resizeMode='contain'
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
