import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: 'white',
	  //paddingHorizontal:20,
	},
	header: {
	  flexDirection: 'row',
	  alignItems: 'center',
	  padding: 16,
	  borderBottomWidth: 1,
	  borderBottomColor: '#ccc',
	},
	headerTitle: {
	  fontSize: 18,
	  fontWeight: 'bold',
	  marginLeft: 16,
	},
	content: {
	  padding: 25,
	},
	sectionTitle: {
	  fontSize: 20,
	  fontWeight: 'bold',
	  marginBottom: 16,
	},
	amenitiesGrid: {
	  flexDirection: 'row',
	  flexWrap: 'wrap',
	  justifyContent: 'space-between',
	  marginBottom: 16
	},
	amenityItem: {
	  width: '48%',
	  flexDirection: 'row',
	  alignItems: 'center',
	  marginBottom: 8,
	  gap: 5
	},
	amenityText: {
	  fontSize: 14,
	  marginLeft: 8,
	  color: "balck",
	},
	amenityNText: {
	  fontSize: 14,
	  marginLeft: 8,
	  color: "#bebebe",
	},
	amenityIcon: {
	  fontSize: 30,
	  //marginLeft: 8,
	  color: "#bebebe"
	},
	amenityItemDetail: {
	  flexDirection: 'row',
	  marginBottom: 8,
	},
	amenityDetailText: {
	  marginLeft: 16,
	  flex: 1
	},
	amenityDescription: {
	  fontSize: 14,
	  color: '#555',
	  marginLeft:8,
	},
	divider: {
	  height: 1,
	  backgroundColor: '#ccc',
	  marginVertical: 8,
	},
  });