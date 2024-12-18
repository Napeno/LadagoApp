import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { data } from "../constants/data";
import styles from "../styles/categoryLocation";
import iconStar from "../constants/star_icon.png";
import favorite from "../constants/favorite.png";
import unfavorite from "../constants/unfavorite.png";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firestore } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const CategoryLocation = ({location}) => {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "hotel"));
      const hotelData = [];
      querySnapshot.forEach((doc) => {
        hotelData.push(doc.data());
      });
      setHotels(hotelData);
    };

    getData();
  }, []);

  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };
  
  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Bán kính Trái Đất (km)
    const dLat = toRadians(lat2 - lat1); 
    const dLon = toRadians(lon2 - lon1); 
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    const distance = R * c; 
    return distance;
  };

  const filteredHotels = hotels
    .map((item) => {
      const lat1 = location?.coords?.latitude;
      const lon1 = location?.coords?.longitude;
      const [lat2, lon2] = item.geoCode.split(",").map(Number);
      const km = haversineDistance(lat1, lon1, lat2, lon2);

    return { ...item, distance: km }; // Thêm thuộc tính distance vào mỗi item
  })
  .filter((item) => item.distance < 20) // Lọc các khách sạn trong phạm vi 20km
  .sort((a, b) => a.distance - b.distance); // Sắp xếp khoảng cách từ thấp đến cao


  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatListContainer}
      showsHorizontalScrollIndicator={false}
      data={filteredHotels}
      keyExtractor={(item) => item.idHotel?.toString() || Math.random().toString()}
      renderItem={({ item }) => 
      {
        return (
          <CategoryLocationItem
            id={item.id}
            isFavorite={item.favorite}
            title={item.name}
            imgUrl={item.imgHotel[0]}
            address={item.address}
            price={item.price}
            distance={item.distance}
            stars={item.stars}
          />
        )
      }
    }
    />
  );
};

const CategoryLocationItem = ({
  id,
  isFavorite,
  title,
  imgUrl,
  address,
  price,
  stars,
  distance
}) => {
  const nav = useNavigation();
  return (
    <View style={[styles.cardWrap]}>
      <TouchableOpacity
        //onPress={() => handleChangeCategory(isActive? null: title)}
        onPress={() => {
          nav.navigate("Room Detail");
        }}
        style={[styles.cardWrap]}
      >
        <Image
          source={{ uri: imgUrl }}
          style={{
            width: 257,
            height: 182,
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
          }}
          resizeMode="cover"
        />

        <View style={styles.favoriteWraper}>
          <Image
            source={isFavorite ? favorite : unfavorite}
            style={{
              width: 19,
              height: 16,
              alignSelf: "center",
              marginVertical: "auto",
            }}
            resizeMode="cover"
          />
        </View>

        <View style={styles.cardInfo}>
          <View style={styles.textLine}>
            <View style={styles.titleStar}>
              <Text numberOfLines={1} style={styles.title}>{title}</Text>

              <View style={{ flexDirection: "row", marginRight: 12 }}>
                <Image
                  source={iconStar}
                  style={{
                    width: 17,
                    height: 17,
                    marginRight: 10,
                  }}
                  resizeMode="contain"
                />

                <Text style={styles.stars}>{stars}</Text>
              </View>
            </View>

            <Text style={styles.address} numberOfLines={1}>
              {address}
            </Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: "center", marginTop: 12, paddingHorizontal: 12}}>
            <Text style={styles.price}>{price}$ /night</Text>
            <Text style={styles.distance} numberOfLines={1}>Cách {distance.toFixed(1)} km</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryLocation;
