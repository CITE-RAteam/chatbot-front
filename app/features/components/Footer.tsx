export default function Footer() {
    return (
      <>
        <div className="bg-gray-200 h-20 absolute bottom-0 w-screen flex">
          <input type="text" id="question" name="question" placeholder="質問を入力してください" className="flex-5 my-auto h-10"></input>
          <button type="button" className="bg-red-500 my-auto h-10 flex-1 rounded">検索</button>
        </div>
      </>
    );
  }
  