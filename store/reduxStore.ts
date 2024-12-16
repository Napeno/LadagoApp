import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
  adult: number;
  children: number;
  date: Date;
  room: number;
  bringPet: boolean;
}

const initialState: BookingState = {
  adult: 0,
  children: 0,
  date: new Date(),
  room: 0,
  bringPet: true,
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
    setDate(state, action) {
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
