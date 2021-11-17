import React, { useState } from "react";

import data from "./data.json";
import "./Box.css";
import { FaTimes } from "react-icons/fa";

function Panel(props) {
  let panelData = data.data;

  const [isClicked, setIsClicked] = useState(false);
  const [tag, setTag] = useState("");

  const [isClick, setIsClick] = useState(false);
  const [tags, setTags] = useState("");

  const [isClickButton, setIsClickButton] = useState(false);
  const [tagButton, setTagButton] = useState("");

  const [isClickImg, setIsClickImg] = useState(false);
  const [tagImg, setTagImg] = useState("");

  const closePanel = () => {
    props.setBtn(false);
  };

  const drag = (eve) => {
    eve.dataTransfer.setData("data", eve.target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const handleContent = (content) => {
    if (
      content.className === "Text" ||
      content.className === "Image" ||
      content.className === "Button" ||
      content.className === "Box"
    ) {
      setIsClicked(true);

      setTag(content.className);
    } else {
      setIsClicked(false);
    }
  };
  const handleCon = (tagel) => {
    if (
      tagel.className === "Themed texts" ||
      tagel.className === "Titles" ||
      tagel.className === "Paragraphs"
    ) {
      setIsClick(true);

      setTags(tagel.className);
    } else {
      setIsClick(false);
    }
  };
  const handleButton = (tagBut) => {
    if (
      tagBut.className === "Themed Buttons" ||
      tagBut.className === "Icon Buttons" ||
      tagBut.className === "Image Buttons"
    ) {
      setIsClickButton(true);

      setTagButton(tagBut.className);
    } else {
      setIsClickButton(false);
    }
  };

  const handleConimg = (tagImg) => {
    if (
      tagImg.className === "Image Collections" ||
      tagImg.className === "Social Images"
    ) {
      setIsClickImg(true);

      setTagImg(tagImg.className);
    } else {
      setIsClickImg(false);
    }
  };

  return (
    <div className="panel-box">
      <div className="panel-header">
        <p>Add to site</p>
        <FaTimes className="close" onClick={() => closePanel()} />
      </div>

      <ul>
        {panelData ? (
          panelData.map((ele) => (
            <li
              key={ele.type}
              className={ele.type}
              onClick={(event) => handleContent(event.target)}
            >
              {ele.type}
            </li>
          ))
        ) : (
          <p>Error</p>
        )}
      </ul>

      {isClicked && tag === "Text" ? (
        <ul key={tag}>
          {panelData

            .filter((el) => el.type === "Text")

            .map((ele) => ele.children)

            .flat()

            .map((childobj) => (
              <li
                onClick={(event) => handleCon(event.target)}
                className={childobj.type}
              >
                {childobj.type}
              </li>
            ))}{" "}
        </ul>
      ) : isClicked && tag === "Image" ? (
        <ul key={tag}>
          {panelData

            .filter((el) => el.type === "Image")

            .map((ele) => ele.children)

            .flat()

            .map((childobj) => (
              <li
                onClick={(event) => handleConimg(event.target)}
                className={childobj.type}
              >
                {childobj.type}
              </li>
            ))}
        </ul>
      ) : isClicked && tag === "Button" ? (
        <ul key={tag}>
          {panelData

            .filter((el) => el.type === "Button")

            .map((ele) => ele.children)

            .flat()

            .map((childobj) => (
              <li
                onClick={(event) => handleButton(event.target)}
                className={childobj.type}
              >
                {childobj.type}
              </li>
            ))}
        </ul>
      ) : null}

      {isClick && tags === "Themed texts" ? (
        <ul key={tags}>
          {panelData

            .filter((el) => el.type === "Text")

            .map((ele) => ele.children)
            .flat()

            .filter((el) => el.type === "Themed texts")
            .map((el) =>
              el.children.map((el) => (
                <div className="card" id="card_id">
                  <p
                 
                    onDragStart={drag}
                    onDragOver={dragOver}
                    style={{ color: `${el.color}`, fontSize: `${el.fontsize}` }}
                    className="hello"
                    draggable={true}
                  >
                    {el.type}{" "}
                  </p>
                </div>
              ))
            )}
        </ul>
      ) : isClick && tags === "Titles" ? (
        <ul key={tags}>
          {panelData

            .filter((el) => el.type === "Text")

            .map((ele) => ele.children)
            .flat()

            .filter((el) => el.type === "Titles")
            .map((el) =>
              el.children.map((el) => (
                <h4
                  style={{ fontStyle: "italic" }}
                  className="titl"
                  draggable={true}
                >
                  {el.type}{" "}
                </h4>
              ))
            )}
        </ul>
      ) : isClick && tags === "Paragraphs" ? (
        <ul key={tags}>
          {panelData

            .filter((el) => el.type === "Text")

            .map((ele) => ele.children)
            .flat()

            .filter((el) => el.type === "Paragraphs")
            .map((el) =>
              el.children.map((el) => (
                <p style={{ color: `${el.color}` }} draggable={true}>
                  {el.type}{" "}
                </p>
              ))
            )}
        </ul>
      ) : null}

      {isClickButton && tagButton === "Themed Buttons" ? (
        <ul key={tagButton}>
          {panelData
            .filter((el) => el.type === "Button")
            .map((ele) => ele.children)
            .flat()
            .filter((el) => el.type === "Themed Buttons")
            .map((el) =>
              el.children.map((el) => (
                <button
                  style={{
                    width: `${el.width}`,
                    marginLeft: 70,
                    fontStyle: "italic",
                    fontWeight: 700,
                    backgroundColor: `${el.backgroundcolor}`,
                    fontSize: `${el.fontsize}`,
                    color: `${el.color}`,
                    height: `${el.height}`,
                  }}
                  className="butstyle"
                  draggable={true}
                >
                  {el.type}{" "}
                </button>
              ))
            )}
        </ul>
      ) : isClickButton && tagButton === "Icon Buttons" ? (
        <ul key={tagButton}>
          {panelData

            .filter((el) => el.type === "Button")

            .map((ele) => ele.children)
            .flat()

            .filter((el) => el.type === "Icon Buttons")
            .map((el) =>
              el.children.map((el) => (
                <button
                  style={{
                    width: `${el.width}`,
                    marginLeft: 70,
                    fontStyle: "italic",
                    fontWeight: 700,
                    backgroundColor: `${el.backgroundcolor}`,
                    fontSize: `${el.fontsize}`,
                    color: `${el.color}`,
                    height: `${el.height}`,
                  }}
                  className="butstyle"
                  draggable={true}
                >
                  {el.type}{" "}
                </button>
              ))
            )}
        </ul>
      ) : isClickButton && tagButton === "Image Buttons" ? (
        <ul key={tagButton}>
          {panelData

            .filter((el) => el.type === "Button")

            .map((ele) => ele.children)
            .flat()

            .filter((el) => el.type === "Image Buttons")
            .map((el) =>
              el.children.map((el) => (
                <h3 className="butstyle" draggable={true}>
                  {el.type}{" "}
                </h3>
              ))
            )}
        </ul>
      ) : isClickImg && tagImg === "Image Collections" ? (
        <ul key={tagImg}>
          {panelData

            .filter((el) => el.type === "Image")

            .map((ele) => ele.children)
            .flat()

            .filter((el) => el.type === "Image Collections")
            .map((el) =>
              el.children.map((el) => (
                <img
                src={el.imageUrl} alt="nothing"
                  draggable={true}
                  style={{
                    width: `${el.width}`,
                    height: `${el.height}`,
                    margin: `${el.margin}`,
                    padding: `${el.padding}`,
                    cursor: `${el.cursor}`,
                    borderRadius: `${el.borderradius}`,
                  }}
                >
                  
                </img>
              ))
            )}
        </ul>
      ) : isClickImg && tagImg === "Social Images" ? (
        <ul key={tagImg}>
          {panelData

            .filter((el) => el.type === "Image")

            .map((ele) => ele.children)
            .flat()

            .filter((el) => el.type === "Social Images")
            .map((el) =>
              el.children.map((el) => <img 
              src={el.imageUrl}  alt="nothing"
              draggable={true}
              style={{
                width: `${el.width}`,
                height: `${el.height}`,
                margin: `${el.margin}`,
                padding: `${el.padding}`,
                cursor: `${el.cursor}`,
                borderRadius: `${el.borderradius}`,
              }}
            > 
              </img>)
            )}
        </ul>
      ) : null}
    </div>
  );
}
export default Panel;
