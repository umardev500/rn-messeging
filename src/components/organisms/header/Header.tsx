import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../../../themes';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Header: React.FC<Props> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: colors.primary[500],
    flexDirection: 'row',
  },
});
