import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import DeleteIcon from 'react-native-vector-icons/MaterialIcons';
import avatar from "../../../constants/avatar2.png";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const CalendarDetailScreen = () => {
  const [items, setItems] = useState({});
  const [selected, setSelected] = useState(timeToString(Date.now()));

  const loadItems = (day) => {
    setTimeout(() => {
      const newItems = { ...items };
      const predefinedDates = ['2024-12-12', '2024-12-13', '2024-12-14'];
  
      predefinedDates.forEach((strTime) => {
        if (!newItems[strTime]) {
          newItems[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            newItems[strTime].push({
              name: `Event for ${strTime} #${j}`,
              start: '12:00 PM',
              end: '12:30 PM',
              type: 'Follow Up',
              date: strTime,
              key: j,
              id: `${strTime}#${j}`,
              showitem: true,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      });
  
      setItems(newItems);
    }, 1000);
  };
  

  const deleteItem = (item) => {
    const updatedItems = { ...items };
    if (updatedItems[item.date]) {
      updatedItems[item.date] = updatedItems[item.date].filter(
        (i) => i.id !== item.id
      );
    }
    setItems(updatedItems);
  };

  const renderItem = (item) => (
    <View>
      {item.showitem && (
        <TouchableOpacity
          style={styles.item}
          onPress={() => Alert.alert(item.name)}
        >
          <View>
            <Text style={styles.timing}>
              {item.start} - {item.end}
            </Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.type}>{item.type}</Text>
            <View style={{ flexDirection: 'row' }}>
              <EditIcon.Button
                name="edit"
                size={20}
                backgroundColor="white"
                color="red"
                onPress={() => Alert.alert('Edit')}
              />
              <DeleteIcon.Button
                name="delete"
                size={20}
                backgroundColor="white"
                color="red"
                onPress={() => deleteItem(item)}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={selected}
        onDayPress={(date) => setSelected(date.dateString)}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CalendarDetailScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  timing: {
    color: 'red',
  },
  type: {
    color: '#03A9F4',
  },
});
