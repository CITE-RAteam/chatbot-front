import { useEffect, useState } from "react";
import useInterval from "../hooks/useInterval";

interface Props {
  isAPIWaiting: boolean;
}

export default function ChatWaiting({ isAPIWaiting }: Props) {
  const [waitingChatTarget, setWaitingChatTarget] = useState<number>(0);
  const [waitingChat, setWaitingChat] = useState<string>("•..");

  useEffect(() => {
    if (!isAPIWaiting) {
      setWaitingChatTarget(0);
    }
  }, [isAPIWaiting]);

  useInterval(
    () => {
      if (waitingChatTarget < 2) {
        setWaitingChatTarget(waitingChatTarget + 1);
      } else {
        setWaitingChatTarget(0);
      }
      const defaultChat = "...";
      setWaitingChat(
        defaultChat.substring(0, waitingChatTarget) +
          "•" +
          defaultChat.substring(waitingChatTarget + 1)
      );
    },
    isAPIWaiting ? 500 : null
  );

  return (
    <div className="bg-gray-200 h-auto max-h-96 w-8 p-1 my-4 whitespace-pre-wrap rounded">
      {waitingChat}
    </div>
  );
}
