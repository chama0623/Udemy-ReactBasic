import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// コンポーネント
// コンポーネント名はキャメルケース
// {}内はJSとして認識される
const App = () => {
  // ボタンが押されたときにstateを更新する
  const onClickCountUp = () => {
    // useStateの第2引数で指定した関数に値をセットすることでnumの値が変化する
    setNum(num + 1);
  };
  // [stateに使用する変数名(自由), stateを変更する関数名]
  const [num, setNum] = useState(0); // 初期値を0として与える

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ!</h1>
      <ColorfulMessage color="blue">
        元気があればなんでもできる！
      </ColorfulMessage>
      <ColorfulMessage color="pink">1, 2, 3 ダー!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
