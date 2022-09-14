import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Fab } from '../components/organisms';
import { HomeScreen } from '../screens';
import { CallScreen } from '../screens/call';
import { StatuScreen } from '../screens/status';
import { colors } from '../themes';

const Tab = createMaterialTopTabNavigator();

export const HomeRouter: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
          lazy: true,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Status" component={StatuScreen} />
        <Tab.Screen name="Call" component={CallScreen} />
      </Tab.Navigator>
      <Fab />
    </>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.primary[500],
  },
  tabBarLabelStyle: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
  },
  tabBarIndicatorStyle: {
    backgroundColor: 'white',
  },
});
