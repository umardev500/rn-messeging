import React from 'react';
import { SharedValue } from 'react-native-reanimated';
import { ChatListItem } from '../components/molecules';

export type ChatContextProps = {
  selectedItems: SharedValue<ChatListItem[]>;
  replyItem: SharedValue<ChatListItem[]>;
};

export const ChatContext = React.createContext({});
