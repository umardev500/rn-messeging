import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { Col } from '../../components/atoms';
import { ChatForm, ChatHeader, ChatList } from '../../components/organisms';

export const ChatScreen: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 50);
  }, []);

  return (
    <Col flex={1} bg="white">
      <ChatHeader />
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../../../assets/images/background/wa-bg.png')}
      >
        {loaded ? (
          <>
            <ChatList />
            <ChatForm />
          </>
        ) : null}
      </ImageBackground>
    </Col>
  );
};
