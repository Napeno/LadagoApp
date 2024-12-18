import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./screens/user/Homepage";
import LoginScreen from "./screens/LoginScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import the GestureHandlerRootView
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="LOGIN">
          <Stack.Screen name="LOGIN" component={LoginScreen} />
          <Stack.Screen name="Home" component={Homepage} />
        </Stack.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
};

export default App;
