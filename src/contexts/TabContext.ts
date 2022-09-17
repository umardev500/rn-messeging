import React from 'react';
import { SharedValue } from 'react-native-reanimated';

export type TabContextProps = {
  index: SharedValue<number>;
};

export const TabContext = React.createContext({});
