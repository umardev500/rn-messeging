import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from '../header';

export const MainHeader = React.memo(() => {
  return (
    <Header>
      <Header.Content
        containerStyle={styles.contenteContainer}
        title="Messenger"
      />
      <Header.Action icon="search" />
      <Header.Action icon="more-vert" />
    </Header>
  );
});

const styles = StyleSheet.create({
  contenteContainer: {
    paddingLeft: 15,
  },
});
