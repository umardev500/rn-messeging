import React, { useContext, useState } from 'react';
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ChatContext, ChatContextProps } from '../../../contexts';
import { colors } from '../../../themes';
import { Box, Col, Row, Text } from '../../atoms';
import { ChatListItem } from '../chatListing';

const NUMBER_OF_LINES = 2;

type CardProps = {
  style?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
  context: ChatContextProps;
} & ViewProps;

const Card: React.FC<CardProps> = ({ style, context, ...props }) => {
  const [item, setItem] = useState<ChatListItem | null>(null);

  useDerivedValue(() => {
    console.log('context');
    if (context.replyItem.value.length > 0) {
      runOnJS(setItem)(context.replyItem.value[0]);
    }
  }, []);

  return (
    <Animated.View style={[styles.container, style]} {...props}>
      <Box style={styles.border} ml={8} w={4} mt={8} bg={colors.primary[500]} />
      <Row
        style={styles.inner}
        flex={1}
        mt={8}
        mr={8}
        mb={0}
        p={8}
        bg="rgba(0, 0, 0, .04)"
      >
        <Col>
          <Text fz={14} ff="Roboto-Medium" color={colors.primary[500]}>
            {item?.username}
          </Text>
          <Text color="#6b767f" numberOfLines={NUMBER_OF_LINES}>
            {item?.text}
          </Text>
        </Col>
      </Row>
    </Animated.View>
  );
};

export const ChatReplyCard: React.FC = () => {
  const context = useContext(ChatContext) as ChatContextProps;
  const replyStatus = useSharedValue<boolean>(false);
  const cardHeight = useSharedValue<number>(0);
  const cardOverlayHeight = useSharedValue<number>(0);

  // show reply card
  const showCard = () => {
    replyStatus.value = true;
    cardHeight.value = withTiming(cardOverlayHeight.value);
  };

  useDerivedValue(() => {
    const replyData = context.replyItem.value;
    const replyDataSize = replyData.length;

    if (replyDataSize > 0) {
      console.log('more then zero');
      runOnJS(showCard)();
    }
  });

  // reanimated style for reply card
  const cardStyle = useAnimatedStyle(() => {
    return {
      height: cardHeight.value,
    };
  });

  // measure overlay height
  const handleLayout = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;
    cardOverlayHeight.value = height;

    if (replyStatus.value) {
      cardHeight.value = withTiming(height);
    }
  };

  return (
    <>
      <Card
        context={context}
        onLayout={handleLayout}
        style={styles.overlayContainer}
      />
      <Card context={context} style={cardStyle} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 12.5,
    borderTopLeftRadius: 12.5,
  },
  inner: {
    borderTopRightRadius: 6.25,
    borderBottomRightRadius: 6.25,
  },
  border: {
    borderTopLeftRadius: 6.25,
    borderBottomLeftRadius: 6.25,
  },
  overlayContainer: {
    position: 'absolute',
    opacity: 0,
  },
});
