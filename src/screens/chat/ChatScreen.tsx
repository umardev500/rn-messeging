import React from 'react';
import { ImageBackground } from 'react-native';
import { Col } from '../../components/atoms';
import {
  ChatForm,
  ChatHeader,
  ChatHeaderSelection,
  ChatList,
} from '../../components/organisms';
import { ChatProvider } from '../../providers';

export const ChatScreen: React.FC = () => {
  return (
    <ChatProvider>
      <Col flex={1} bg="white">
        <ChatHeaderSelection />
        <ChatHeader />
        <ImageBackground
          style={{ flex: 1 }}
          source={require('../../../assets/images/background/wa-bg.png')}
        >
          <ChatList />
          <ChatForm />
        </ImageBackground>
      </Col>
    </ChatProvider>
  );
};
