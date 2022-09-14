import React, { useCallback, useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { ChatContext, ChatContextProps } from '../../../contexts';
import { Header } from '../header';

export const ChatHeaderSelection: React.FC = () => {
  const context = useContext(ChatContext) as ChatContextProps;
  const [counter, setCounter] = useState<number>(0);
  const headerIndex = useSharedValue<number>(0);

  const handleClickDelete = useCallback(() => {
    // console.log(context.selectedItems.value);
    context.selectedItems.value = [];
  }, []);

  // reanimated style for header
  const headerStyle = useAnimatedStyle(() => {
    return {
      zIndex: headerIndex.value,
    };
  }, []);

  // update header shared value
  const showingHeader = () => {
    headerIndex.value = 1;
  };

  // hiding header by update value
  const hidingHeader = () => {
    headerIndex.value = 0;
  };

  // watch selected items for header style
  useDerivedValue(() => {
    if (
      context.selectedItems.value.length > 0 &&
      context.selectedItems.value.length < 2
    ) {
      runOnJS(showingHeader)();
    }

    if (context.selectedItems.value.length < 1) {
      runOnJS(hidingHeader)();
    }
  }, []);

  // watch selected items for counter
  useDerivedValue(() => {
    runOnJS(setCounter)(context.selectedItems.value.length);
  }, []);

  return (
    <Animated.View style={[styles.container, headerStyle]}>
      <Header>
        <Header.Action icon="arrow-back" onTap={() => {}} />
        <Header.Content title={counter.toString()} />
        <Header.Action icon="reply" onTap={() => {}} />
        <Header.Action icon="star" />
        <Header.Action icon="delete" onTap={handleClickDelete} />
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
