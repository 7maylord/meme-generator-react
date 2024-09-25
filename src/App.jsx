import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./index.css";

function App() {
  return (
    <div className="m-0 flex flex-col items-center justify-center ">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
