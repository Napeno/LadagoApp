import { ScrollView, View, Image, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import React from 'react';
import styles from '../styles/homescreen';

const HomeScreen = () => {
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

            <TouchableOpacity style={styles.loginScreenButton} >
              <Text style={styles.login_btn}>
                Login
              </Text>
            </TouchableOpacity>

            <Text style={{ textAlign: 'center', marginBottom: 16 }}>Or</Text>

            <TouchableOpacity style={styles.registerScreenButton}>
              <Text style={styles.register_btn}>
                Register
              </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.other_login}>
            <Text style={{ textAlign: 'center', marginBottom: 32 }}>-Or sign in with-</Text>
            
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

export default HomeScreen;
