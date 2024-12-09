import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: "white",
    height: "100%",
  },
  scrollView: {},
 
  viewContainer: {
    width: "100%",
    marginTop: 40,
    height: "100%",
    paddingHorizontal: 20,
    paddingBottom: 100
  },

  locationWrap: {},

  titleStep: {
    fontSize: 28,
    fontFamily: "Quicksand_700Bold",
  },

  reservationTitle: {
    fontSize: 20,
    fontFamily: "Quicksand_600SemiBold",
    marginBottom: 18,
  },

  layerWrap: {
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  avatar: {
    width: 42,
    height: 42,
  },

  searchLocation: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 44,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
  },

  searchIcon: {
    width: 16,
    height: 16,
    marginStart: 15,
  },

  ic_filter: {
    width: 20,
    height: 20,
    marginEnd: 15,
  },

  categories: {
    marginBottom: 16,
  },

  cardHoriWrap: {
    marginBottom: 16,
  },

  textHoriWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  bottomTab: {
    alignSelf: "center",
  },

  assistMain:{
    // gap: '6%',
  },

  assistWrap:{
    borderWidth: 1,
    borderColor: '#BFBCBD',
    backgroundColor: 'white',
    padding: 15,
    width: '100%',
    marginBottom: '6%',
    gap: '4%',
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  assistImg: {
    width: 40,
    height: 40,
  },

  resourceImg: {
    width: 60,
    height: 80,
  },

  assistHeader:{
    fontSize: 18,
    fontFamily: "Quicksand_600SemiBold",
    marginBottom: 4,
  },
  
  resourceHeader:{
    fontSize: 18,
    width: '80%',
    fontFamily: "Quicksand_600SemiBold",
    marginBottom: 4,
  },
  
  assistContent:{
    fontSize: 14,
    width: '55%',
    fontFamily: "Quicksand_500Medium",
    lineHeight: 21
  },
  
});
