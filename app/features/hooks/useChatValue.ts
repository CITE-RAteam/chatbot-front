import { useEffect, useState } from "react";
import axios from "axios";

export const useChatValue = () => {
  const [chatValue, setChatValue] = useState<ChatValue[]>([]);
  const [isAPIWaiting, setIsSPIWaiting] = useState<boolean>(false);

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
    setIsSPIWaiting(true);
    const url = "https://pokeapi.co/api/v2/pokemon/" + chat;
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        switch (error.response?.status) {
          case 422:
            return Promise.reject(error.response?.data);
          case 404:
            return Promise.reject(error.response?.data);
          case 500:
            return Promise.reject(error.response?.data);
          default:
            return Promise.reject(error.response?.data);
        }
      }
    );
    const response = await axios
      .get(url)
      .then((res) => res.data.name)
      .catch((error) => error);
    chatValue.push({
      client: { chat: response, button: undefined },
      user: undefined,
    });
    setIsSPIWaiting(false);
    setChatValue([...chatValue]);
  }

  return { chatValue, isAPIWaiting, setHandleUserChatChange };
};
