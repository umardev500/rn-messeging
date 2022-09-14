import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../../types';
import { ChatUserListing } from '../../molecules';

const ITEM_HEIGHT = 75;

export const ChatUserList = React.memo(() => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState<number[]>([]);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
      setData(Array.from(Array(3).keys()));
    }, 500);
  }, []);

  const renderItem = useCallback(() => {
    return <ChatUserListing navigation={navigation} />;
  }, []);

  if (loaded)
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        getItemLayout={(_data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    );

  return null;
});
