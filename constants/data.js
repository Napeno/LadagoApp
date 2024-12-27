import { useEffect, useState } from "react";

const categories = [
  "Hotel",
  "Homestay",
  "Apart",
  "Renthouse",
  "Resort",
  "Villa",
];

const reservation = [
  "About to check out",
  "Currently being used",
  "About to arrive",
];

const amenities = [
  "bathTub", 
  "cleaningService", 
  "pet",
  "wifi",
  "parking",
  "securityCamera",
  "airConditioning",
  "restaurant",
  "gym",
  "hotelBar",
  "spa",
  "pool",
  "kitchen",
  "roomService",
  "securityGuard",
  "freeWifi",
  "swimmingPool",
  "basicKitchen",
  "parkingLot",
  "publicWifi"
];

const typeRoom = [
  { label: "Phòng Tiêu Chuẩn (Standard Room)", value: "1" },
  { label: "Phòng Cao Cấp (Superior Room)", value: "2" },
  { label: "Phòng Sang Trọng (Deluxe Room)", value: "3" },
  { label: "Phòng Gia Đình (Family Room)", value: "4" },
  { label: "Phòng Suite (Suite Room)", value: "5" },
  { label: "Phòng Hạng Tổng Thống (Presidential Suite)", value: "6" },
  { label: "Phòng Giường Đôi (Double Room)", value: "7" },
  { label: "Phòng Giường Đơn (Single Room)", value: "8" },
  { label: "Phòng Ba Người (Triple Room)", value: "9" },
  { label: "Phòng Studio (Studio Room)", value: "10" },
  { label: "Phòng Tập Thể (Dormitory Room)", value: "11" },
  { label: "Phòng Căn Hộ (Apartment Room)", value: "12" },
  { label: "Phòng Hướng Biển (Ocean View Room)", value: "13" },
  { label: "Phòng Hướng Núi (Mountain View Room)", value: "14" },
  { label: "Phòng Biệt Thự (Villa)", value: "15" },
  { label: "Phòng Giường Tầng (Bunk Bed Room)", value: "16" },
];


const itemRoom = [
  { label: "Bedroom", key: "bedroom" },
  { label: "Bed", key: "bed" },
  { label: "Bathroom", key: "bathroom" },
];

const dataLocation = [
  {
    id: 1,
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/LocationPlace%2Fimg1.png?alt=media&token=5e968fb3-c07d-4039-ac6a-1a689b7bf715",
    name: "The Aston Vill Hotel",
    address: "154 Bach Dang, Ben Nghe, District 1",
    price: "1,000,000 VND",
    stars: "4.8",
    favorite: true,
  },

  {
    id: 2,
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/LocationPlace%2F22.png?alt=media&token=eb4c80c2-a306-4e5c-9d94-f1a39f629d33",
    name: "Montcal Grand",
    address: "287a Pham Ngu Lao, District 1",
    price: "800,000 VND",
    stars: "4.5",
    favorite: false,
  },
];

const message = [
  {
    id: 1,
    avatarUrl:
      "https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/Message%2FEllipse%20144.png?alt=media&token=0f9fbda9-80f8-4131-8dc3-d32658858875",
    name: "Hanh",
    lastMsg: "May I ask some more information about your apartment?",
    time: "4:45 PM",
    seen: false,
  },

  {
    id: 2,
    avatarUrl:
      "https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/Message%2FEllipse%20144%20(1).png?alt=media&token=2ce2fa5b-1088-4be9-aea2-1acff900c2aa",
    name: "Brian",
    lastMsg: "Thank you so much. Next time, I will visit your place",
    time: "2:00 PM",
    seen: true,
  },

  {
    id: 3,
    avatarUrl:
      "https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/Message%2FEllipse%20144%20(2).png?alt=media&token=b0c5e6dc-f824-4ee8-b15a-ca26b9622e10",
    name: "Peter",
    lastMsg: "Okay! I’ll be there soon.",
    time: "4:45 PM",
    seen: true,
  },
];

export const data = {
  categories,
  reservation,
  dataLocation,
  message,
  typeRoom,
  itemRoom,
  amenities
};


export const roomDetail ={
  address: "28 Đường Thi Sách, The Sóng, Thắng Tam, Vũng Tàu, Việt Nam",
  checkInTime: "14:00 - 15:00",
  checkOutTime: "11:30",
  description: "Hãy để chuyến đi của quý khách có một khởi đầu tuyệt vời khi ở lại khách sạn này, nơi có Wi-Fi miễn phí trong tất cả các phòng. Nằm ở vị trí trung tâm tại Thắng Tam của Vũng Tàu, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Hãy nhớ dành một chút thời gian để thăm thú Hải đăng Vũng Tàu cũng như Bãi trước gần đó. Được xếp hạng 5 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng phòng tập và nhà hàng ngay trong khuôn viên.",
  geoCode: "",
  imgHotel: ["https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/LocationPlace%2F3218212bec21ef67f076d3940f32c5ab.webp?alt=media&token=5287a550-6787-47ed-9d42-3c1fbf96ff6a"],
  name: "The Sóng Apartm",
  price: 1,
  rating: "",
  access: {
    banking: true,
    carPack: true,
    check24H: true,
    checkPrivate: false,
    frontDesk: false,
    keyAccess: true,
    payDirectly:false,
  }
}