import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  backButtonContainer: {
    marginRight: 12,
  },
  backButtonText: {
    color: "blue",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  messageContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  receiverContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#e0e0e0",
  },
  senderName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  message: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: "#666",
    textAlign: "right",
    marginTop: 4,
  },
});

export default chatScreenStyles;
