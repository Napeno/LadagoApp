    import {
        ScrollView,
        View,
        Image,
        Text,
        TextInput,
        TouchableOpacity,
    } from "react-native";
    import { SafeAreaView } from "react-native";
    import React, { useEffect, useState } from "react";
    import styles from "../../styles/admin/homepage";
    import Categories from "../../components/categories";
    import CategoryLocation from "../../components/categoryLocation";
    import suportCustomer from "../../constants/customerSupportIcon.png";
    import avatar from "../../constants/avatar2.png";
    import phone1 from "../../constants/phone1.png";
    import phone2 from "../../constants/phone2.png";
    import {
        useFonts,
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
    } from "@expo-google-fonts/quicksand";
    import { data } from "@/constants/data";
  
  const Homepage = () => {
    const [activeCategory, setActiveCategory] = useState(null);
  
    let [fontsLoaded] = useFonts({
      Quicksand_300Light,
      Quicksand_400Regular,
      Quicksand_500Medium,
      Quicksand_600SemiBold,
      Quicksand_700Bold,
    });
  
    const handleChangeCategory = (cat) => {
      setActiveCategory(cat);
    };
  
    if (!fontsLoaded) {
      return null;
    }
  
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.viewContainer}>
            <View style={styles.layerWrap}>
              <View style={styles.locationWrap}>
                <Text style={styles.titleStep}>Welcome back!</Text>
              </View>
            </View>

            <Text style={[styles.reservationTitle, {marginBottom: 0}]}>Your reservation</Text>
  
            <View style={styles.categories}>
              <Categories
                activeCategory={activeCategory}
                handleChangeCategory={handleChangeCategory}
                datainput={data.reservation}
              />
            </View>
  
            <View style={styles.cardHoriWrap}>
              <CategoryLocation />
            </View>
  
            <View style={styles.cardHoriWrap}>
              <View style={styles.textHoriWrap}>
                <Text
                  style={{ fontFamily: "Quicksand_600SemiBold", fontSize: 16, textDecorationLine: 'underline', marginBottom: 24 }}
                >
                  See all rented houses
                </Text>
              </View>

            </View>

            <Text style={styles.reservationTitle}>We are always ready to assist you</Text>

            <View style={styles.assistMain}>
              <View style={styles.assistWrap}>
                <Image
                  style={styles.assistImg}
                  source={avatar}
                  resizeMode="cover"
                />
                <View>
                  <Text style={styles.assistHeader}>
                    Talk to your assistant
                  </Text>
                  <Text style={styles.assistContent}>
                    You need help? Please contact to your assistant to know more information and tips.
                  </Text>
                </View>
              </View>     
              <View style={styles.assistWrap}>
                <Image
                  style={styles.assistImg}
                  source={suportCustomer}
                  resizeMode="cover"
                />
                <View>
                  <Text style={styles.assistHeader}>
                    Contact to the special assistant
                  </Text>
                  <Text style={[styles.assistContent]}>
                    As a new owner, you can contact to the group of assistants who have been trained.
                  </Text>
                </View>
              </View>   
            </View>

            <Text style={styles.reservationTitle}>Resources and Tips</Text>
            
            <View style={styles.assistMain}>
              <View style={[styles.assistWrap, {paddingBottom: 0, alignItems: 'center'}]}>
                <Image
                  style={styles.resourceImg}
                  source={phone1}
                  resizeMode="cover"
                />
                <Text style={styles.resourceHeader}>
                  Tab messages is a new message for your box
                </Text>
              </View>     
              <View style={[styles.assistWrap, {paddingBottom: 0, alignItems: 'center'}]}>
                <Image
                  style={styles.resourceImg}
                  source={phone2}
                  resizeMode="cover"
                />
                <Text style={styles.resourceHeader}>
                  Dashboard collects all revenue which has interaction boards
                </Text>
              </View> 
              <View style={[styles.assistWrap, {paddingBottom: 0, alignItems: 'center'}]}>
                <Image
                  style={styles.resourceImg}
                  source={phone1}
                  resizeMode="cover"
                />
                <Text style={styles.resourceHeader}>
                Profile upgraded for you to understand your customer more
                </Text>
              </View>     
            </View>

         
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Homepage;
  