import React from 'react';
import { BoxProp } from '../../../types';
import { Box } from '../box';

type Props = Omit<BoxProp, 'flexDirection'>;

export const Col: React.FC<Props> = ({ children, style, ...props }) => {
  return (
    <Box style={[style]} {...props}>
      {children}
    </Box>
  );
};
