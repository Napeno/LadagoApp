import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
  adult: number;
  children: number;
  date: Date;
  room: number;
  bringPet: boolean;
  hotelName: string | null;
  payment: {
    email: string | null;
    cardNumber: string | null;
    expiration: string | null;
    country: string | null;
    cvc: string | null;
  };
}

const initialState: BookingState = {
  adult: 0,
  children: 0,
  date: new Date(),
  room: 0,
  bringPet: true,
  payment: {
    email: null,
    cardNumber: null,
    expiration: null,
    country: null,
    cvc: null,
  },
  hotelName:null
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    increaseAdult(state) {
      state.adult += 1;
    },
    decreaseAdult(state) {
      if (state.adult > 0) state.adult -= 1;
    },
    increaseChildren(state) {
      state.children += 1;
    },
    decreaseChildren(state) {
      if (state.children > 0) state.children -= 1;
    },
    setDate(state, action: PayloadAction<Date>) {
      state.date = action.payload;
    },
    increaseRoom(state) {
      state.room += 1;
    },
    decreaseRoom(state) {
      if (state.room > 0) state.room -= 1;
    },
    setBringPet(state) {
      state.bringPet = !state.bringPet;
    },
  },
});

export const {
  increaseAdult,
  decreaseAdult,
  increaseChildren,
  decreaseChildren,
  setDate,
  increaseRoom,
  decreaseRoom,
  setBringPet,
} = bookingSlice.actions;

const store = configureStore({
  reducer: {
    booking: bookingSlice.reducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
