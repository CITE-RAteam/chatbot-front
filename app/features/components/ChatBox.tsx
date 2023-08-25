import ClientChat from "./ClientChat";

interface Props {
  chatValue: ChatValue[];
  handleUserChatChange: (chat: string) => void;
}

export default function ChatBox({ chatValue, handleUserChatChange }: Props) {
  return (
    <div className="overflow-scroll min-h-BWHeaderFooter">
      {chatValue.map((chatValue, index) => (
        <ClientChat
          chat={chatValue.client.chat}
          button={chatValue.client.button ?? []}
          handleUserChatChange={handleUserChatChange}
          key={index}
        />
      ))}
    </div>
  );
}
