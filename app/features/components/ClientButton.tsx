interface props {
  button: ButtonValue;
  handleUserChatChange: (chat: string, next_id: number) => void;
  setQuestionErrorFlag: (flag: boolean) => void;
}

export default function ClientButton({
  button,
  handleUserChatChange,
  setQuestionErrorFlag,
}: props) {
  const handleClick = (e: any) => {
    setQuestionErrorFlag(false);
    handleUserChatChange(e.target.innerText, button.choice_id);
  };
  return (
    <>
      <button
        type="submit"
        onClick={handleClick}
        className="w-72 h-10 rounded bg-red-400 my-1 mx-auto block"
      >
        {button.choice_text}
      </button>
    </>
  );
}
