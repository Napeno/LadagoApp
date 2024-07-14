const categories = [
    "Hotel",
    "Homestay",
    "Apart",
    "Renthouse",
    "Resort",
    "Villa",
];

const dataLocation = [
    {
        id: 1,
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/LocationPlace%2Fimg1.png?alt=media&token=5e968fb3-c07d-4039-ac6a-1a689b7bf715',
        name: 'The Aston Vill Hotel',
        address: '154 Bach Dang, Ben Nghe, District 1',
        price: '1,000,000 VND/night',
        stars: '4.8',
        favorite: true
    },

    {
        id: 2,
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/ladago-5cee2.appspot.com/o/LocationPlace%2F22.png?alt=media&token=eb4c80c2-a306-4e5c-9d94-f1a39f629d33',
        name: 'Montcal Grand',
        address: '287a Pham Ngu Lao, District 1',
        price: '800,000 VND /night',
        stars: '4.5',
        favorite: false
    },
]

export const data = {
    categories,
    dataLocation
}

