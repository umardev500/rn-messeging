import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../../themes';
import { RootStackParamList } from '../../../types';
import { Avatar, Box, Col, Text, TouchableRipple } from '../../atoms';

export type StatusItem = {
  type: 'unread' | 'read';
  unreadCount: number;
  total: number;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const StatusListing: React.FC<Props> = ({ navigation }) => {
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
        <Col flex={1} pl={15}>
          <Col>
            <Text fz={17} color="#444" ff="Roboto-Medium">
              Linus Torvalds
            </Text>
            <Text fz={15} mt={2} color="#6b767f">
              Yesterday, 8:19 PM
            </Text>
          </Col>
        </Col>
      </Box>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  done: {
    marginRight: 5,
  },
});
