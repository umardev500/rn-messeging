import React from 'react';
import { View } from 'react-native';
import { BoxProp } from '../../../types/Box';

export const Box: React.FC<BoxProp> = ({
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
  bg,
  br,
  ...props
}) => {
  return (
    <View
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
          backgroundColor: bg,
          borderRadius: br,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};
