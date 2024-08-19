import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Introduction from '../screens/CreatingPlace/Introduction'
import BottomTabs from '../tabs/BottomTabs';
import { auth } from '../firebase'; // Import initialized instances
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="MAIN" component={BottomTabs} />
        ) : (
          <Stack.Screen name="LOGIN" component={LoginScreen} />
        )}

          <Stack.Screen name="CREATE" component={Introduction} />
          <Stack.Screen name="PROFILE" component={ProfileScreen} />
          
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
