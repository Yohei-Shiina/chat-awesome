import React, { useState } from "react";
import { Message } from "~/interfaces/Message";
import { ChatForm } from "./ChatForm";
import { ChatMessage } from "./ChatMessage";

interface ChatDisplayProps {
  messages: Message[];
}

export const ChatDisplay = (props: ChatDisplayProps): JSX.Element => {
  const { messages: initialMessages } = props;

  const [chatMessages, setChatMessages] = useState(initialMessages);

  const onSendMessage = (message: string) => {
    const newMessage = {
      sender: "Stranger",
      message: message,
      timestamp: new Date().toString(),
    };
    setChatMessages([...chatMessages, newMessage]);
  };

  return (
    <div className="chat-display">
      <ul>
        {chatMessages.map((message, index) => {
          return (
            <ChatMessage
              key={index} // Temporary key
              sender={message.sender}
              message={message.message}
              timestamp={message.timestamp}
            />
          );
        })}
      </ul>
      <ChatForm onSendMessage={onSendMessage} />;
    </div>
  );
};
