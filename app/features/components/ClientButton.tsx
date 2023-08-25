interface props {
  text: string;
  handleUserChatChange: (chat: string) => void;
}

export default function ClientButton({ text, handleUserChatChange }: props) {
  const handleClick = (e: any) => {
    console.log(e.target.innerText);
    handleUserChatChange(e.target.innerText);
  };
  return (
    <>
      <button
        type="submit"
        onClick={handleClick}
        className="w-72 h-10 rounded bg-red-400 my-1 mx-auto block"
      >
        {text}
      </button>
    </>
  );
}
