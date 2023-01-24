import { NextPage } from "next";
import { ChatDisplay } from "~/components/ChatDisplay";
import { Message } from "~/interfaces/Message";

interface Props {
  messages: Message[];
}

const Chat: NextPage<Props> = ({ messages }) => {
  return (
    <div>
      <ChatDisplay messages={messages} />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const messages = [
    {
      id: 1,
      sender: "Stranger",
      message: "Hello World",
      timestamp: "2023/1/24/23:52",
    },
    {
      id: 2,
      sender: "Stranger",
      message: "This chat is awesome!",
      timestamp: "2023/1/24/23:52",
    },
    {
      id: 3,
      sender: "Founder",
      message: "This is the future",
      timestamp: "2023/1/25/00:00",
    },
  ];

  return {
    props: {
      messages,
    },
  };
}

export default Chat;
