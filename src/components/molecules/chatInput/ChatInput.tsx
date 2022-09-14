import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { IconButton } from '../../atoms';

export const ChatInput: React.FC = () => {
  return (
    <>
      <IconButton
        style={styles.emojiBtn}
        name="insert-emoticon"
        bg="white"
        size={50}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#666"
        placeholder="Message"
        multiline
      />
      <IconButton
        style={styles.attachment}
        name="insert-link"
        bg="white"
        size={50}
        iconSize={25}
      />
    </>
  );
};

const styles = StyleSheet.create({
  emojiBtn: {
    position: 'absolute',
    zIndex: 90,
    bottom: 0,
    left: 0,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    minHeight: 50,
    borderRadius: 25,
    fontSize: 16,
    color: '#444',
    paddingLeft: 50,
  },
  attachment: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
});
