import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  DimensionValue,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface RateBarProps {
  width: DimensionValue;
}

interface RatingRowProps {
  rating: number;
  width: DimensionValue;
}

interface ReviewProps {
  name: string;
  location: string;
  dateOfStay: string;
  reviewText: string;
  rating: number;
}

interface Rating {
  rating: number;
  width: DimensionValue;
}

const RateBar: React.FC<RateBarProps> = ({ width }) => {
  return (
    <View
      style={[
        styles.rateBar,
        {
          width: width || "100%", // Default width to 100% if not provided
        },
      ]}
    />
  );
};

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
}) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewHeader}>
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg",
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

const ReviewScreen: React.FC = () => {
  const ratings: Rating[] = [
    { rating: 5, width: "80%" },
    { rating: 4, width: "70%" },
    { rating: 3, width: "50%" },
    { rating: 2, width: "30%" },
    { rating: 1, width: "10%" },
  ];
  const nav = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={styles.root}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.fullWidth}>
        <Text style={styles.headerText}>Rating</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingList}>
            {ratings.map((item) => (
              <RatingRow
                key={item.rating}
                rating={item.rating}
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
          nav.navigate("Write Review" as never);
        }}
        style={styles.writeReviewButton}
      >
        <Text style={styles.writeReviewText}>Write Review</Text>
      </TouchableOpacity>

      <View style={styles.reviewsSection}>
        <Text style={styles.headerText}>Reviews</Text>
        <Review
          name="Baldwin IV"
          location="Jerusalem, Israel"
          dateOfStay="2024-02-03"
          reviewText="If you are looking for a quiet place, this is the place for you to."
          rating={4.8}
        />
        <Review
          name="Baldwin IV"
          location="Jerusalem, Israel"
          dateOfStay="2024-02-03"
          reviewText="If you are looking for a quiet place, this is the place for you to."
          rating={4.8}
        />
        <Review
          name="Baldwin IV"
          location="Jerusalem, Israel"
          dateOfStay="2024-02-03"
          reviewText="If you are looking for a quiet place, this is the place for you to."
          rating={4.8}
        />
        <Review
          name="Baldwin IV"
          location="Jerusalem, Israel"
          dateOfStay="2024-02-03"
          reviewText="If you are looking for a quiet place, this is the place for you to."
          rating={4.8}
        />
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
