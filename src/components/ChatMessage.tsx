import React from "react";
import { Message } from "~/interfaces/Message";
import { Box, Flex, Text } from "@chakra-ui/react";

export const ChatMessage = (props: Message): JSX.Element => {
  const { sender, message, timestamp } = props;
  return (
    <Box p={2} mb={4} rounded="lg" bg="gray.50">
      <Flex align="center">
        <Text fontWeight="medium" mr={2}>
          {sender}:
        </Text>
        <Text>{message}</Text>
        <Text fontSize="sm" ml={4} color="gray.500">
          {timestamp}
        </Text>
      </Flex>
    </Box>
  );
};
