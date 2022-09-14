import { ColorValue, TextProps } from 'react-native';
import { ViewProp } from './Box';

export type TextProp = {
  color?: ColorValue;
  ff?: string;
  fz?: number;
} & ViewProp &
  TextProps;
