import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

type Props = {
  handleSheetChange: (index: number) => void;
};

const BottomSheetCal = ({ handleSheetChange }: Props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet
      onChange={handleSheetChange}
      enablePanDownToClose
      snapPoints={["90%"]}
      ref={bottomSheetRef}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Calendar
          style={{
            width: 350,
          }}
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            textDayFontWeight: "bold",
            arrowColor: "green",
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
