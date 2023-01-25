import React from "react";
import { Message } from "~/interfaces/Message";

export const ChatMessage = (props: Message): JSX.Element => {
  return (
    <li className="chat-message">
      <div className="sender">{props.sender}</div>
      <div className="message">{props.message}</div>
      <div className="timestamp">{props.timestamp}</div>
    </li>
  );
};
