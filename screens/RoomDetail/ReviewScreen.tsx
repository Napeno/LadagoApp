import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  DimensionValue,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { reviewData } from "@/constants/data";
import { RatingRowProps, ReviewProps } from "@/types/type";
import { RateBar } from "./components/RateBar";
import { ratingData } from "@/constants/data";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/firebase";
const RatingRow: React.FC<RatingRowProps> = ({ rating, width }) => {
  return (
    <View style={styles.ratingRow}>
      <Text style={styles.ratingText}>{rating}</Text>
      <AntDesign name="star" size={20} color="#fec008" />
      <View style={styles.rateBarContainer}>
        <RateBar width={width} />
      </View>
    </View>
  );
};

const Review: React.FC<ReviewProps> = ({
  name,
  location,
  dateOfStay,
  reviewText,
  rating,
  avatarUrl,
}) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewHeader}>
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: avatarUrl,
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>{name}</Text>
            <Text style={styles.profileLocation}>{location}</Text>
          </View>
        </View>
        <View style={styles.starsContainer}>
          {[...Array(4)].map((_, index) => (
            <AntDesign key={index} name="star" size={14} color="#fec008" />
          ))}
          <AntDesign name="star" size={14} color="#9F9F9F" />
        </View>
      </View>

      <Text style={styles.dateOfStay}>Date of stay: {dateOfStay}</Text>
      <Text style={styles.reviewText}>{reviewText}</Text>
      <View style={styles.divider} />
    </View>
  );
};

type ReviewScreenParams = {
  ReviewScreen: {
    hotelDocId: string;
  };
};

const ReviewScreen: React.FC = () => {
  const [data, setData] = useState<any[] | null>(null);

  const nav = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const route = useRoute<RouteProp<ReviewScreenParams, "ReviewScreen">>();
  const hotelDocId = route.params.hotelDocId;
  useEffect(() => {
    const getReviewData = async () => {
      if (!hotelDocId) return;
      try {
        let arry: any[] = [];
        const reviewCollectionRef = collection(firestore, "review");
        const reviewDocSnapShot = await getDocs(reviewCollectionRef);

        reviewDocSnapShot.docs.forEach((doc) => {
          if (doc.data().hotelDocId === hotelDocId) {
            arry.push({
              id: doc.id,
              ...doc.data(),
              dateOfStay:
                doc
                  .data()
                  .dateOfStay?.toDate()
                  .toLocaleString("en-US", { timeZone: "Asia/Bangkok" }) ||
                null,
            });
          }
        });
        setData(arry);
      } catch {
      } finally {
        setLoading(false);
      }
    };
    getReviewData();
  }, [hotelDocId]);
  if (loading) return <ActivityIndicator />;
  return (
    <ScrollView
      contentContainerStyle={styles.root}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.fullWidth}>
        <Text style={styles.headerText}>Rating</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingList}>
            {ratingData.map((item) => (
              <RatingRow
                key={item.rating}
                rating={item.rating}
                //@ts-ignore
                width={item.width}
              />
            ))}
          </View>
          <View style={styles.ratingSummary}>
            <Text style={styles.totalRating}>4.8</Text>
            <View style={styles.starsContainer}>
              {[...Array(4)].map((_, index) => (
                <AntDesign key={index} name="star" size={18} color="#fec008" />
              ))}
              <AntDesign name="star" size={18} color="#9F9F9F" />
            </View>
            <Text style={styles.reviewsCount}>5 reviews</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          //@ts-ignore
          nav.navigate("Write Review", { hotelDocId: hotelDocId });
        }}
        style={styles.writeReviewButton}
      >
        <Text style={styles.writeReviewText}>Write Review</Text>
      </TouchableOpacity>

      <View style={styles.reviewsSection}>
        <Text style={styles.headerText}>Reviews</Text>
        {data ? (
          data.map((item: any, index: number) => {
            return (
              <Review
                key={index}
                name={item.name}
                location={item.location}
                dateOfStay={item.dateOfStay}
                reviewText={item.reviewText}
                rating={item.rating}
                avatarUrl={item.avatarUrl}
              />
            );
          })
        ) : (
          <Text>No comments yet</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    gap: 15,
    flexGrow: 1,
  },
  fullWidth: {
    width: "100%",
    gap: 15,
  },
  headerText: {
    fontSize: 19,
    color: "#616161",
    fontWeight: "500",
  },
  ratingContainer: {
    width: "100%",
    backgroundColor: "#E9F5FE",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingList: {
    width: "70%",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 4,
  },
  ratingText: {
    fontWeight: "bold",
  },
  rateBarContainer: {
    width: "80%",
  },
  rateBar: {
    backgroundColor: "#339933",
    height: 10,
    borderRadius: 10,
  },
  ratingSummary: {
    gap: 5,
    alignItems: "flex-end",
  },
  totalRating: {
    fontSize: 30,
    fontWeight: "bold",
  },
  starsContainer: {
    flexDirection: "row",
    gap: 5,
  },
  reviewsCount: {
    fontSize: 14,
    color: "#9F9F9F",
    fontWeight: "500",
  },
  writeReviewButton: {
    height: 52.68,
    backgroundColor: "#365486",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  writeReviewText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
  reviewsSection: {
    width: "100%",
    gap: 10,
  },
  reviewContainer: {
    height: 142,
    display: "flex",
    justifyContent: "space-around",
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 50,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  profileTextContainer: {
    justifyContent: "space-around",
    height: "100%",
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  profileLocation: {
    fontSize: 12,
    color: "#616161",
  },
  dateOfStay: {
    color: "#616161",
    fontSize: 14,
  },
  reviewText: {
    fontSize: 16,
  },
  divider: {
    width: "100%",
    height: 0.5,
    backgroundColor: "black",
  },
});
