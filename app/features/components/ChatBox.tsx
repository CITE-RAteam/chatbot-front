import ClientChat from "./ClientChat";

interface Props {
  userChat: string;
  handleUserChatChange: (chat: string) => void;
}

interface ChatValue {
    client: {chat: string, button: string[]|undefined};
    user: string;
}

export default function ChatBox({ userChat, handleUserChatChange }: Props) {
  return (
    <div className="overflow-scroll min-h-BWHeaderFooter">
      <ClientChat handleUserChatChange={handleUserChatChange} />
      {userChat}
    </div>
  );
}
