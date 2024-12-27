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

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: "100%",
    borderRadius: 10,
    height: 200,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  cardContentTent: {
    width: '75%'
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  address: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  price: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "500",
    marginRight: 4,
    color: "#000",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 14,
  },
  step: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  stepIcon: {
    width: 28,
    height: 28,
    marginRight: 16,
    marginTop: 4,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 12,
    color: "#666",
    lineHeight: 15,
  },
});
