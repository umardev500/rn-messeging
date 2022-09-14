import React, { useCallback, useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnUI,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ChatContext, ChatContextProps } from '../../../contexts';
import { colors } from '../../../themes';
import { IconButton, Text } from '../../atoms';

export type ChatListItem = {
  id: number;
  username: string;
  text: string;
};

type Props = ChatListItem & {
  prev?: boolean;
};

const MAX_TRANSLATE_X = 65;
const MIN_TRANSLATE_X = 65;
const REPLY_BTN_SIZE = 30;

export const ChatListing: React.FC<Props> = ({ id, username, text, prev }) => {
  const overlayOpacity = useSharedValue<number>(0);
  const selected = useSharedValue<boolean>(false);
  const deleted = useSharedValue<boolean>(false);
  const translateX = useSharedValue<number>(0);
  const replyTranslateX = useSharedValue<number>(0);
  const context = useContext(ChatContext) as ChatContextProps;

  // style for chat translation
  const chatCardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  // reply button reanimated style
  const replyBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: replyTranslateX.value,
        },
      ],
    };
  });

  // overlay reanimated style
  const overlayStyle = useAnimatedStyle(() => {
    return {
      opacity: overlayOpacity.value,
    };
  });

  // reanimated style for hidding chat card
  const chatCardDeletedStyle = useAnimatedStyle(() => {
    if (deleted.value)
      return {
        opacity: 0,
        height: 0,
        marginTop: 0,
        paddingTop: 0,
        paddingBottom: 0,
      };

    return {};
  });

  // reply handler
  const handleReply = () => {
    'worklet';

    // set data to context
    context.replyItem.value = [{ id, username, text }];
  };

  // card gesture event
  const panGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive: e => {
        translateX.value = e.translationX;

        // check maximum translation for reply button
        const replyShouldBeStop = e.translationX <= MAX_TRANSLATE_X;
        if (replyShouldBeStop) {
          // value will folow current translation
          replyTranslateX.value = e.translationX;
        } else if (replyTranslateX.value < MIN_TRANSLATE_X) {
          // fix reply button leaved on speed swipe
          replyTranslateX.value = MIN_TRANSLATE_X;
        }
      },
      onEnd: () => {
        if (translateX.value >= MIN_TRANSLATE_X) {
          handleReply();
        }
        translateX.value = withTiming(0);
        replyTranslateX.value = withTiming(0);
      },
    });

  // handler for activated selection
  const activatedSelection = () => {
    'worklet';

    selected.value = true; // activate selected state
    overlayOpacity.value = 0.3; // show overlay

    // add to selected items context
    context.selectedItems.value = [
      ...context.selectedItems.value,
      {
        id,
        username,
        text,
      },
    ];
  };

  // long press handler
  const handleLongPress = useCallback(() => {
    if (!selected.value) {
      runOnUI(activatedSelection)();
    }
  }, []);

  // handler for non-activated selection
  const nonActivatedSelection = () => {
    'worklet';

    selected.value = false;
    overlayOpacity.value = 0;

    // find all selected items
    // except this item
    const newSelectedItems = context.selectedItems.value.filter(
      item => item.id !== id
    );

    // change value of selected items with new data items
    context.selectedItems.value = newSelectedItems;
  };

  // press handler for activate selected item
  // otherwise depending by state itself
  const handlePress = useCallback(() => {
    if (selected.value) {
      // will be non-activated if selected state is true
      runOnUI(nonActivatedSelection)();
    } else if (!selected.value && context.selectedItems.value.length > 0) {
      // will be activated if selection is one
      // indicated by length of selected items more thean 0
      runOnUI(activatedSelection)();
    }
  }, []);

  const deleteItem = () => {
    'worklet';

    context.deletedCount.value += 1; // push to deleted count
    deleted.value = true; // will triger deleted style
    selected.value = false; // make selected to false to make not fall inside this again
  };

  // listening for data
  useDerivedValue(() => {
    const data = context.deletedItems.value.filter(item => item.id === id);
    if (data.length > 0) {
      deleteItem();
    }
  }, []);

  // reset selected
  const resetSelected = () => {
    'worklet';

    if (selected.value) {
      nonActivatedSelection();
    }
  };

  // listening for selected items
  useDerivedValue(() => {
    if (context.selectedItems.value.length < 1 && selected.value) {
      resetSelected();
    }
  }, []);

  return (
    <Pressable onPress={handlePress} onLongPress={handleLongPress}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View
          style={[
            styles.wrapper,
            prev ? styles.prevWrapper : undefined,
            chatCardDeletedStyle,
          ]}
        >
          <Animated.View
            style={[
              styles.container,
              chatCardStyle,
              username === 'umar' ? styles.selfContainer : undefined,
            ]}
          >
            <Animated.View
              style={[
                styles.inner,
                username === 'umar' ? styles.selfInner : undefined,
              ]}
            >
              <Text fz={16} color="#444" ph={10}>
                {text}
                <Text color="transparent">7:20 PM</Text>
              </Text>
              <Text pos="absolute" r={10} b={2} fz={12} color="#6b767f">
                7:20 PM
              </Text>
            </Animated.View>
          </Animated.View>

          <Animated.View style={[styles.reply, replyBtnStyle]}>
            <IconButton
              name="reply"
              size={REPLY_BTN_SIZE}
              bg="#aaa"
              color="white"
            />
          </Animated.View>

          <Animated.View style={[styles.overlay, overlayStyle]} />
        </Animated.View>
      </PanGestureHandler>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 2,
    paddingBottom: 2,
  },
  prevWrapper: {
    marginTop: 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selfContainer: {
    justifyContent: 'flex-end',
  },
  inner: {
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 6,
    borderRadius: 10,
    justifyContent: 'flex-end',
    maxWidth: '90%',
  },
  selfInner: {
    backgroundColor: '#e7ffdb',
  },
  overlay: {
    backgroundColor: colors.primary[500],
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  prevOverlay: {
    top: 0,
  },
  reply: {
    position: 'absolute',
    left: -(MIN_TRANSLATE_X - 20),
  },
});
