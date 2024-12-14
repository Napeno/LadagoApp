import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../screens/user/Homepage";
import FavoriteScreen from "../screens/user/FavoriteScreen";
import BookingScreen from "../screens/user/BookingScreen";
import MessageScreen from "../screens/user/MessageScreen";
import ProfileScreen from "../screens/user/ProfileScreen";
import CustomBottomTab from "@/components/BottomTabs/CustomBottomTab";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <CustomBottomTab {...props} />}
    >
      <Tab.Group screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={{ tabBarLabel: "Home" }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{ tabBarLabel: "Favorite" }}
        />
        <Tab.Screen
          name="Booking"
          component={BookingScreen}
          options={{ tabBarLabel: "Booking" }}
        />
        <Tab.Screen
          name="Message"
          component={MessageScreen}
          options={{ tabBarLabel: "Message" }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarLabel: "Profile" }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
