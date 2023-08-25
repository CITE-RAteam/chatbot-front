import ClientButton from "./ClientButton";

interface Props {
  handleUserChatChange: (chat: string) => void;
}

export default function ClientChat({ handleUserChatChange }: Props) {
  const text: string =
    "こんにちは！よく寄せられる質問についてお答えいたします。\n\n下記の内容がよく質問されています。質問をクリックすると回答が表示されます。こちらを参考に質問してみてください。";
  const button_text: string[] = [
    "講義情報",
    "学内情報",
    "学外情報",
    "学生間の交流場",
  ];
  return (
    <div className="bg-gray-200 h-auto max-h-96 w-80 whitespace-pre-wrap overflow-scroll rounded">
      {text}
      <div className="flex-col">
        {button_text.map((text) => (
          <ClientButton
            text={text}
            handleUserChatChange={handleUserChatChange}
          />
        ))}
      </div>
    </div>
  );
}
