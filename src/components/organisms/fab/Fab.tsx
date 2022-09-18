import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { TabContextProps } from '../../../contexts';
import { colors } from '../../../themes';
import { Col, IconButton } from '../../atoms';

type Props = {
  context: TabContextProps;
};

export const Fab = React.memo(({ context }: Props) => {
  const homeFabIndex = useSharedValue(1);
  const statusFabIndex = useSharedValue(0);
  const callFabIndex = useSharedValue(0);

  const changeIndex = (index: number) => {
    'worklet';

    if (index === 0) {
      homeFabIndex.value = 1;
      statusFabIndex.value = 0;
      callFabIndex.value = 0;
    }
    if (index === 1) {
      statusFabIndex.value = 1;
      homeFabIndex.value = 0;
      callFabIndex.value = 0;
    }
    if (index === 2) {
      callFabIndex.value = 1;
      statusFabIndex.value = 0;
      homeFabIndex.value = 0;
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

  const callFabStyle = useAnimatedStyle(() => {
    return {
      zIndex: callFabIndex.value,
    };
  }, []);

  return (
    <Col pos="absolute" b={20} r={15}>
      <Animated.View style={[styles.fab, callFabStyle]}>
        <IconButton
          color="white"
          bg={colors.primary[400]}
          size={56}
          name="phone"
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
});
