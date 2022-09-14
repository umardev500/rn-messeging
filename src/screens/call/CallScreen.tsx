import React from 'react';
import { Col } from '../../components/atoms';
import { CallList } from '../../components/organisms';

export const CallScreen: React.FC = () => {
  return (
    <Col flex={1} bg="white">
      <CallList />
    </Col>
  );
};
