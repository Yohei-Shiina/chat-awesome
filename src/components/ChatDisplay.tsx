import React from "react";
import { Message } from "~/interfaces/Message";
import { ChatMessage } from "./ChatMessage";

type ChatDisplayProps = {
  messages: (Message & { id: number })[];
};

export const ChatDisplay = (props: ChatDisplayProps): JSX.Element => {
  return (
    <div className="chat-display">
      {props.messages.map((message) => {
        return (
          <ChatMessage
            key={message.id}
            id={message.id}
            sender={message.sender}
            message={message.message}
            timestamp={message.timestamp}
          />
        );
      })}
    </div>
  );
};
