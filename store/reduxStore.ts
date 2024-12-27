import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingState } from "@/types/type";

const initialState: BookingState = {
  adult: 0,
  children: 0,
  date: new Date(),
  room: 0,
  bringPet: false,
  email: null,
  cardNumber: null,
  expiration: null,
  country: null,
  cvc: null,
  docId: null,
  paymentOption: "PAYNOW",
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
    updateChange(
      state,
      action: PayloadAction<{
        name: string;
        value: Date | null | string | number;
      }>,
    ) {
      const { name, value } = action.payload;
      if (state.hasOwnProperty(name)) {
        (state as any)[name] = value;
      }
      console.log(JSON.stringify(state, null, 2));
    },
    reset(state) {
      Object.keys(state).forEach((key) => {
        if (key === "bringPet") {
          if (state.hasOwnProperty(key)) {
            (state as any)[key] = false;
          }
        } else if (typeof state[key as keyof BookingState] === "number") {
          if (state.hasOwnProperty(key)) {
            (state as any)[key] = 0;
          }
        } else if (key === "date") {
          state.date = new Date();
        } else if (key === "paymentOption") {
          state.paymentOption == "PAYNOW";
        } else {
          if (state.hasOwnProperty(key)) {
            (state as any)[key] = null;
          }
        }
      });
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
  updateChange,
  reset,
} = bookingSlice.actions;

const store = configureStore({
  reducer: {
    booking: bookingSlice.reducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
