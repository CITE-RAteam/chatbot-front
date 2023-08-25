import ChatBox from "@/features/components/ChatBox";
import Footer from "@/features/components/Footer";
import Header from "@/features/components/Header";
import { useState } from "react";

export default function Home() {
  const [userChat, setUserChat] = useState("");

  const handleUserChatChange = (chat: string) => {
    setUserChat(chat);
  };

  return (
    <div>
      <Header />
      <ChatBox
        userChat={userChat}
        handleUserChatChange={handleUserChatChange}
      />
      <Footer handleUserChatChange={handleUserChatChange} />
    </div>
  );
}
