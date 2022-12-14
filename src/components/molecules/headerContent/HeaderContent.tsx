import React from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { Avatar } from '../../atoms';

type Props = {
  fz?: number;
  title: string;
  avatar?: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
};

export const HeaderContent: React.FC<Props> = ({
  fz = 20,
  title,
  avatar,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {avatar ? (
        <Avatar width={38} height={38} style={styles.avatar} source={avatar} />
      ) : null}

      <View>
        <Text style={[styles.title, { fontSize: fz }]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  title: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
  },
  avatar: {
    marginRight: 10,
  },
});
