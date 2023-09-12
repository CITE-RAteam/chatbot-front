import ChatBox from "@/features/components/ChatBox";
import Footer from "@/features/components/Footer";
import Header from "@/features/components/Header";
import { useChatValue } from "@/features/hooks/useChatValue";
import { useQuestionError } from "@/features/hooks/useQuestionError";

export default function Home() {
  const { chatValue, setHandleUserChatChange } = useChatValue();
  const { questionError, setQuestionErrorFlag } = useQuestionError();

  return (
    <div>
      <Header />
      <ChatBox
        chatValue={chatValue}
        handleUserChatChange={setHandleUserChatChange}
        setQuestionErrorFlag={setQuestionErrorFlag}
      />
      <Footer
        handleUserChatChange={setHandleUserChatChange}
        questionError={questionError}
        setQuestionErrorFlag={setQuestionErrorFlag}
      />
    </div>
  );
}
