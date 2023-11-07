import { useRef, useState } from "react";

interface Props {
  handleUserChatChange: (chat: string, next_id: number) => void;
  questionError: boolean;
  setQuestionErrorFlag: (flag: boolean) => void
}

export default function Footer({ handleUserChatChange, questionError, setQuestionErrorFlag }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isComposing, setComposing] = useState(false);
  const handleClick = (e: any) => {
    if (inputRef.current?.value == "") {
      setQuestionErrorFlag(true)
    } else {
      setQuestionErrorFlag(false)
      handleUserChatChange(inputRef.current?.value ?? "",2000);
    }
  };

  const onKeyDownHandler = (e: any) => {
    if (e.key === 'Enter' && !isComposing) {
      handleClick(e)
    }
  };
  return (
    <footer className="bg-gray-200 h-20 fixed bottom-0 w-screen">
      {questionError ?
      <div
        className={[
          "whitespace-nowrap",
          "rounded",
          "bg-black",
          "px-2",
          "py-1",
          "text-white",
          "absolute",
          "-top-6",
          "left-1/2",
          "-translate-x-1/2",
          "before:content-['']",
          "before:absolute",
          "before:-translate-x-1/2",
          "before:left-1/2",
          "before:top-full",
          "before:border-4",
          "before:border-transparent",
          "before:border-t-black",
        ].join(" ")}
      >
        質問は1文字以上入力してください
      </div>
      :<div></div>}
      <div className="my-5 flex h-10">
        <input
          type="text"
          id="question"
          name="question"
          placeholder="質問を入力してください"
          className="flex-5"
          ref={inputRef}
          onKeyDown={onKeyDownHandler}
          onCompositionStart={() => setComposing(true)}
          onCompositionEnd={() => setComposing(false)}
        ></input>
        <button
          type="submit"
          onClick={handleClick}
          className="bg-red-500 flex-1 rounded"
        >
          検索
        </button>
      </div>
    </footer>
  );
}
