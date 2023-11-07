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
          button: [
            { choice_id: 1000, choice_text: "講義情報" },
            { choice_id: 2000, choice_text: "学内情報" },
            { choice_id: 2001, choice_text: "学外情報" },
            { choice_id: 2002, choice_text: "学生間の交流場" },
          ],
        },
        user: undefined,
      },
    ]);
  }, []);

  async function setHandleUserChatChange(chat: string, next_id: number) {
    console.log("next_id:",next_id)
    chatValue[chatValue.length - 1].user = chat;
    setChatValue([...chatValue]);
    setIsSPIWaiting(true);
    const url = process.env.NEXT_PUBLIC_APIURL ?? "";
    const response = await axios
      .post(url, { question_id: next_id })
      .then((res) => res)
      .catch((error) => error);
    console.log(response.data.next_choices);
    chatValue.push({
      client: {
        chat: response.data.free_response,
        button: response.data.next_choices ? response.data.next_choices : undefined,
      },
      user: undefined,
    });
    setIsSPIWaiting(false);
    setChatValue([...chatValue]);
  }

  return { chatValue, isAPIWaiting, setHandleUserChatChange };
};
