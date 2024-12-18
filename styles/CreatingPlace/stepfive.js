import { StyleSheet } from "react-native";

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
    paddingBottom: 200,
  },

  closeIcon: {
    width: 28,
    height: 28,
    marginBottom: 16,
  },

  titleStep: {
    fontSize: 16,
    fontFamily: "Quicksand_500Medium",
    marginBottom: 4,
  },

  titleInfo: {
    fontSize: 28,
    fontFamily: "Quicksand_700Bold",
  },

  titleName: {
    fontSize: 20,
    fontFamily: "Quicksand_600SemiBold",
    marginBottom: 10,
    color: "#365486",
  },

  horiItem: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },

  textItems: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 20,
  },

  checkedItem: {
    padding: 25,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    width: 180,
    alignItems: "center",
  },

  description: {
    fontSize: 14,
    fontFamily: "Quicksand_400Regular",
    lineHeight: 24,
  },

  container: {
    marginTop: 24,
    borderColor: "#365486",
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
  },

  roomTitle:{
    fontSize: 14,
    fontFamily: "Quicksand_600SemiBold",
    marginBottom: 18
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 26,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 18,
  },
  label: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  count: {
    marginHorizontal: 16,
    fontSize: 16,
  },
});
