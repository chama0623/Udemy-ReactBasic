import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// const App = () => {
//   // JSの中でHTMLのタグを書くのがJSX記法
//   // returnするHTMLの内容は1つのタグで囲むのがお作法
//   // divでもいいけど, React.Fragmentや<>を使う
//   return (
//     <>
//       <h1>こんにちわ!</h1>
//       <p>ども～</p>
//     </>
//   );
// };

// Appをコンポーネントとしてレンダリングする
ReactDom.render(<App />, document.getElementById("root"));
