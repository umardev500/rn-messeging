import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../../types';
import { Avatar, Col, IconButton, Row, Text } from '../../atoms';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const StatuSelfListing: React.FC<Props> = ({ navigation }) => {
  const handleNavigate = useCallback(() => {
    navigation.navigate('Chat');
  }, []);

  return (
    <Pressable onPress={handleNavigate} style={styles.container}>
      <Avatar
        width={50}
        height={50}
        source={require('../../../../assets/avatars/brian-hughes.jpg')}
      />
      <Row jc="space-between" ai="center" flex={1} pl={15}>
        <Col>
          <Text fz={17} color="#444" ff="Roboto-Medium">
            My Status
          </Text>
          <Text mt={2} fz={15} color="#6b767f">
            Yesterday, 8:19 PM
          </Text>
        </Col>
        <IconButton size={60} name="more-horiz" />
      </Row>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  done: {
    marginRight: 5,
  },
});
