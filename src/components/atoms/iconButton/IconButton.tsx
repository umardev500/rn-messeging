import React from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Mdi from 'react-native-vector-icons/MaterialIcons';
import { TouchableRipple } from '../touchableRipple';

type Props = {
  name: string;
  size?: number;
  iconSize?: number;
  elevation?: number;
  color?: ColorValue;
  bg?: ColorValue;
  style?: StyleProp<ViewStyle>;
  onTap?: () => void;
};

export const IconButton: React.FC<Props> = ({
  name,
  size = 24,
  iconSize = 24,
  elevation,
  color,
  bg,
  style,
  onTap,
}) => {
  return (
    <TouchableRipple
      onTap={onTap}
      borderRadius={size}
      style={[
        {
          backgroundColor: bg,
          elevation,
        },
        style,
      ]}
    >
      <View style={[styles.container, { width: size, height: size }]}>
        <Mdi name={name} size={iconSize} color={color} />
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
