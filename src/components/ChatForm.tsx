import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

interface ChatFormProps {
  onSendMessage: (string: string) => void;
}
export const ChatForm: React.FC<ChatFormProps> = (props): JSX.Element => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!message) {
      return;
    }
    props.onSendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Type your message here..."
      />
      <Button type="submit" colorScheme="blue">
        Button
      </Button>
    </form>
  );
};
