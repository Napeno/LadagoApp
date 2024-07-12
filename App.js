import { Stack } from 'expo-router';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

export default function RootLayout() {
  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="login" component={LoginScreen} options={{ title: 'Login' }} />
    </Stack>
  );
}
