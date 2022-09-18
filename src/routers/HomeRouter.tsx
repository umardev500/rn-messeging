import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { runOnUI } from 'react-native-reanimated';
import { Col } from '../components/atoms';
import { Fab, MainHeader } from '../components/organisms';
import { TabContext, TabContextProps } from '../contexts';
import { TabProvider } from '../providers';
import { HomeScreen } from '../screens';
import { CallScreen } from '../screens/call';
import { StatuScreen } from '../screens/status';
import { colors } from '../themes';

const Tab = createMaterialTopTabNavigator();

const HomeRouterNavigation: React.FC = () => {
  const context = useContext(TabContext) as TabContextProps;

  const changeRouteSelected = (value: number) => {
    'worklet';

    context.index.value = value;
  };

  const handleMoved = (routeName: string) => {
    switch (routeName) {
      case 'Home':
        runOnUI(changeRouteSelected)(0);
        break;

      case 'Status':
        runOnUI(changeRouteSelected)(1);
        break;

      case 'Call':
        runOnUI(changeRouteSelected)(2);
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
        tabBar={props => <MaterialTopTabBar {...props} />}
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
      <Fab context={context} />
    </Col>
  );
};

export const HomeRouter = React.memo(() => {
  return (
    <TabProvider>
      <HomeRouterNavigation />
    </TabProvider>
  );
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
