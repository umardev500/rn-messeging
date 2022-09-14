import { ColorValue, FlexAlignType, ViewProps } from 'react-native';

export type FlexProp = {
  ai?: FlexAlignType;
  flex?: number;
  fdir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  fg?: number;
  fs?: number;
  fw?: 'wrap' | 'nowrap' | 'wrap-reverse';
  jc?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
};

export type PositionProp = {
  pos?: 'absolute' | 'relative';
  l?: number | string;
  t?: number | string;
  r?: number | string;
  b?: number | string;
};

export type SpacingProp = {
  p?: number | string;
  pl?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  ph?: number | string;
  pv?: number | string;
  m?: number | string;
  ml?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  mh?: number | string;
  mv?: number | string;
};

type ViewStyle = {
  w?: number | string;
  minW?: number | string;
  h?: number | string;
  minH?: number | string;
  of?: 'visible' | 'hidden' | 'scroll';
  zIndex?: number | undefined;
  el?: number | undefined;
  bg?: ColorValue;
  br?: number;
};

export type ViewProp = ViewStyle & SpacingProp & FlexProp & PositionProp;

export type BoxProp = ViewProps & ViewProp;
