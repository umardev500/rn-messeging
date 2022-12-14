import React, { useCallback, useContext, useEffect, useState } from 'react';
import { BackHandler, StyleSheet } from 'react-native';
import Animated, {
  runOnJS,
  runOnUI,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { ChatContext, ChatContextProps } from '../../../contexts';
import { Header } from '../header';

export const ChatHeaderSelection: React.FC = () => {
  const context = useContext(ChatContext) as ChatContextProps;
  const [counter, setCounter] = useState<number>(1);
  const headerIndex = useSharedValue<number>(0);

  // back handler
  // will reset all selection if have a item is selected
  // will be back to previous screen if no selected item
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (context.selectedItems.value.length < 1) return false;

      context.selectedItems.value = [];
      setCounter(1);

      return true;
    });
  }, []);

  // clear deletion
  const clearDeletion = (deletedCount: number) => {
    'worklet';

    const deletedItemSize = context.deletedItems.value.length;

    if (deletedCount !== 0 && deletedCount === deletedItemSize) {
      context.deletedItems.value = [];
      context.selectedItems.value = [];
      context.deletedCount.value = 0;
      runOnJS(setCounter)(1);
    }
  };

  // watch deleted counter
  useDerivedValue(() => {
    // console.log('counter', context.deletedCount.value.length);
    // console.log('items to delete', context.deletedItems.value.length);
    clearDeletion(context.deletedCount.value);
  }, []);

  const handleClickDelete = useCallback(() => {
    'woklet';

    // console.log(context.selectedItems.value);
    context.deletedItems.value = context.selectedItems.value;
  }, []);

  // reanimated style for header
  const headerStyle = useAnimatedStyle(() => {
    return {
      zIndex: headerIndex.value,
    };
  }, []);

  // update header shared value
  const showingHeader = () => {
    'worklet';

    headerIndex.value = 1;
  };

  // hiding header by update value
  const hidingHeader = () => {
    'worklet';

    headerIndex.value = 0;
  };

  // watch selected items for header style
  useDerivedValue(() => {
    if (
      context.selectedItems.value.length > 0 &&
      context.selectedItems.value.length < 2
    ) {
      showingHeader();
    }

    if (context.selectedItems.value.length < 1) {
      hidingHeader();
    }
  }, []);

  // watch selected items for counter
  useDerivedValue(() => {
    const selectedIemSize = context.selectedItems.value.length;

    if (selectedIemSize >= 1) runOnJS(setCounter)(selectedIemSize);
  }, []);

  // reply handler
  const handleClickReply = useCallback(() => {
    'woklet';

    // console.log('reply data', context.selectedItems.value);

    // set value for reply item
    context.replyItem.value = context.selectedItems.value;
  }, []);

  // back click handler
  const handleBack = useCallback(() => {
    context.selectedItems.value = [];
  }, []);

  return (
    <Animated.View style={[styles.container, headerStyle]}>
      <Header>
        <Header.Action icon="arrow-back" onTap={handleBack} />
        <Header.Content title={counter.toString()} />
        {counter <= 1 ? (
          <Header.Action icon="reply" onTap={runOnUI(handleClickReply)} />
        ) : null}
        <Header.Action icon="star" />
        <Header.Action icon="delete" onTap={runOnUI(handleClickDelete)} />
        <Header.Action icon="more-vert" />
      </Header>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
});
