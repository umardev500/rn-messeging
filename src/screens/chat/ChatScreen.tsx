import React from 'react';
import { ImageBackground } from 'react-native';
import { Col } from '../../components/atoms';
import { ChatForm, ChatHeader, ChatList } from '../../components/organisms';

export const ChatScreen: React.FC = () => {
  return (
    <Col flex={1} bg="white">
      <ChatHeader />
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../../../assets/images/background/wa-bg.png')}
      >
        <ChatList />
        <ChatForm />
      </ImageBackground>
    </Col>
  );
};
