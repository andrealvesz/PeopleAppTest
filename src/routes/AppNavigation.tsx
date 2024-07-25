import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorites, Home } from '../modules';
import HIcon from '../assets/svg/home.svg';
import HFIcon from '../assets/svg/home-filled.svg';
import FIcon from '../assets/svg/favorite.svg';
import FFIcon from '../assets/svg/favorite-filled.svg';
import { useTheme } from 'styled-components';
import { svgProperties } from '../utils/svg';

const Stack = createBottomTabNavigator();

function AppNavigation() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.light.white,
        tabBarLabelStyle: {
          letterSpacing: 0.4,
          fontSize: 11,
          paddingBottom: 2,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.light['lime-950'],
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HFIcon {...svgProperties} />
            ) : (
              <HIcon {...svgProperties} />
            ),
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FFIcon {...svgProperties} />
            ) : (
              <FIcon {...svgProperties} />
            ),
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;
