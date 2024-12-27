import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigation();
  const handleSignUp = async () => {
    if (!username || !password || !phoneNumber) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;
      console.log('User registered:', user);
      Alert.alert('Success', 'Registration successful!');
      nav.navigate('LOGIN');
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Image
        source={require("../constants/ladago.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Create a LADAGO account</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#D3D3D3"
          value={username}
          onChangeText={setUsername}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            placeholderTextColor="#D3D3D3"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPressIn={() => setShowPassword(true)}
            onPressOut={() => setShowPassword(false)}
          >
            <Icon name="eye-outline" style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Phone number"
          placeholderTextColor="#D3D3D3"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.orSignUpWith}>-Or sign up with-</Text>
        <View style={styles.icon_login}>
          <Image
            style={styles.icon}
            source={require("../constants/google_icon.png")}
            resizeMode="contain"
          />
          <Image
            style={styles.icon_apple}
            source={require("../constants/apple_icon.png")}
            resizeMode="contain"
          />
          <Image
            style={styles.icon_phone}
            source={require("../constants/phone_icon.png")}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
  },
  passwordInput: {
    flex: 1,
  },
  eyeIconContainer: {
    position: "absolute",
    right: 15,
    height: '100%',
    justifyContent: 'center',
  },
  eyeIcon: {
    height: 30,
    width: 20,
    fontSize: 20,
    color: 'black',
  },
  signUpButton: {
    backgroundColor: "#3b5998",
    borderRadius: 5,
    padding: 15,
  },
  signUpButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  orSignUpWith: {
    textAlign: "center",
    marginVertical: 50,
    color: "#777",
  },
  logo: {
    width: 200,
    height: 40,
    alignSelf: 'center',
    marginBottom: 80,
    marginTop: 50,
  },
  icon_login: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    columnGap: 72,
    flexDirection: 'row',
  },
  icon: {
    width: 52,
    height: 52,
  },
  icon_apple: {
    width: 64,
    height: 64,
  },
  icon_phone: {
    width: 48,
    height: 48,
  },
});

export default SignUpScreen;
