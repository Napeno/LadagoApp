import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Alert, StyleSheet, Image } from "react-native";
import { Agenda } from "react-native-calendars";
import EditIcon from "react-native-vector-icons/MaterialIcons";
import DeleteIcon from "react-native-vector-icons/MaterialIcons";
import avatar from "../../../constants/avatar2.png";
import {getForecastModel} from "../../../api/forecast"

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const CalendarDetailScreen = ({route}) => {
  const [items, setItems] = useState({});
  const [selected, setSelected] = useState(timeToString(Date.now()));
  const [dayColors, setDayColors] = useState({});
  const [forecast, setForecast] = useState([]);
 
  const handleGenerateForcast = async() => {
    const steps = 364;
    try {
      const response = await getForecastModel(steps);
      console.log('forecast data: ', response?.forecast);
      setForecast(response?.forecast);
      // navigation.navigate("CALENDARDETAIL", { forecast: response?.forecast });
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  }

  useEffect(() => {
    handleGenerateForcast();
  }, []);

  useEffect(() => {
    const colors = {};
    forecast.forEach((entry) => {
      if (entry.value < 30) {
        colors[entry.date] = "green";
      } else if (entry.value < 50) {
        colors[entry.date] = "orange";
      } else {
        colors[entry.date] = "red";
      }
    });
    setDayColors(colors); 
  }, [forecast]);

  const loadItems = (day) => {
    setTimeout(() => {
      const newItems = { ...items };
      const predefinedDates = ["2024-12-18", "2024-12-19", "2024-12-20"];

      predefinedDates.forEach((strTime) => {
        if (!newItems[strTime]) {
          newItems[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            newItems[strTime].push({
              name: `Event for ${strTime} #${j}`,
              start: "12:00 PM",
              end: "12:30 PM",
              type: "Follow Up",
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
        (i) => i.id !== item.id,
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.timing}>
                {item.start} - {item.end}
              </Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.type}>{item.type}</Text>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <EditIcon.Button
                  name="edit"
                  size={20}
                  backgroundColor="white"
                  color="red"
                  onPress={() => Alert.alert("Edit")}
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
            <Image source={avatar} style={styles.avatar} />
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
        theme={{
          selectedDayBackgroundColor: "blue",
          calendarBackground: "#f1f2f6",
          agendaDayTextColor: "red",
          agendaDayNumColor: (day) => dayColors[day] || "black",
        }}
        markedDates={Object.keys(dayColors).reduce((acc, date) => {
          acc[date] = { marked: true, dotColor: dayColors[date] || "red" }; // Áp dụng màu từ dayColors
          return acc;
        }, {})}
      />
    </View>
  );
};

export default CalendarDetailScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  timing: {
    color: "red",
  },
  type: {
    color: "#03A9F4",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
