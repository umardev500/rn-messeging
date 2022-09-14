import React from 'react';
import { colors } from '../../../themes';
import { Col, IconButton } from '../../atoms';

export const Fab: React.FC = () => {
  return (
    <Col pos="absolute" b={20} r={15}>
      <IconButton
        color="white"
        bg={colors.primary[400]}
        size={56}
        elevation={8}
        name="chat"
      />
    </Col>
  );
};
