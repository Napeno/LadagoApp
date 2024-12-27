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
