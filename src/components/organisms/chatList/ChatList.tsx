import React, { useCallback, useState } from 'react';
import { ListRenderItem, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ChatListing, ChatListItem } from '../../molecules';

export const ChatList: React.FC = () => {
  const [data] = useState<ChatListItem[]>([
    {
      id: 1,
      username: 'Mark',
      text: 'Yeah.',
    },
    {
      id: 2,
      username: 'umar',
      text: 'Absolutely haha',
    },
    {
      id: 3,
      username: 'umar',
      text: "Let's do it",
    },
    {
      id: 4,
      username: 'Mark',
      text: 'Nowadays right?.',
    },
    {
      id: 5,
      username: 'Mark',
      text: "if yes, i'm so sorry I can't.",
    },
  ]);

  const renderItem: ListRenderItem<ChatListItem> = useCallback(
    ({ item, index }) => {
      const prev = data[index - 1]?.username === item.username;

      return <ChatListing prev={prev} {...item} />;
    },
    []
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 55,
  },
});
