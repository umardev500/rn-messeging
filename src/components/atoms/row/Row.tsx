import React from 'react';
import { BoxProp } from '../../../types';
import { Box } from '../box';

type Props = Omit<BoxProp, 'flexDirection'>;

export const Row: React.FC<Props> = ({ children, style, ...props }) => {
  return (
    <Box style={[{ flexDirection: 'row' }, style]} {...props}>
      {children}
    </Box>
  );
};
