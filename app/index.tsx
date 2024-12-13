import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Introduction from "../screens/CreatingPlace/Introduction";
import StepOneScreen from "../screens/CreatingPlace/StepOneScreen";
import StepTwoScreen from "../screens/CreatingPlace/StepTwoScreen";
import StepThreeScreen from "../screens/CreatingPlace/StepThreeScreen";
import StepFourScreen from "../screens/CreatingPlace/StepFourScreen";
import StepFiveScreen from "../screens/CreatingPlace/StepFiveScreen";
import StepSixScreen from "../screens/CreatingPlace/StepSixScreen";
import BottomTabs from "../tabs/BottomTabs";
import { auth } from "../firebase"; // Import initialized instances
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
    // Optionally, you can add a loading screen here
    return null;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
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
    </Stack.Navigator>
  );
};

export default App;
