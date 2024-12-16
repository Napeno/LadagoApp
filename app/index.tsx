import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/user/ProfileScreen";
import Introduction from "../screens/admin/CreatingPlace/Introduction";
import StepOneScreen from '../screens/admin/CreatingPlace/StepOneScreen'
import StepTwoScreen from '../screens/admin/CreatingPlace/StepTwoScreen'
import StepThreeScreen from '../screens/admin/CreatingPlace/StepThreeScreen'
import StepFourScreen from '../screens/admin/CreatingPlace/StepFourScreen'
import StepFiveScreen from '../screens/admin/CreatingPlace/StepFiveScreen'
import StepSixScreen from '../screens/admin/CreatingPlace/StepSixScreen'
import StepSevenScreen from '../screens/admin/CreatingPlace/StepSevenScreen'
import StepEightScreen from '../screens/admin/CreatingPlace/StepEightScreen'
import StepNineScreen from '../screens/admin/CreatingPlace/StepNineScreen'
import StepTenScreen from '../screens/admin/CreatingPlace/StepTenScreen'

import CalendarMonthScreen from '../screens/admin/CalendarScreen/CalendarMonthScreen'
import CalendarDetailScreen from '../screens/admin/CalendarScreen/CalendarDetailScreen'

import BottomTabs from "../tabs/BottomTabs";
import AdminBottomTabs from "../tabs/AdminBottomTabs";

import { auth } from "../firebase"; 
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import RoomDetail from "@/screens/RoomDetail";
import IntroductionScreen from "@/screens/RoomDetail/IntroductionScreen";
import ReviewScreen from "@/screens/RoomDetail/ReviewScreen";
import WriteReviewScreen from "@/screens/RoomDetail/WriteReviewScreen";
import Booking from "@/screens/Booking";
import Confirm from "@/screens/Booking/ConfirmScreen";

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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            {/* <Stack.Screen name="STEPONE" component={StepOneScreen} /> */}
            <Stack.Screen name="ADMIN" component={AdminBottomTabs} />
            <Stack.Screen name="MAIN" component={BottomTabs} />
            <Stack.Screen name="Room Detail" component={RoomDetail} />
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

          </>
        ) : (
          <Stack.Screen name="LOGIN" component={LoginScreen} />
        )}
          <Stack.Screen name="CREATE" component={Introduction} />
          <Stack.Screen name="PROFILE" component={ProfileScreen} />
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



  );
};

export default App;
