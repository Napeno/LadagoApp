import { RateBarProps } from "@/types/type";
import { StyleSheet, View } from "react-native";
export const RateBar: React.FC<RateBarProps> = ({ width }) => {
  return (
    <View
      style={[
        styles.rateBar,
        {
          width: width || "100%",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  rateBar: {
    backgroundColor: "#339933",
    height: 10,
    borderRadius: 10,
  },
});
