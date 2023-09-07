import ChatBox from "@/features/components/ChatBox";
import Footer from "@/features/components/Footer";
import Header from "@/features/components/Header";
import { useChatValue } from "@/features/hooks/useChatValue";
import { useEffect, useState } from "react";

export default function Home() {

  const {chatValue, setHandleUserChatChange} = useChatValue();

  return (
    <div>
      <Header />
      <ChatBox
        chatValue={chatValue}
        handleUserChatChange={setHandleUserChatChange}
      />
      <Footer handleUserChatChange={setHandleUserChatChange} />
    </div>
  );
}
