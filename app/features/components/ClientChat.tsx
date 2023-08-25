export default function ClientChat() {
  const text: string =
    "こんにちは！よく寄せられる質問についてお答えいたします。\n\n下記の内容がよく質問されています。質問をクリックすると回答が表示されます。こちらを参考に質問してみてください。";
    return (
    <div className="overflow-scroll min-h-BWHeaderFooter">
      <div className="bg-gray-200 h-auto max-h-96 w-80 flex whitespace-pre-wrap overflow-scroll rounded">
        {text}
      </div>
    </div>
  );
}
