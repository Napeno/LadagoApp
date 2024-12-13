import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/admin/createscreen'
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import createQR from '../../constants/apple_icon.png'
import createRental from '../../constants/create_rental.png'
import scanBarcode from '../../constants/scanqr.png'
import createBarcode from '../../constants/cart.png'
import cart from '../../constants/createbarcode.png'
import supportIcon from '../../constants/supportIcon.png'
import suportCustomer from '../../constants/customerSupportIcon.png'
import editIcon from '../../constants/editIcon.png'
import arrow from '../../constants/arrow.png'


const CreateScreen = () => {
  const navigation = useNavigation();
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

      <Text style={styles.titleManagement}>
            Management
          </Text>
        <View style={styles.wrap_columns}>
          <View style={styles.wrap_button}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CREATE')}
            >
              <Image 
                    source={createRental}
                    style={styles.button_icon}
                    resizeMode='contain'
                />
                <View style={styles.wrap_text}>
                  <Text style={styles.buttonText}>Create Rental</Text>
                  <Text style={styles.textDes}>Created 263</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Booking')}
            >
              <Image 
                    source={scanBarcode}
                    style={styles.button_icon}
                    resizeMode='contain'
                />
                <View style={styles.wrap_text}>
                  <Text style={styles.buttonText}>View Rental</Text>
                  <Text style={styles.textDes}>Owned 321</Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style={styles.wrap_button}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CreateBarcode')}
            >
              <Image 
                    source={createBarcode}
                    style={styles.button_icon}
                    resizeMode='contain'
                />
                <View style={styles.wrap_text}>
                  <Text style={styles.buttonText}>Search Rental</Text>
                  <Text style={styles.textDes}>Available 102</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ViewCart')}
            >
              <Image 
                    source={cart}
                    style={styles.button_icon}
                    resizeMode='contain'
                />
                <View style={styles.wrap_text}>
                  <Text style={styles.buttonText}>Copy Rental</Text>
                  <Text style={styles.textDes}>Checked 187</Text>
                </View>
            </TouchableOpacity>
          </View>
        </View>
      
      <View style={styles.sectionSetting}>
            <Text
            style={{ 
              fontSize: 24,
              fontFamily: 'Quicksand_700Bold',
              marginBottom: 24,
             }}>
              Support
            </Text>
            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 8
                }}
                source={supportIcon}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 180,
               }} >
                Access the Help Center
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 116,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 24}}></View>
            
            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 8
                }}
                source={suportCustomer}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 166,
               }} >
                Report user
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 130,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 24}}></View>

            <View style={styles.sectionBtn}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  marginEnd: 8
                }}
                source={editIcon}
                resizeMode='contain'
              />

              <Text style={{ 
                fontSize: 16,
                fontFamily: 'Quicksand_600SemiBold',
                marginLeft: 14,
                width: 166,
               }} >
                Give feedback to us
              </Text>

              <Image
                style={{ 
                  width: 14,
                  height: 14,
                  marginLeft: 130,
                }}   
                source={arrow}
                resizeMode='contain'
            />
            </View>

            <View style={{ backgroundColor: '#BFBCBD', width: '100%', height: 1, marginBottom: 32}}></View>
                
          </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default CreateScreen;