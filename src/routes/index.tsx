import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { Login } from '../modules';
import { useAppSelector } from '../redux/hooks';
import AppNavigation from './AppNavigation';

const Stack = createNativeStackNavigator();

function Routes() {
  const { token } = useAppSelector(state => state.user);

  return (
    <Stack.Navigator
      initialRouteName={token ? 'AppNavigation' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="AppNavigation"
        component={AppNavigation}
        listeners={{
          focus: () => {
            StatusBar.setHidden(false);
            StatusBar.setBarStyle('dark-content');
          },
        }}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default Routes;
