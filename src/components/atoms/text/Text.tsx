import React from 'react';
import { Text as RnText } from 'react-native';
import { TextProp } from '../../../types';

type Props = TextProp;

export const Text: React.FC<Props> = ({
  children,
  style,
  p,
  pl,
  pt,
  pr,
  pb,
  ph,
  pv,
  m,
  ml,
  mt,
  mr,
  mb,
  mh,
  mv,
  w,
  minW,
  h,
  minH,
  of,
  pos,
  l,
  t,
  r,
  b,
  zIndex,
  el,
  ai,
  flex,
  fdir,
  fg,
  fs,
  fw,
  jc,
  color,
  fz,
  ff,
}) => {
  return (
    <RnText
      style={[
        {
          padding: p,
          paddingLeft: pl,
          paddingTop: pt,
          paddingRight: pr,
          paddingBottom: pb,
          paddingHorizontal: ph,
          paddingVertical: pv,
          margin: m,
          marginLeft: ml,
          marginTop: mt,
          marginRight: mr,
          marginBottom: mb,
          marginHorizontal: mh,
          marginVertical: mv,
          width: w,
          minWidth: minW,
          height: h,
          minHeight: minH,
          overflow: of,
          position: pos,
          left: l,
          top: t,
          right: r,
          bottom: b,
          zIndex,
          elevation: el,
          alignItems: ai,
          flex,
          flexDirection: fdir,
          flexGrow: fg,
          flexShrink: fs,
          flexWrap: fw,
          justifyContent: jc,
          color,
          fontSize: fz,
          fontFamily: ff,
        },
        style,
      ]}
    >
      {children}
    </RnText>
  );
};
