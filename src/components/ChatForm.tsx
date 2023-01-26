import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";

interface ChatFormProps {
  onSendMessage: (string: string) => void;
}
export const ChatForm: React.FC<ChatFormProps> = (props): JSX.Element => {
  const [message, setMessage] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && event.metaKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };
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
      <Textarea
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Type your message"
        size="sm"
        onKeyDown={handleKeyPress}
      />
    </form>
  );
};
