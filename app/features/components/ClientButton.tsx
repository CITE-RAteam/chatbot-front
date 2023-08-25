interface props {
  text: string;
}

export default function ClientButton({ text }: props) {
  return (
    <>
      <button
        type="button"
        className="w-72 h-10 rounded bg-red-400 my-1 mx-auto block"
      >
        {text}
      </button>
    </>
  );
}
