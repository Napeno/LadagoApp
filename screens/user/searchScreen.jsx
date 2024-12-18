import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Modal,
  Switch,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';


const { width } = Dimensions.get('window');

const SearchingScreen = ({ navigation }) => {
  const [place, setPlace] = useState('');
  const [dates, setDates] = useState('Sunday, 9th June 2024');
  const [guests, setGuests] = useState('1 room - 2 passengers - No children');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isGuestsPickerVisible, setGuestsPickerVisibility] = useState(false);
  const [roomCount, setRoomCount] = useState(1);
  const [adultCount, setAdultCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [pet, setPet] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  

  const destinations = [
    // ... (giữ nguyên)
  ];

  // Các hàm xử lý Date Picker
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setSelectedDate(currentDate);
  };

  const handleConfirmDate = () => {
    const formattedDate = selectedDate.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const endFormattedDate = new Date(selectedDate);
    endFormattedDate.setDate(endFormattedDate.getDate() + 3);
    const formattedEndDate = endFormattedDate.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    setDates(`${formattedDate} - ${formattedEndDate}`);
    hideDatePicker();
  };

  // Các hàm xử lý Guest Picker
  const showGuestsPicker = () => {
    setGuestsPickerVisibility(true);
  };

  const hideGuestsPicker = () => {
    setGuestsPickerVisibility(false);
  };

  const handleRoomChange = (action) => {
    if (action === 'add') {
      setRoomCount(roomCount + 1);
    } else if (action === 'subtract' && roomCount > 1) {
      setRoomCount(roomCount - 1);
    }
  };

  const handleAdultChange = (action) => {
    if (action === 'add') {
      setAdultCount(adultCount + 1);
    } else if (action === 'subtract' && adultCount > 1) {
      setAdultCount(adultCount - 1);
    }
  };

  const handleChildrenChange = (action) => {
    if (action === 'add') {
      setChildrenCount(childrenCount + 1);
    } else if (action === 'subtract' && childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };

  const handleApplyGuests = () => {
    setGuests(`${roomCount} room - ${adultCount} passengers - ${childrenCount} children`);
    hideGuestsPicker();
  };
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Good Morning!</Text>
          <Text style={styles.questionText}>Where do you want to travel?</Text>
        </View>
      </View>

      <View style={styles.searchSection}>
        <Text style={styles.label}>Place you want to travel?</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={20} color="#7f8c8d" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Search places"
            value={place}
            onChangeText={setPlace}
          />
        </View>

        <Text style={styles.label}>When does your trip take place?</Text>
        <View style={styles.inputContainer}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#7f8c8d"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            value={dates}
            editable={false}
            onPressIn={showDatePicker}
          />
        </View>

        {/* Modal Date Picker */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={isDatePickerVisible}
          onRequestClose={hideDatePicker}
        >
          <View style={styles.centeredView}>
            <View style={styles.datePickerModal}>
              <View style={styles.datePickerContainer}>
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="spinner"
                  onChange={handleDateChange}
                />
                <View style={styles.datePickerButtonContainer}>
                  <TouchableOpacity
                    onPress={hideDatePicker}
                    style={styles.datePickerCancelButton}
                  >
                    <Text style={styles.datePickerButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleConfirmDate}
                    style={styles.datePickerConfirmButton}
                  >
                    <Text style={styles.datePickerButtonText}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        
        <Text style={styles.label}>Who will you travel with?</Text>
        <View style={styles.inputContainer}>
          <Ionicons
            name="person-outline"
            size={20}
            color="#7f8c8d"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            value={guests}
            editable={false}
            onPressIn={showGuestsPicker}
          />
        </View>

        {/* Modal Guest Picker */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isGuestsPickerVisible}
          onRequestClose={hideGuestsPicker}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalDivider}>
                <Text style={styles.modalTitle}>
                  Select room and passengers quantity
                </Text>
              </View>

              {/* Các phần chọn số lượng phòng, người lớn, trẻ em, thú cưng */}
              <View style={styles.quantityContainer}>
                <Text style={styles.quantityLabel}>Room</Text>
                <View style={styles.quantityButtons}>
                  <TouchableOpacity
                    onPress={() => handleRoomChange('subtract')}
                  >
                    <Text style={styles.quantityButton}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityValue}>{roomCount}</Text>
                  <TouchableOpacity onPress={() => handleRoomChange('add')}>
                    <Text style={styles.quantityButton}>+</Text>
                  </TouchableOpacity>
                </View>	
              </View>

              <View style={styles.quantityContainer}>
                <Text style={styles.quantityLabel}>Adult</Text>
                <View style={styles.quantityButtons}>
                  <TouchableOpacity
                    onPress={() => handleAdultChange('subtract')}
                  >
                    <Text style={styles.quantityButton}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityValue}>{adultCount}</Text>
                  <TouchableOpacity onPress={() => handleAdultChange('add')}>
                    <Text style={styles.quantityButton}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.quantityContainer}>
                <View style={styles.quantityChild}>
                  <Text style={styles.quantityLabel}>Children</Text>
                  <Text style={styles.quantityLabelDesc}>
                    0 - 17 years old
                  </Text>
                </View>
                <View style={styles.quantityButtons}>
                  <TouchableOpacity
                    onPress={() => handleChildrenChange('subtract')}
                  >
                    <Text style={styles.quantityButton}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityValue}>{childrenCount}</Text>
                  <TouchableOpacity
                    onPress={() => handleChildrenChange('add')}
                  >
                    <Text style={styles.quantityButton}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.quantityContainer}>
                <Text style={styles.quantityLabel}>Bring your pet</Text>
                <View style={styles.quantityButtons}>
                  <TouchableOpacity onPress={() => setPet(!pet)}>
                      <Switch
                          trackColor={{ false: "#767577", true: "#34C759" }}
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                      />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={styles.applyButton}
                onPress={handleApplyGuests}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.resetButton}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.discoverSection}>
        {/*discover giữ nguyên*/}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3498db',
  },
  greeting: {
    marginLeft: 16,
  },
  greetingText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  questionText: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  searchSection: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  resetButton: {
    backgroundColor: '#bdc3c7',
    padding: 12,
    borderRadius: 5,
    flex: 0.48,
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 5,
    flex: 0.48,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  discoverSection: {
    padding: 20,
  },
  discoverHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  discoverTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '600',
  },
  destinationCard: {
    width: width * 0.4,
    marginRight: 15,
  },
  destinationImage: {
    width: '100%',
    height: width * 0.4,
    borderRadius: 10,
    marginBottom: 8,
  },
  destinationName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  destinationDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 4,
  },
  destinationLink: {
    color: '#3498db',
    fontSize: 14,
    fontWeight: '600',
  },
  // Style cho Date Picker Modal
  datePickerModal: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 20,
    width: '80%', // Điều chỉnh kích thước modal
    alignSelf: 'center', // Căn giữa modal
  },
  datePickerContainer: {
    alignItems: 'center'
  },
  datePickerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  datePickerCancelButton: {
    marginRight: 20,
  },
  datePickerConfirmButton: {},
  datePickerButtonText: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: '600',
  },

  // Style cho Guest Picker Modal (Modal của React Native)
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end', // Chỉnh modal hiển thị từ dưới lên
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Thêm màu nền trong suốt
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
    width: '100%', // Chiếm toàn bộ chiều rộng
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  applyButton: {
    backgroundColor: '#3498db', 
    paddingVertical: 15,        
    paddingHorizontal: 30,      
    borderRadius: 5,           
    alignItems: 'center', 
    marginTop: 20,     
  },
  modalDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 20,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  applyButtonText: {
    color: 'white',             // White text color
    fontSize: 18,              // Font size
    fontWeight: 'bold',         // Bold text
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  quantityLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityLabelDesc: {
    fontSize: 14,
    color: 'gray',
  },
  quantityChild: {
    flex:'row',
  },
  quantityButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db', // Blue color
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
    lineHeight: 28, // Adjust line height for better vertical alignment
  },
  quantityValue: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  // ... (các style khác cho Guest Picker giữ nguyên)
});


export default SearchingScreen;