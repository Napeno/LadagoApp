import { StyleSheet } from "react-native";

export default StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "white",
        display: "flex",
        height: "100%",
        //alignItems: "flex-start",
        borderColor: "red",
        //gap: 10,
      },
      container:{
        // marginHorizontal: 20,
        // backgroundColor: 'red'
      },
      image: {
        width: "100%",
        height: 300,
      },
      iconContainer: {
        padding: 5,
        borderRadius: 100,
        backgroundColor: "white",
      },
      iconListContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
        position: "absolute",
        top: 10,
        zIndex: 10,
      },
      locationName: {
        fontSize: 23,
        fontWeight: "600",
      },
      info: {
        fontWeight: "400",
        fontSize: 16,
      },
      infoContainer: {
        width: '90%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      },
      infoLocationNameContainer: {
        paddingHorizontal: 20,
        gap: 10,
        marginBottom: 18,
      },
      introductionContainer: {
        paddingHorizontal: 20,
        gap: 10,
        marginBottom: 18,
      },
      meeTheOwnerContainer: {
        paddingHorizontal: 20,
        width: "100%",
        gap: 20,
      },
      meetTheOwnerTitle: {
        fontWeight: "600",
        fontSize: 23,
      },
      divider: {
        width: "100%",
        height: 0.5,
        backgroundColor: "black",
        marginBottom: 18,
      },
      showMore: {
        textDecorationLine: "underline",
        fontFamily: "Quicksand_500Medium",
      },
      introductionTitle: {
        fontWeight: "600",
        fontSize: 23,
      },
      showMoreContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
      bookBtn: {
        backgroundColor: "#365486",
        width: 160,
        height: 50,
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight: 10,
        justifyContent: "center",
      },
      priceBookContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 5,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
        marginLeft: 5,
      },
      bookNow: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "Quicksand_500Medium",
      },
      price: {
        fontWeight: "600",
        fontSize: 20,
      },
    
    
    
      ownerContainer: {
        paddingHorizontal: 10,
        marginTop: 10,
      },
      ownerCard: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 25,
        flexDirection: "row", // Changed to row
        alignItems: "center",
        backgroundColor: "#f8f9fa", // Changed background color
        justifyContent: "space-around", // Added to space elements
      },
      ownerAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#343a40", // Changed background color
        justifyContent: "center",
        alignItems: "center",
      },
      ownerInitial: {
        fontSize: 22,
        fontWeight: "600",
        color: "white", // Changed text color
      },
      ownerInfo: {
        //marginTop: 10,
        alignItems: "center", // Align text to the left
        marginLeft: 5, // Added margin to separate from avatar
        flexDirection:"column",
      },
      ownerName: {
        fontSize: 20, // Changed font size
        fontWeight: "bold",
      },
      ownerRole: {
        color: "#555",
      },
      ownerStats: {
        //marginTop: 10,
        alignItems: "flex-start", // Align text to the right
      },
      statItem: {
        fontSize: 14,
        color: "#11111",
        textAlign: "left", // Added to align text inside each item
        fontWeight:"400",
        marginLeft: 30,
      },
    
      //style place offer
      placeOffersContainer: {
        paddingHorizontal: 10,
        marginVertical: 10,
      },
      offersTitle: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10,
      },
      offerList: {
        flexDirection: "column",
        gap: 10, 
      },
      offerItem: {
        fontSize: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        padding: 5,
      },
      offerText: {
        fontSize: 16,
      },
      showAll: {
        color: "black", 
        textDecorationLine: "none", // Bỏ gạch chân
        fontWeight: '600',
        textAlign: 'center'
      },
      showAllButton: {
        marginTop: 10,
        borderWidth: 1, // Thêm đường viền
        borderColor: "#748CAB", // Màu đường viền
        borderRadius: 5, // Bo góc
        paddingVertical: 10, // Thêm padding dọc
        paddingHorizontal: 80, // Thêm padding ngang
        alignSelf: 'center',
      },
});
