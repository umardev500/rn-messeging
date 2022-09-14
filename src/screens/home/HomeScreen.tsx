import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ChatUserList } from '../../components/organisms';

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ChatUserList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
