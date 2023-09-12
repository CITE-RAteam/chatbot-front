import { useEffect, useRef } from "react";
import ClientChat from "./ClientChat";
import UserChat from "./UserChat";

interface Props {
  chatValue: ChatValue[];
  handleUserChatChange: (chat: string) => void;
}

export default function ChatBox({ chatValue, handleUserChatChange }: Props) {

  const scrollBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollBottomRef?.current?.scrollIntoView();
  },[chatValue])

  return (
  <div>
    <div className="overflow-scroll min-h-BWHeaderFooter mt-12 mb-20">
      {chatValue.map((chatValue, index) => (
        <div key={index}>
          <ClientChat
            chat={chatValue.client.chat}
            button={chatValue.client.button ?? []}
            handleUserChatChange={handleUserChatChange}
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
      <div ref={scrollBottomRef}></div>
    </div>
    </div>
  );
}
