import ChatBox from "@/features/components/ChatBox";
import Footer from "@/features/components/Footer";
import Header from "@/features/components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [chatValue, setChatValue] = useState<ChatValue[]>([]);

  useEffect(() => {
    setChatValue([
      {
        client: {
          chat: "こんにちは！よく寄せられる質問についてお答えいたします。\n\n下記の内容がよく質問されています。質問をクリックすると回答が表示されます。こちらを参考に質問してみてください。",
          button: ["講義情報", "学内情報", "学外情報", "学生間の交流場"],
        },
        user: undefined,
      },
    ]);
  }, []);

  const handleUserChatChange = (chat: string) => {
    chatValue[chatValue.length - 1].user = chat;
    setChatValue([...chatValue]);
  };

  return (
    <div>
      <Header />
      <ChatBox
        chatValue={chatValue}
        handleUserChatChange={handleUserChatChange}
      />
      <Footer handleUserChatChange={handleUserChatChange} />
    </div>
  );
}
