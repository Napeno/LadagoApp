import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProfileScreenUser from "../screens/user/ProfileScreen";
import ProfileScreenAdmin from "../screens/admin/ProfileScreen";
import Introduction from "../screens/admin/CreatingPlace/Introduction";
import StepOneScreen from "../screens/admin/CreatingPlace/StepOneScreen";
import StepTwoScreen from "../screens/admin/CreatingPlace/StepTwoScreen";
import StepThreeScreen from "../screens/admin/CreatingPlace/StepThreeScreen";
import StepFourScreen from "../screens/admin/CreatingPlace/StepFourScreen";
import StepFiveScreen from "../screens/admin/CreatingPlace/StepFiveScreen";
import StepSixScreen from "../screens/admin/CreatingPlace/StepSixScreen";
import StepSevenScreen from "../screens/admin/CreatingPlace/StepSevenScreen";
import StepEightScreen from "../screens/admin/CreatingPlace/StepEightScreen";
import StepNineScreen from "../screens/admin/CreatingPlace/StepNineScreen";
import StepTenScreen from "../screens/admin/CreatingPlace/StepTenScreen";
import CalendarMonthScreen from "../screens/admin/CalendarScreen/CalendarMonthScreen";
import CalendarDetailScreen from "../screens/admin/CalendarScreen/CalendarDetailScreen";
import ChatDetailScreen from "../screens/user/ChatDetailScreen";
import BottomTabs from "../tabs/BottomTabs";
import AdminBottomTabs from "../tabs/AdminBottomTabs";

import CameraScreen from "../screens/user/CameraScreen";

import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import RoomDetail from "@/screens/RoomDetail";
import IntroductionScreen from "@/screens/RoomDetail/IntroductionScreen";
import ReviewScreen from "@/screens/RoomDetail/ReviewScreen";
import WriteReviewScreen from "@/screens/RoomDetail/WriteReviewScreen";
// import ChatScreen from "@/screens/user/ChatScreen";
import MessageScreen from "@/screens/user/MessageScreen";
import AmenitiesScreen from "@/screens/RoomDetail/placeOffer";
import SearchingScreen from "@/screens/user/searchScreen";
import Booking from "@/screens/Booking";
import Confirm from "@/screens/Booking/ConfirmScreen";
import ChatBot from "@/screens/ChatBot";
import CreateScreen from "@/screens/admin/CreateScreen";
// Notification
import NotificationScreen from "@/screens/user/Noti";

import { Provider } from "react-redux";
import { store } from "../store/reduxStore";
import DetailScreen from "@/screens/Detail";

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // @ts-ignore
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            {/* <Stack.Screen name="STEPONE" component={StepOneScreen} /> */}
            <Stack.Screen name="MAIN" component={BottomTabs} />
            <Stack.Screen name="ADMIN" component={AdminBottomTabs} />
            <Stack.Screen name="Room Detail" component={RoomDetail} />
            <Stack.Screen name="CHATDETAIL" component={ChatDetailScreen} />
            <Stack.Screen name="MESSAGE" component={MessageScreen} />
            {/* <Stack.Screen name="CHAT" component={ChatScreen} /> */}
            <Stack.Screen name="Amenities" component={AmenitiesScreen} />
            <Stack.Screen name="Search" component={SearchingScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
            <Stack.Screen name="ADDHOTEL" component={CreateScreen} />

            <Stack.Screen
              options={{ headerShown: true }}
              name="INTRODUCTION"
              component={IntroductionScreen}
            />
            <Stack.Screen
              options={{ headerShown: true }}
              name="Review"
              component={ReviewScreen}
            />

            <Stack.Screen
              options={{ headerShown: true }}
              name="Write Review"
              component={WriteReviewScreen}
            />
            <Stack.Screen
              options={{ headerShown: true }}
              name="Booking"
              component={Booking}
            />
            <Stack.Screen
              options={{ headerShown: true }}
              name="Confirm"
              component={Confirm}
            />
            <Stack.Screen
              options={{ headerShown: true }}
              name="Chat Bot"
              component={ChatBot}
            />
            <Stack.Screen
              options={{ headerShown: true }}
              name="Detail"
              component={DetailScreen}
            />
            <Stack.Screen name="LOGIN" component={LoginScreen} />
          </>
        ) : (
          <Stack.Screen name="LOGIN" component={LoginScreen} />
        )}
        <Stack.Screen name="CAMERA" component={CameraScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="CREATE" component={Introduction} />
        <Stack.Screen name="PROFILEU" component={ProfileScreenUser} />
        <Stack.Screen name="PROFILEA" component={ProfileScreenAdmin} />
        <Stack.Screen name="STEPONE" component={StepOneScreen} />
        <Stack.Screen name="STEPTWO" component={StepTwoScreen} />
        <Stack.Screen name="STEPTHREE" component={StepThreeScreen} />
        <Stack.Screen name="STEPFOUR" component={StepFourScreen} />
        <Stack.Screen name="STEPFIVE" component={StepFiveScreen} />
        <Stack.Screen name="STEPSIX" component={StepSixScreen} />
        <Stack.Screen name="STEPSEVEN" component={StepSevenScreen} />
        <Stack.Screen name="STEPEIGHT" component={StepEightScreen} />
        <Stack.Screen name="STEPNINE" component={StepNineScreen} />
        <Stack.Screen name="STEPTEN" component={StepTenScreen} />
        <Stack.Screen name="CALENDARMONTH" component={CalendarMonthScreen} />
        <Stack.Screen name="CALENDARDETAIL" component={CalendarDetailScreen} />
      </Stack.Navigator>
    </Provider>
  );
};

export default App;
