import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from '../../atoms';

type Props = {
  icon: string;
  size?: number;
  iconSize?: number;
  onTap?: () => void;
};

export const HeaderAction: React.FC<Props> = ({
  icon,
  size = 35,
  iconSize = 24,
  onTap,
}) => {
  return (
    <View style={styles.container}>
      <IconButton
        onTap={onTap}
        name={icon}
        size={size}
        iconSize={iconSize}
        color="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
});
