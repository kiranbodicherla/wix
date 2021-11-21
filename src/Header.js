import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <div>
        <h3>Email Editor</h3>
      </div>
      <div className="button">
        <button onClick={props.download}>Publish</button>
      </div>
    </header>
  );
}

export default Header;
