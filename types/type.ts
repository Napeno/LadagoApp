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
