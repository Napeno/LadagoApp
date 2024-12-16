import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../screens/admin/Homepage";
import CalendarScreen from "../screens/admin/CalendarScreen/CalendarScreen";
import BookingScreen from "../screens/user/BookingScreen";
import MessageScreen from "../screens/user/MessageScreen";
import ProfileScreen from "../screens/user/ProfileScreen";
import CustomBottomTab from "@/components/BottomTabs/CustomBottomTab";
import CalendarDetailScreen from "../screens/admin/CalendarScreen/CalendarDetailScreen";
import CalendarMonthScreen from "../screens/admin/CalendarScreen/CalendarMonthScreen";
import CreateScreen from "../screens/admin/CreateScreen";

const Tab = createBottomTabNavigator();

export default function AdminBottomTabs() {
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
          name="Calendar"
          component={CalendarDetailScreen}
          options={{ tabBarLabel: "Calendar" }}
        />
        <Tab.Screen
          name="Create"
          component={CreateScreen}
          options={{ tabBarLabel: "Create" }}
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
