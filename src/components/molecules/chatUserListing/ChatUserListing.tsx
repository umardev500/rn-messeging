import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Mdi from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../themes';
import { RootStackParamList } from '../../../types';
import { Avatar, Col, Row, Text } from '../../atoms';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export const ChatUserListing: React.FC<Props> = ({ navigation }) => {
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
      <Col flex={1} pl={15}>
        <Row jc="space-between" ai="center">
          <Text fz={17} color="#444" ff="Roboto-Medium">
            Linus Torvalds
          </Text>
          <Text fz={12} color="#979797">
            7:02 PM
          </Text>
        </Row>
        <Row ai="flex-end" minH={24} mt={2}>
          <Mdi style={styles.done} name="done-all" size={18} />
          <Text flex={1} fz={15} color="#6b767f">
            Yes you can do it.
          </Text>
          <Row
            minH={24}
            minW={24}
            pb={1}
            ai="center"
            jc="center"
            br={25}
            bg={colors.primary[400]}
          >
            <Text color="white" ff="Roboto-Medium">
              8
            </Text>
          </Row>
        </Row>
      </Col>
    </Pressable>
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
