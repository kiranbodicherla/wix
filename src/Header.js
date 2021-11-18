import React from 'react'
import "./Header.css";
function Header(props) {
    return (
   <header>
        <div className="head1">
            <h3>Email Editor</h3>
        </div>
        <div className= "button">
    <button onClick={props.downloadFile}>Publish</button>
    </div>
    </header>
    )
}

export default Header
