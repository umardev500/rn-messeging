import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';

type Props = {
  width?: string | number;
  height?: string | number;
  borderRadius?: number;
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
};

export const Avatar: React.FC<Props> = ({
  width = 45,
  height = 45,
  borderRadius = 45,
  source,
  style,
}) => {
  return (
    <Image source={source} style={[{ width, height, borderRadius }, style]} />
  );
};
