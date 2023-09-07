interface Props {
  chat: string;
}

export default function UserChat({ chat }: Props) {
  return (
    <div className="bg-green-200 h-auto max-h-96 w-80 whitespace-pre-wrap overflow-scroll rounded -mr-0 ml-auto p-1 text-center">
      {chat}
    </div>
  );
}
