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
    padding: 16,
    backgroundColor: "#F9F9F9",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    height: 120,
    padding: 16,
    marginBottom: 8,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  percentage: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  checkbox: {
    marginLeft: 10,
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
  },
  footerLink: {
    fontSize: 14,
    color: "#007BFF",
    textAlign: "center",
    marginTop: 5,
  },
});
