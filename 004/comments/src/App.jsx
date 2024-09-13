import React, { useState } from "react";
import AddComment from "./components/AddComment";
import Comments from "./container/Comments";
import Post from "./components/Post";
import "./App.css";
import Rate from "./components/Rate";
function App() {
  const [isResponseState, setIsResponseState] = useState(false);


  return (
    <div className="app">
      <Post />
      <Rate />
      <AddComment isResponseState={isResponseState} onChangeState={setIsResponseState} />
      <Comments onChangeState={setIsResponseState} />
    </div>
  );
}

export default App;

