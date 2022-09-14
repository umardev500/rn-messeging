import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../../themes';
import { Box, Col, Row, Text } from '../../atoms';

export const ChatReplyCard: React.FC = () => {
  return (
    <Row bg="white" flex={1} style={styles.container}>
      <Box style={styles.border} ml={8} w={4} mt={8} bg={colors.primary[500]} />
      <Row
        style={styles.inner}
        flex={1}
        mt={8}
        mr={8}
        mb={0}
        p={8}
        bg="rgba(0, 0, 0, .04)"
      >
        <Col>
          <Text fz={14} ff="Roboto-Medium" color={colors.primary[500]}>
            Jack
          </Text>
          <Text color="#6b767f">Yes you can do it.</Text>
        </Col>
      </Row>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 12.5,
    borderTopLeftRadius: 12.5,
  },
  inner: {
    borderTopRightRadius: 6.25,
    borderBottomRightRadius: 6.25,
  },
  border: {
    borderTopLeftRadius: 6.25,
    borderBottomLeftRadius: 6.25,
  },
});
