import React from 'react';
import { Col } from '../../components/atoms';
import { StatusList } from '../../components/organisms';

export const StatuScreen: React.FC = () => {
  return (
    <Col bg="white" flex={1}>
      <StatusList />
    </Col>
  );
};

// const styles = StyleSheet.create({});
