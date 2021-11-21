import React from "react";
import interact from "interactjs";

import "./Maincomp.css";

function Content(props) {
  function dragMoveListener(event) {
    var end = event.end;
    var x = (parseFloat(end.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(end.getAttribute("data-y")) || 0) + event.dy;
    end.style.transform = "translate(" + x + "px, " + y + "px)";
    end.setAttribute("data-x", x);
    end.setAttribute("data-y", y);
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
    let Drops = eve.dataTransfer.getData("data");
    const tag = document.getElementById(Drops);
    tag.classList.add("draggable");

    eve.end.appendChild(tag);
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
