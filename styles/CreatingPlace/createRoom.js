import { StyleSheet } from "react-native";

export default StyleSheet.create({
  textInput: {
    padding: 10,
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
  },

  titleName: {
    fontSize: 20,
    fontFamily: "Quicksand_600SemiBold",
    marginBottom: 10,
    color: "#365486",
  },

  dropdown: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderBottomColor: "gray",
    marginBottom: 16,
  },

  placeholderStyle: {
    fontSize: 16,
    marginLeft: 10,
  },

  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Quicksand_500Medium",
  },

  iconStyle: {
    width: 20,
    height: 20,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    fontFamily: "Quicksand_500Medium",
  },

  horiItem: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },

  textItems: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 15,
  },

  checkedItem: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    width: 160,
    alignItems: "center",
  },

  coveredRoom: {
    borderWidth: 1,
    borderColor: "#BFBCBD",
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 40,
    paddingVertical: 20,
  },
  roomTitle: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 20,
    marginBottom: 20,
  },
  deleteBtn: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 16,
    color: "#365486",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  
});
