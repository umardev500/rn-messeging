import React from 'react';
import { colors } from '../../../themes';
import { Col, IconButton, Row } from '../../atoms';
import { ChatInput, ChatReplyCard } from '../../molecules';

export const ChatForm: React.FC = () => {
  return (
    <Row
      pos="absolute"
      zIndex={0}
      ph={5}
      pb={5}
      b={0}
      l={0}
      r={0}
      ai="flex-end"
    >
      <Col flex={1} bg="white" minH={50} br={25} el={1}>
        <ChatReplyCard />
        <ChatInput />
      </Col>
      <IconButton
        style={{ marginLeft: 8 }}
        name="mic"
        bg={colors.primary[500]}
        size={50}
        color="white"
      />
    </Row>
  );
};
