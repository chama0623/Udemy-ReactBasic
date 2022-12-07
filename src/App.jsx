/* eslint react-hooks/exhaustive-deps:off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// コンポーネント
// コンポーネント名はキャメルケース
// {}内はJSとして認識される
const App = () => {
  // 再レンダリング確認用
  //console.log("レンダリングされたよ！");
  // [stateに使用する変数名(自由), stateを変更する関数名]
  const [num, setNum] = useState(0); // 初期値を0として与える
  // 顔文字を表示/非表示にするuseState
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  // ボタンが押されたときにstateを更新する
  const onClickCountUp = () => {
    // useStateの第2引数で指定した関数に値をセットすることでnumの値が変化する
    setNum(num + 1);
  };

  // 3の倍数でアホになるのは実装できたけど, on/offスイッチが効かなくなった -> useEffect
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0 || String(num).match("3")) {
        /* setFaceShowFlg(true);だと最初のレンダリング -> setFaceShowFlg(true)で状態更新 -> 再レンダリング
        がループしてしまう. そこで論理演算子を用いてfaceShowflgが既にtrueのときは処理を実行しないようにする*/
        faceShowFlg || setFaceShowFlg(true);
      } else {
        // faceShowFlgがtrueのときだけsetFaceShowFlg(false)を実行する
        faceShowFlg && setFaceShowFlg(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps:off
  }, [num]);

  // 絵文字の表示/非表示のuseStateを更新する
  const onClickSwitchShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  // カウントリセット
  const onClickResetNum = () => {
    setNum(0);
    setFaceShowFlg(false);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>3の倍数と3がつく数字の時にアホになるよ!</h1>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />

      <button onClick={onClickSwitchShowFlg}>on/off</button>
      <br />
      <button onClick={onClickResetNum}>reset</button>
      <p>{num}</p>
      {/* faceShowflgがtrueのとき絵文字を表示する*/}
      {faceShowFlg && <p style={{ fontSize: "50px" }}>( ﾟДﾟ)</p>}
    </>
  );
};

export default App;
