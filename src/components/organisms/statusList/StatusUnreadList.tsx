import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { RootStackParamList } from '../../../types';
import { Text } from '../../atoms';
import { StatusListing } from '../../molecules';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const ITEM_HEIGHT = 75;

export const StatusUnreadList: React.FC<Props> = ({ navigation }) => {
  const [data] = useState([1, 1, 1]);

  const renderItem = useCallback(() => {
    return <StatusListing navigation={navigation} />;
  }, []);

  return (
    <>
      <Text ph={20} color="#6b767f" fz={14} ff="Roboto-Medium" mt={10} mb={4}>
        Recent updates
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        getItemLayout={(_data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    </>
  );
};
