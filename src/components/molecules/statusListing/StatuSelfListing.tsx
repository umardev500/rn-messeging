import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../../themes';
import { RootStackParamList } from '../../../types';
import {
  Avatar,
  Box,
  Col,
  IconButton,
  Row,
  Text,
  TouchableRipple,
} from '../../atoms';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const StatuSelfListing: React.FC<Props> = ({ navigation }) => {
  // const handleNavigate = useCallback(() => {
  //   navigation.navigate('Chat');
  // }, []);

  return (
    <TouchableRipple rippleColor={colors.primary[500]}>
      <Box style={styles.container}>
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
      </Box>
    </TouchableRipple>
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
