import React, { useMemo } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { ChatListItem } from '../components/molecules';
import { ChatContext, ChatContextProps } from '../contexts';

type Props = {
  children?: React.ReactNode;
};

export const ChatProvider: React.FC<Props> = ({ children }) => {
  const selectedItems = useSharedValue<ChatListItem[]>([]);
  const replyItem = useSharedValue<ChatListItem[]>([]);

  const data = useMemo<ChatContextProps>(() => {
    return {
      selectedItems,
      replyItem,
    };
  }, []);

  return <ChatContext.Provider value={data}>{children}</ChatContext.Provider>;
};
