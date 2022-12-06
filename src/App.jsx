import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// コンポーネント
// コンポーネント名はキャメルケース
// {}内はJSとして認識される
const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ!</h1>
      <ColorfulMessage color="blue">
        元気があればなんでもできる！
      </ColorfulMessage>
      <ColorfulMessage color="pink">1, 2, 3 ダー!</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
