import ClientButton from "./ClientButton";

interface Props {
  chat: string;
  button: string[];
  handleUserChatChange: (chat: string) => void;
}

export default function ClientChat({
  chat,
  button,
  handleUserChatChange,
}: Props) {
  return (
    <div className="bg-gray-200 h-auto max-h-96 w-80 p-1 whitespace-pre-wrap overflow-scroll rounded">
      {chat}
      <div className="flex-col">
        {button.map((text, index) => (
          <ClientButton
            text={text}
            handleUserChatChange={handleUserChatChange}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
