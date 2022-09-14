import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { RootStackParamList } from '../../../types';
import { StatuSelfListing } from '../../molecules';
import { StatusReadList } from './StatusReadList';
import { StatusUnreadList } from './StatusUnreadList';

export const StatusList: React.FC = () => {
  const [data] = useState([0, 1, 2]);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const renderItem: ListRenderItem<number> = useCallback(({ item }) => {
    if (item === 0) return <StatuSelfListing navigation={navigation} />;

    if (item === 1) return <StatusUnreadList navigation={navigation} />;

    return <StatusReadList navigation={navigation} />;
  }, []);

  return <FlatList data={data} renderItem={renderItem} />;
};
