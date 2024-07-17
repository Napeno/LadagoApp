import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import BottomTabs from '../tabs/BottomTabs';
import { app, auth } from '../firebase'; // Import initialized instances

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="LOGIN" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="MAIN" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
