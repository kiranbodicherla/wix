import React from "react";
import interact from "interactjs";

import "./Maincomp.css";

function Content(props) {
  function dragMoveListener(event) {
    var target = event.target;
    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
    target.style.transform = "translate(" + x + "px, " + y + "px)";
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  }

  window.dragMoveListener = dragMoveListener;

  interact(".draggable").draggable({
    inertia: true,

    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: true,
      }),
    ],

    listeners: {
      move: dragMoveListener,
    },
  });

  const drop = (eve) => {
    eve.preventDefault();
    let DropEl = eve.dataTransfer.getData("data");
    const tag = document.getElementById(DropEl);
    tag.classList.add("draggable");

    eve.target.appendChild(tag);
  };

  const dragOver = (eve) => {
    eve.preventDefault();
  };

  return (
    <main
      className="main-content"
      onDrop={drop}
      onDragOver={dragOver}
      ref={props.nodeRef}
    ></main>
  );
}

export default Content;
