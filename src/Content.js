import React from "react";
import "./Content.css";
function Content(props) {
  const drop = (e) => {
    e.preventDefault();

    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "none";

    e.target.appendChild(card);
  };

  const dragover = (e) => {
    e.preventDefault();
  };

  return (
    <div 
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragover={dragover}
    >
      
    </div>
  );
}

export default Content;
