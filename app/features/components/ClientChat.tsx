import ClientButton from "./ClientButton";

interface Props {
  chat: string;
  button: ButtonValue[];
  handleUserChatChange: (chat: string, next_id: number) => void;
  setQuestionErrorFlag: (flag: boolean) => void;
  isAPIWaiting: boolean
}

export default function ClientChat({
  chat,
  button,
  handleUserChatChange,
  setQuestionErrorFlag,
  isAPIWaiting,
}: Props) {
  return (
    <div className="bg-gray-200 h-auto max-h-96 w-80 p-1 my-4 whitespace-pre-wrap overflow-scroll rounded">
      {chat}
      <div className="flex-col">
        {button.map((button, index) => (
          <ClientButton
            button={button}
            handleUserChatChange={handleUserChatChange}
            key={index}
            setQuestionErrorFlag={setQuestionErrorFlag}
            isAPIWaiting={isAPIWaiting}
          />
        ))}
      </div>
    </div>
  );
}
