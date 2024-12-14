import { StyleSheet } from "react-native";
import { red } from "react-native-redash";

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: "white",
    height: "100%",
  },
  scrollView: {},
  viewContainer: {
    width: "100%",
    marginTop: 20,
    height: "100%",
    paddingHorizontal: 20,
  },

  closeIcon: {
    width: 28,
    height: 28,
    marginBottom: 16,
  },

  house: {
    width: 380,
    height: 380,
  },

  titleStep: {
    fontSize: 16,
    fontFamily: "Quicksand_500Medium",
    marginBottom: 4,
  },

  titleInfo: {
    fontSize: 28,
    fontFamily: "Quicksand_700Bold",
    marginBottom: 18,
  },

  description: {
    fontSize: 14,
    fontFamily: "Quicksand_400Regular",
    lineHeight: 24,
  },

  bottomBar: {
    height: 140,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },

  listBar: {
    marginTop: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },

  Bar: {
    width: 55,
    height: 5,
    backgroundColor: "#A8A8A8",
    borderRadius: 100,
  },

  navigateButtons: {
    marginTop: 34,
    marginHorizontal: 20,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },

  backBar: {
    width: 127,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#365486",
  },

  nextBar: {
    width: 127,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#365486",
  },

  textNav: {
    fontSize: 20,
    fontFamily: "Quicksand_600SemiBold",
  },
});
