import React from "react";

// コンポーネント
// コンポーネント名はキャメルケース
// {}内はJSとして認識される
const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ!</h1>
      <p style={contentStyle}>ども～</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
