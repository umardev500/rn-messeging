import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import React from 'react';
import { TabContextProps } from '../../../contexts';

type Props = MaterialTopTabBarProps & {
  context: TabContextProps;
};

export const TopTabBar: React.FC<Props> = ({ context, ...props }) => {
  const { state } = props;

  context.index.value = state.index;

  return <MaterialTopTabBar {...props} />;
};
