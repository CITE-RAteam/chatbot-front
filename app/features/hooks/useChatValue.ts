import { useEffect, useState } from "react";
import axios from "axios";

export const useChatValue = () => {
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

  async function setHandleUserChatChange(chat: string) {
    chatValue[chatValue.length - 1].user = chat;
    setChatValue([...chatValue]);
    const url = "https://pokeapi.co/api/v2/pokemon/" + chat;
    const response = await axios.get(url).then((res) => res.data);
    chatValue.push({
      client: { chat: response.name, button: undefined },
      user: undefined,
    });
    setChatValue([...chatValue]);
  }

  return { chatValue, setHandleUserChatChange };
};
