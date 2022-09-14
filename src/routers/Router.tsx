import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ChatScreen } from '../screens';
import { HomeRouter } from './HomeRouter';

const Stack = createStackNavigator();

export const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Chat"
        screenOptions={{
          cardStyleInterpolator: () => ({}),
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeRouter" component={HomeRouter} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
