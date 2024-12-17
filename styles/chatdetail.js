import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      messageWrapper: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginVertical: 25,
        paddingHorizontal: 10,
        gap: 5
      },
      messageWrapperRight: {
        alignSelf: "flex-end",
        flexDirection: "row-reverse",
        marginLeft: 50,
      },
      messageWrapperLeft: {
        alignSelf: "flex-start",
        marginRight: 50, 
      },
      messageContainer: {
        padding: 10,
        borderRadius: 15,
        maxWidth: "80%",
        marginHorizontal: 5,
      },
      myMessage: {
        backgroundColor: "#4080FF",
        alignSelf: "flex-end",
        paddingHorizontal: 20,
      },
      partnerMessage: {
        backgroundColor: "#E9F5FE",
        alignSelf: "flex-start",
        paddingHorizontal: 20,
      },
      myText: {
        color: "#fff",
      },
      partnerText: {
        color: "#000",
      },
      avatar: {
        width: 45,
        height: 45,
        borderRadius: 50,
        marginLeft: 10,
      },
      inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderTopWidth: 1,
        borderColor: "#ddd",
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 25,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginHorizontal: 10,
      },
      iconButton: {
        padding: 5,
      },
      icon: {
        width: 25,
        height: 25,
      },
      sendButton: {
        backgroundColor: "#4080FF",
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 8,
      },
      sendText: {
        color: "#fff",
        fontSize: 16,
      },

      headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: "#fff",
        elevation: 3,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
      },
      backButton: {
        marginRight: 10,
      },
      avatarHeader: {
        width: 55,
        height: 55,
        borderRadius: 20,
        marginRight: 20,
      },
      userInfo: {
        flex: 1,
        gap: 5
      },
      name: {
        fontSize: 21,
        fontWeight: "bold",
      },
      status: {
        fontSize: 16,
        color: "#888",
      },
      icon: {
        width: 28,
        height: 28,
        marginHorizontal: 10,
      },
});
