import { useRef } from "react";

interface Props {
  handleUserChatChange: (chat: string) => void;
}

export default function Footer({ handleUserChatChange }: Props) {
  const ref = useRef<HTMLInputElement>(null)
  const handleClick = (e: any) => {
    console.log(ref.current?.value);
    handleUserChatChange(ref.current?.value ?? "");
  };

  return (
    <footer className="bg-gray-200 h-20 fixed bottom-0 w-screen flex">
      <input
        type="text"
        id="question"
        name="question"
        placeholder="質問を入力してください"
        className="flex-5 my-auto h-10"
        ref={ref}
      ></input>
      <button
        type="submit"
        onClick={handleClick}
        className="bg-red-500 my-auto h-10 flex-1 rounded"
      >
        検索
      </button>
    </footer>
  );
}
