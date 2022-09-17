import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { Col } from '../components/atoms';
import { Fab, MainHeader } from '../components/organisms';
import { HomeScreen } from '../screens';
import { CallScreen } from '../screens/call';
import { StatuScreen } from '../screens/status';
import { colors } from '../themes';

const Tab = createMaterialTopTabNavigator();

const HomeRouterNavigation: React.FC = () => {
  const routeSelected = useSharedValue<number>(0);

  const changeRouteSelected = (value: number) => {
    'worklet';

    routeSelected.value = value;
  };

  const handleMoved = (routeName: string) => {
    switch (routeName) {
      case 'Home':
        changeRouteSelected(0);
        break;

      case 'Status':
        changeRouteSelected(1);
        break;

      case 'Call':
        changeRouteSelected(2);
        break;

      default:
        console.log('default route');
        break;
    }
  };

  return (
    <Col flex={1}>
      <MainHeader />
      <Tab.Navigator
        screenListeners={({ route }) => ({
          swipeEnd: () => handleMoved(route.name),
        })}
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
    </Col>
  );
};

export const HomeRouter = React.memo(() => {
  return <HomeRouterNavigation />;
});

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
