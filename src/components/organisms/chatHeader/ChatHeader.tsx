import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Header } from '../header';

export const ChatHeader: React.FC = () => {
  const navigation = useNavigation();

  const handleBack = useCallback(() => {
    if (navigation.canGoBack()) navigation.goBack();
  }, []);

  return (
    <Header>
      <Header.Action onTap={handleBack} icon="arrow-back" />
      <Header.Content
        avatar={require('../../../../assets/avatars/brian-hughes.jpg')}
        title="Steve"
      />
      <Header.Action icon="videocam" />
      <Header.Action icon="phone" iconSize={22} />
      <Header.Action icon="more-vert" />
    </Header>
  );
};
