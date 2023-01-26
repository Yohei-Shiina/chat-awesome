import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { Message } from "~/interfaces/Message";
import { ChatForm } from "./ChatForm";
import { ChatMessage } from "./ChatMessage";

interface ChatDisplayProps {
  messages: Message[];
}

export const ChatDisplay = (props: ChatDisplayProps): JSX.Element => {
  const { messages: initialMessages } = props;
  const { data: session } = useSession();

  const [chatMessages, setChatMessages] = useState(initialMessages);

  const onSendMessage = (message: string) => {
    const sender = session?.user?.name || "Stranger";

    const newMessage = {
      sender: sender,
      message: message,
      timestamp: new Date().toString(),
    };
    setChatMessages([...chatMessages, newMessage]);
  };

  return (
    <div className="chat-display">
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
      <ChatForm onSendMessage={onSendMessage} />
    </div>
  );
};
