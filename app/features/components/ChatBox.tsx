import ClientChat from "./ClientChat";
import UserChat from "./UserChat";

interface Props {
  chatValue: ChatValue[];
  handleUserChatChange: (chat: string) => void;
}

export default function ChatBox({ chatValue, handleUserChatChange }: Props) {
  return (
  <div>
    <div className="overflow-scroll min-h-BWHeaderFooter mt-12 mb-20">
      {chatValue.map((chatValue, index) => (
        <div>
          <ClientChat
            chat={chatValue.client.chat}
            button={chatValue.client.button ?? []}
            handleUserChatChange={handleUserChatChange}
            key={index}
          />
          {chatValue.user ? (
            <UserChat
              chat={chatValue.user}
            />
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}
