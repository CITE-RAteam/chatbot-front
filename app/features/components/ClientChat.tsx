import ClientButton from "./ClientButton";

interface Props {
  chat: string;
  button: string[];
  handleUserChatChange: (chat: string) => void;
  setQuestionErrorFlag: (flag: boolean) => void;
}

export default function ClientChat({
  chat,
  button,
  handleUserChatChange,
  setQuestionErrorFlag,
}: Props) {
  return (
    <div className="bg-gray-200 h-auto max-h-96 w-80 p-1 my-4 whitespace-pre-wrap overflow-scroll rounded">
      {chat}
      <div className="flex-col">
        {button.map((text, index) => (
          <ClientButton
            text={text}
            handleUserChatChange={handleUserChatChange}
            key={index}
            setQuestionErrorFlag={setQuestionErrorFlag}
          />
        ))}
      </div>
    </div>
  );
}
