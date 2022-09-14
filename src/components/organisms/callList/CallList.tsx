import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { RootStackParamList } from '../../../types';
import { CallListing } from '../../molecules';

export const CallList: React.FC = () => {
  const [data] = useState([0, 1, 2]);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const renderItem: ListRenderItem<number> = useCallback(() => {
    return <CallListing navigation={navigation} />;
  }, []);

  return <FlatList data={data} renderItem={renderItem} />;
};
