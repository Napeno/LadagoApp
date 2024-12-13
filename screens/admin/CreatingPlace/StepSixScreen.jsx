import { ScrollView, View, Image, Text, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView, Alert  } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../../../styles/CreatingPlace/stepsix';
import close from '../../../constants/close.png';
import camera from '../../../constants/camera.png'
import add from '../../../constants/add_round.png'
import { data } from '../../../constants/data';
import BottomTabCreate from '../../../components/bottomTabCreate'
import * as ImagePicker from 'expo-image-picker';
import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

const StepSixScreen = ({ route, navigation }) => {
    const { formDataRetrieve } = route.params;
  
    let [fontsLoaded] = useFonts({
      Quicksand_300Light,
      Quicksand_400Regular,
      Quicksand_500Medium,
      Quicksand_600SemiBold,
      Quicksand_700Bold,
    });
  
    const [formData, setFormData] = useState({
      imgHotel: [],
    });
  
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      if (formDataRetrieve) {
        setFormData((prev) => ({
          ...prev,
          ...formDataRetrieve,
          imgHotel: formDataRetrieve.imgHotel || [],
        }));
        setImages(formDataRetrieve.imgHotel || []);
      }
    }, [formDataRetrieve]);
  
    const handleAddPicture = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        const newImages = result.assets.map((asset) => asset.uri);
        setImages((prevImages) => {
          const updatedImages = [...prevImages, ...newImages];
          setFormData((prev) => ({
            ...prev,
            imgHotel: updatedImages,
          }));
          return updatedImages;
        });
      }
    };
  
    console.log('formData', formData)

    const handleTakePicture = async () => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
  
      if (!result.canceled) {
        const newImage = result.assets[0].uri;
        setImages((prevImages) => {
          const updatedImages = [...prevImages, newImage];
          setFormData((prev) => ({
            ...prev,
            imgHotel: updatedImages,
          }));
          return updatedImages;
        });
      }
    };
  
    const handleRemoveImage = (index) => {
      setImages((prevImages) => {
        const updatedImages = prevImages.filter((_, i) => i !== index);
        setFormData((prev) => ({
          ...prev,
          imgHotel: updatedImages,
        }));
        return updatedImages;
      });
    };
  
    if (!fontsLoaded) {
      return null;
    }
  
    const backNav = "STEPFIVE";
    const nextNav = "STEPSEVEN";
  
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.viewContainer}>
              <Image style={styles.closeIcon} source={close} resizeMode="cover" />
  
              <Text style={styles.titleStep}>Step 6</Text>
              <Text style={styles.titleInfo}>Add photos of place</Text>
              <Text style={styles.description}>
                You need to start with 4 pictures. After this, you can still add
                or change pictures of the place in edit.
              </Text>
  
              <View style={styles.container}>
                <Pressable style={styles.button} onPress={handleAddPicture}>
                  <Image
                    style={styles.addIcon}
                    source={add}
                    resizeMode="cover"
                  />
                  <Text style={styles.buttonText}>Add picture</Text>
                </Pressable>
  
                <Pressable style={styles.button} onPress={handleTakePicture}>
                  <Image
                    style={styles.cameraIcon}
                    source={camera}
                    resizeMode="cover"
                  />
                  <Text style={styles.buttonText}>Take new picture</Text>
                </Pressable>
  
                <View style={styles.imageGrid}>
                  {images.map((uri, index) => (
                    <View
                      key={`${uri}-${index}`}
                      style={[
                        index === 0
                          ? styles.largeImageWrapper
                          : styles.smallImageWrapper,
                        index % 2 === 1 && { marginRight: 14 },
                      ]}
                    >
                      <Image
                        source={{ uri }}
                        style={
                          index === 0 ? styles.largeImage : styles.smallImage
                        }
                      />
                      <Pressable
                        style={styles.removeButton}
                        onPress={() => handleRemoveImage(index)}
                      >
                        <Text style={styles.removeText}>×</Text>
                      </Pressable>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        <BottomTabCreate
          navigation={navigation}
          backNav={backNav}
          nextNav={nextNav}
          formData={formData} 
        />
      </SafeAreaView>
    );
  };
  
  export default StepSixScreen;
  
