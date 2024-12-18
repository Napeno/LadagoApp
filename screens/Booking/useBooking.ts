import { useEffect, useState } from "react";

export const useBooking = () => {
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );
  const [adult, setAdult] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [random, setRandom] = useState<number>(Math.random());
  const handleSelectedDate = (date: string) => {
    setDate(date);
  };
  return {
    date,
    adult,
    children,
    handleSelectedDate,
    random,
  };
};
