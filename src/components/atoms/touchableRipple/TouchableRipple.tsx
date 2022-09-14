import React from 'react';
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  children?: React.ReactNode;
  borderRadius?: number;
  onTap?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const TouchableRipple: React.FC<Props> = ({
  children,
  borderRadius,
  onTap,
  style,
}) => {
  const circleRadius = useSharedValue(0);
  const clickY = useSharedValue(0);
  const clickX = useSharedValue(0);
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const bgRippleOpacity = useSharedValue(0);
  const animDuration = 500;

  const handleLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;

    circleRadius.value = Math.sqrt(width ** 2 + height ** 2);
  };

  const handleTap = () => {
    if (onTap) onTap();
  };

  const tapGestureEvent =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onStart: e => {
        clickY.value = e.y - circleRadius.value;
        clickX.value = e.x - circleRadius.value;

        scale.value = 0;
        opacity.value = 0.2;
      },
      onActive: () => {
        scale.value = withTiming(1, { duration: animDuration });
        bgRippleOpacity.value = withTiming(1, { duration: animDuration });
      },
      onEnd: () => {
        opacity.value = withTiming(0, { duration: animDuration });
        bgRippleOpacity.value = withDelay(
          animDuration / 2,
          withTiming(0, { duration: animDuration * 2 })
        );

        runOnJS(handleTap)();
      },
    });

  const rippleStyle = useAnimatedStyle(() => {
    return {
      width: circleRadius.value * 2,
      height: circleRadius.value * 2,
      borderRadius: circleRadius.value,
      opacity: opacity.value,
      transform: [
        {
          translateX: clickX.value,
        },
        {
          translateY: clickY.value,
        },
        {
          scale: scale.value,
        },
      ],
    };
  });

  const rippleBgStyle = useAnimatedStyle(() => {
    return {
      opacity: bgRippleOpacity.value,
    };
  });

  return (
    <TapGestureHandler onGestureEvent={tapGestureEvent}>
      <Animated.View style={[{ borderRadius }, style]}>
        <Animated.View
          style={[styles.container, { borderRadius }]}
          onLayout={handleLayout}
        >
          {children}
          <Animated.View style={[styles.ripple, rippleStyle]} />
        </Animated.View>
        <Animated.View
          style={[styles.bgRipple, rippleBgStyle, { borderRadius }]}
        />
      </Animated.View>
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  ripple: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, .5)',
    zIndex: 1,
  },
  bgRipple: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .4)',
  },
});
