import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaView: {
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  scrollView: {},
  viewContainer: {
    width: "100%",
    marginTop: 20,
    height: "100%",
  },
  titleCalendar: {
    marginBottom: 16,
    marginStart: 20,
    fontSize: 34,
    marginTop: 16,
    fontFamily: "Quicksand_700Bold",
  },

  dayContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  dateCalendar: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
  userAvatar: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },
});
