import React, { useRef } from "react";
import Header from "./Header";
import Leftmenu from "./Leftmenu";
import Maincomp from "./Maincomp";

function App() {
  const nodeRef = useRef(null);

  const download = () => {
    const obj = nodeRef.current.outerHTML;
    const blob = new Blob([obj], { type: "application/html" });
    let url = window.URL.createObjectURL(blob, { type: "application/html" });
    let a = document.createElement("a");
    a.href = url;
    a.download = "publish.html";
    a.click();
  };

  return (
    <div className="App">
      <Header download={download} />
      <div className="main-container">
        <Leftmenu />
        <Maincomp nodeRef={nodeRef} />
      </div>
    </div>
  );
}

export default App;
