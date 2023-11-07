import { useEffect, useRef } from "react";
import ClientChat from "./ClientChat";
import UserChat from "./UserChat";
import ChatWaiting from "./ChatWaiting";

interface Props {
  chatValue: ChatValue[];
  handleUserChatChange: (chat: string, next_id: number) => void;
  setQuestionErrorFlag: (flag: boolean) => void;
  isAPIWaiting: boolean;
}

export default function ChatBox({
  chatValue,
  handleUserChatChange,
  setQuestionErrorFlag,
  isAPIWaiting,
}: Props) {
  const scrollBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollBottomRef?.current?.scrollIntoView();
  }, [chatValue]);

  return (
    <div>
      <div className="overflow-scroll min-h-BWHeaderFooter mt-12 mb-20">
        {chatValue.map((chatValue, index) => (
          <div key={index}>
            <ClientChat
              chat={chatValue.client.chat}
              button={chatValue.client.button ?? []}
              handleUserChatChange={handleUserChatChange}
              setQuestionErrorFlag={setQuestionErrorFlag}
              isAPIWaiting={isAPIWaiting}
            />
            {chatValue.user ? <UserChat chat={chatValue.user} /> : <></>}
          </div>
        ))}
        {isAPIWaiting ? (
          <ChatWaiting isAPIWaiting={isAPIWaiting} />
        ) : (
          <div></div>
        )}

        <div ref={scrollBottomRef}></div>
      </div>
    </div>
  );
}
