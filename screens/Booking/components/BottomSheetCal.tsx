import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { useBooking } from "../useBooking";

type Props = {
  handleSheetChange: (index: number) => void;
};

const BottomSheetCal = ({ handleSheetChange }: Props) => {
  const {date,handleSelectedDate,random}=useBooking()
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedDate, setSelectedDate] = useState<string | undefined>(date);

  const handleDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
  };
  useEffect(() => {
    handleSelectedDate(selectedDate? selectedDate:"")
  },[selectedDate])

  useEffect(() => {
    console.log("random in BottomSheetCal: ",random)
  },[])
  return (
    <BottomSheet
      onChange={handleSheetChange}
      enablePanDownToClose
      snapPoints={["90%"]}
      ref={bottomSheetRef}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Calendar
          onDayPress={handleDayPress}
          style={{ width: 400 }}
          theme={{
            color: "#808080",
            textDayFontWeight: "500",
            dayTextColor: "#808080", 
            arrowColor: "#365486",
            todayTextColor: "#365486",
            fontfamily:""
          }}
          
        markedDates={{
          [selectedDate || ""]: {
            selected: true,
            selectedColor: "#365486",
            selectedTextColor: "#fff", 
            
            customStyles: {
              container: {
                backgroundColor: "#365486", 
                borderRadius: 30,
                padding: 10, 
              },
              text: {
                color: "#fff", // Text color for selected date
                fontWeight: "bold",
              },
            },
          },
        }}
      />
      </BottomSheetView>
    </BottomSheet>
  );
};

export default BottomSheetCal;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  root: {
    position: "absolute",

    flex: 1,
    alignItems: "center",
    width: "100%",
    zIndex: 1000000,
    elevation: 1000000,
  },
});
