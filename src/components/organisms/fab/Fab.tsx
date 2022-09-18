import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { TabContextProps } from '../../../contexts';
import { colors } from '../../../themes';
import { Col, IconButton } from '../../atoms';

type Props = {
  context: TabContextProps;
};

const STATUS_TEXT_FAB_DUR = 100;

export const Fab = React.memo(({ context }: Props) => {
  const homeFabIndex = useSharedValue(1);
  const statusFabIndex = useSharedValue(0);
  const callFabIndex = useSharedValue(0);
  const textTabTranslateY = useSharedValue(0);
  const textFabOpacity = useSharedValue(0);

  const changeIndex = (index: number) => {
    'worklet';

    if (index === 0) {
      homeFabIndex.value = 1;
      statusFabIndex.value = 0;
      callFabIndex.value = 0;
      textTabTranslateY.value = withTiming(0, {
        duration: STATUS_TEXT_FAB_DUR,
      });
      textFabOpacity.value = withTiming(0, { duration: STATUS_TEXT_FAB_DUR });
    }
    if (index === 1) {
      statusFabIndex.value = 1;
      homeFabIndex.value = 0;
      callFabIndex.value = 0;
      textTabTranslateY.value = withTiming(-56, {
        duration: STATUS_TEXT_FAB_DUR,
      });
      textFabOpacity.value = withTiming(1, { duration: STATUS_TEXT_FAB_DUR });
    }
    if (index === 2) {
      callFabIndex.value = 1;
      statusFabIndex.value = 0;
      homeFabIndex.value = 0;
      textTabTranslateY.value = withTiming(0, {
        duration: STATUS_TEXT_FAB_DUR,
      });
      textFabOpacity.value = withTiming(0, { duration: STATUS_TEXT_FAB_DUR });
    }
  };

  useDerivedValue(() => {
    changeIndex(context.index.value);
  });

  const homeFabStyle = useAnimatedStyle(() => {
    return {
      zIndex: homeFabIndex.value,
    };
  }, []);

  const statusFabStyle = useAnimatedStyle(() => {
    return {
      zIndex: statusFabIndex.value,
    };
  }, []);

  const statusTextFabStyle = useAnimatedStyle(() => {
    return {
      opacity: textFabOpacity.value,
      transform: [
        {
          translateY: textTabTranslateY.value,
        },
      ],
    };
  }, []);

  const callFabStyle = useAnimatedStyle(() => {
    return {
      zIndex: callFabIndex.value,
    };
  }, []);

  return (
    <Col pos="absolute" ai="center" b={20} r={15}>
      <Animated.View style={[styles.fab, callFabStyle]}>
        <IconButton
          color="white"
          bg={colors.primary[400]}
          size={56}
          name="phone"
        />
      </Animated.View>

      <Animated.View style={[styles.fab, statusTextFabStyle]}>
        <IconButton
          color="#6b767f"
          bg="#eee"
          size={45}
          elevation={8}
          name="edit"
        />
      </Animated.View>

      <Animated.View style={[styles.fab, statusFabStyle]}>
        <IconButton
          color="white"
          bg={colors.primary[400]}
          size={56}
          elevation={8}
          name="camera-alt"
        />
      </Animated.View>

      <Animated.View style={[homeFabStyle]}>
        <IconButton
          color="white"
          bg={colors.primary[400]}
          size={56}
          name="chat"
        />
      </Animated.View>
    </Col>
  );
});

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
  },
  edit: {},
});
