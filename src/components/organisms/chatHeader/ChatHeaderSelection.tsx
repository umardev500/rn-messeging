import React, { useCallback, useContext } from 'react';
import Animated from 'react-native-reanimated';
import { ChatContext, ChatContextProps } from '../../../contexts';
import { Header } from '../header';

export const ChatHeaderSelection: React.FC = () => {
  const context = useContext(ChatContext) as ChatContextProps;

  const handleClickDelete = useCallback(() => {
    // console.log(context.selectedItems.value);
    context.selectedItems.value = [];
  }, []);

  return (
    <Animated.View style={[]}>
      <Header>
        <Header.Action icon="arrow-back" onTap={() => {}} />
        <Header.Content title="1" />
        <Header.Action icon="reply" onTap={() => {}} />
        <Header.Action icon="star" />
        <Header.Action icon="delete" onTap={handleClickDelete} />
        <Header.Action icon="more-vert" />
      </Header>
    </Animated.View>
  );
};
