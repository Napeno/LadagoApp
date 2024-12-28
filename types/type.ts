import { DimensionValue } from "react-native";
export type Hotel = {
  access: {
    banking: boolean;
    carPack: boolean;
    check24H: boolean;
    checkPrivate: boolean;
    frontDesk: boolean;
    keyAccess: boolean;
    payDirectly: boolean;
  };
  address: string;
  checkInTime: string;
  checkOutTime: string;
  description: string;
  geoCode: string;
  imgHotel: string[];
  name: string;
  price: number;
  rating: string;
};

export interface BookingState {
  adult: number;
  children: number;
  date: Date;
  room: number;
  bringPet: boolean;
  docId: string | null;
  email: string | null;
  cardNumber: string | null;
  expiration: string | null;
  country: string | null;
  cvc: string | null;
  paymentOption: "PAYNOW" | "PAYLATER";
}

export interface RateBarProps {
  width: DimensionValue;
}

export interface RatingRowProps {
  rating: number;
  width: DimensionValue;
}

export interface ReviewProps {
  name: string;
  location: string;
  dateOfStay: string;
  reviewText: string;
  rating: number;
  avatarUrl: string;
}

export interface Rating {
  rating: number;
  width: DimensionValue;
}
