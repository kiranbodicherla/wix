import React, { useState } from "react";
import data from "./data.json";
import { FaTimes } from "react-icons/fa";
import "./Box.css";
function SidePanel(props) {
  let panelData = data.data;
  const [isListItemClicked, setListItem] = useState(false);
  const [tag, setTag] = useState("");
  const [isNestedListClicked, setNestedList] = useState(false);
  const [nestListTag, setNestedListTag] = useState("");

  const closePanel = () => {
    props.setBtn(false);
  };

  const handleContent = (element) => {
    if (
      element.className === "Text" ||
      element.className === "Button" ||
      element.className === "Image"
    ) {
      setListItem(true);
      setTag(element.className);
    } else {
      setListItem(false);
    }
  };

  const drag = (eve) => {
    eve.dataTransfer.setData("data", eve.target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const handleNestedList = (element) => {
    if (
      element.id === "Themed texts" ||
      element.id === "Titles" ||
      element.id === "Paragraphs" ||
      element.id === "Themed Buttons" ||
      element.id === "Text & icons Buttons" ||
      element.id === "icon Buttons" ||
      element.id === "My Uploads" ||
      element.id === "My Collections" ||
      element.id === "Social images"
    ) {
      setNestedList(true);
      setNestedListTag(element.id);
    } else {
      setNestedList(false);
    }
  };

  return (
    <div className="panel-box">
      <span className="panel-header">
        <p>Add to Site</p>
        <FaTimes id="close-icon" onClick={() => closePanel()} />
      </span>

      <div className="panel-data-box">
        <ul id="mainlist">
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
            <p>No Data Found</p>
          )}
        </ul>

        <div className="childrenlist">
          {isListItemClicked && tag === "Text" ? (
            <ul key={tag} className="nested-data">
              {panelData
                .filter((el) => el.type === "Text")
                .map((ele) => ele.children)
                .flat()
                .map((childObj) => (
                  <li
                    key={childObj.ID}
                    className="text-nested-list"
                    id={childObj.name}
                    onClick={(event) => handleNestedList(event.target)}
                  >
                    {childObj.name}
                  </li>
                ))}
            </ul>
          ) : isListItemClicked && tag === "Button" ? (
            <ul className="nested-data">
              {panelData
                .filter((el) => el.type === "Button")
                .map((ele) => ele.children)
                .flat()
                .map((childObj) => (
                  <li
                    key={childObj.name}
                    id={childObj.name}
                    onClick={(event) => handleNestedList(event.target)}
                    className="button-nested-list"
                  >
                    {childObj.name}
                  </li>
                ))}
            </ul>
          ) : isListItemClicked && tag === "Image" ? (
            <ul key={tag} className="nested-data">
              {panelData
                .filter((el) => el.type === "Image")
                .map((ele) => ele.children)
                .flat()
                .map((childObj) => (
                  <li
                    key={childObj.ID}
                    className="image-nested-list"
                    id={childObj.name}
                    onClick={(event) => handleNestedList(event.target)}
                  >
                    {childObj.name}
                  </li>
                ))}
            </ul>
          ) : null}
        </div>

        <div className="content-holder">
          {isNestedListClicked && nestListTag === "Themed texts"
            ? panelData
                .filter((el) => el.type === "Text")
                .map((ele) => ele.children)
                .flat()
                .filter((ele) => ele.name === "Themed texts")
                .map((ele) =>
                  ele.stylesArr.map((style) => (
                    <div key={style.ID}>
                      <h1
                        draggable={style.draggable}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        id={style.h1}
                        style={{
                          fontSize: `${style.fontsize}`,
                          width: `${style.width}`,
                          fontStyle: `${style.fontstyle}`,
                          color: `${style.color}`,
                          padding: `${style.padding}`,
                          cursor: `${style.cursor}`,
                        }}
                      >
                        {style.h1}
                      </h1>

                      <h2
                        onDragStart={drag}
                        onDragOver={dragOver}
                        draggable={style.draggable}
                        id={style.h2}
                        style={{
                          width: `${style.width}`,
                          fontStyle: `${style.fontstyle}`,
                          fontWeight: `${style.fontweight}`,
                          padding: `${style.padding}`,
                          cursor: `${style.cursor}`,
                          color: `${style.color}`,
                        }}
                      >
                        {style.h2}
                      </h2>

                      <h3
                        onDragStart={drag}
                        onDragOver={dragOver}
                        draggable={style.draggable}
                        id={style.h3}
                        style={{
                          width: `${style.width}`,
                          color: `${style.color}`,
                          fontStyle: `${style.fontstyle}`,
                          fontWeight: `${style.fontweight}`,
                          padding: `${style.padding}`,
                          cursor: `${style.cursor}`,
                        }}
                      >
                        {style.h3}
                      </h3>

                      <h4
                        onDragStart={drag}
                        onDragOver={dragOver}
                        draggable={style.draggable}
                        id={style.h4}
                        style={{
                          width: `${style.width}`,
                          fontStyle: `${style.fontstyle}`,
                          fontWeight: `${style.fontweight}`,
                          padding: `${style.padding}`,
                          color: `${style.color}`,
                          cursor: `${style.cursor}`,
                        }}
                      >
                        {style.h4}
                      </h4>

                      <h5
                        onDragStart={drag}
                        onDragOver={dragOver}
                        draggable={style.draggable}
                        id={style.h5}
                        style={{
                          width: `${style.width}`,
                          fontStyle: `${style.fontstyle}`,
                          fontWeight: `${style.fontweight}`,
                          color: `${style.color}`,
                          padding: `${style.padding}`,
                          cursor: `${style.cursor}`,
                        }}
                      >
                        {style.h5}
                      </h5>

                      <h6
                        onDragStart={drag}
                        onDragOver={dragOver}
                        draggable={style.draggable}
                        id={style.h6}
                        style={{
                          width: `${style.width}`,
                          fontWeight: `${style.fontweight}`,
                          padding: `${style.padding}`,
                          color: `${style.color}`,
                          cursor: `${style.cursor}`,
                        }}
                      >
                        {style.h6}
                      </h6>
                      <p
                        draggable={style.draggable}
                        id={style.id}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        style={{
                          width: `${style.width}`,
                          padding: `${style.padding}`,
                          fontStyle: `${style.fontstyle}`,
                          cursor: `${style.cursor}`,
                          color: `${style.color}`,
                        }}
                      >
                        {style.para}
                      </p>
                    </div>
                  ))
                )
            : isNestedListClicked && nestListTag === "Titles"
            ? panelData
                .filter((el) => el.type === "Text")
                .map((ele) => ele.children)
                .flat()
                .filter((ele) => ele.name === "Titles")
                .map((ele) =>
                  ele.stylesArr.map((style) => (
                    <div key={style.ID}>
                      <h1
                        draggable={style.draggable}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        id={style.ID}
                        key={style.h1}
                        style={{
                          width: `${style.width}`,
                          fontStyle: `${style.fontstyle}`,
                          fontWeight: `${style.fontweight}`,
                          padding: `${style.padding}`,
                          cursor: `${style.cursor}`,
                        }}
                      >
                        {style.h1}
                      </h1>

                      <h2
                        draggable={style.draggable}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        id={style.ID2}
                        key={style.h2}
                        style={{
                          width: `${style.width}`,
                          fontStyle: `${style.fontstyle}`,
                          fontWeight: `${style.fontweight}`,
                          padding: `${style.padding}`,
                          fontFamily: `${style.fontfamily}`,
                          cursor: `${style.cursor}`,
                        }}
                      >
                        {style.h2}
                      </h2>

                      <h3
                        draggable={style.draggable}
                        id={style.ID}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        key={style.h3}
                        style={{
                          width: `${style.width}`,
                          fontStyle: `${style.fontstyle}`,
                          fontWeight: `${style.fontweight}`,
                          padding: `${style.padding}`,
                          cursor: `${style.cursor}`,
                        }}
                      >
                        {style.h3}
                      </h3>

                      <h4
                        draggable={style.draggable}
                        id={style.ID2}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        key={style.h4}
                        style={{
                          width: `${style.width}`,
                          fontStyle: `${style.fontstyle}`,
                          fontWeight: `${style.fontweight}`,
                          padding: `${style.padding}`,
                          cursor: `${style.cursor}`,
                        }}
                      >
                        {style.h4}
                      </h4>

                      <h5
                        draggable={style.draggable}
                        id={style.ID}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        key={style.h5}
                        style={{
                          width: `${style.width}`,
                          fontStyle: `${style.fontstyle}`,
                          fontWeight: `${style.fontweight}`,
                          padding: `${style.padding}`,
                          fontFamily: `${style.fontfamily}`,
                          cursor: `${style.cursor}`,
                        }}
                      >
                        {style.h5}
                      </h5>

                      <h6
                        draggable={style.draggable}
                        id={style.ID2}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        key={style.h6}
                        style={{
                          width: `${style.width}`,
                          fontWeight: `${style.fontweight}`,
                          padding: `${style.padding}`,
                          fontFamily: `${style.fontfamily}`,
                          cursor: `${style.cursor}`,
                        }}
                      >
                        {style.h6}
                      </h6>
                    </div>
                  ))
                )
            : isNestedListClicked && nestListTag === "Paragraphs"
            ? panelData
                .filter((el) => el.type === "Text")
                .map((ele) => ele.children)
                .flat()
                .filter((ele) => ele.name === "Paragraphs")
                .map((ele) => (
                  <div key={ele.name}>
                    {ele.stylesArr.map((style) => (
                      <p
                        draggable={style.draggable}
                        id={style.ID}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        key={style.ID}
                        style={{
                          width: `${style.width}`,
                          color: `${style.color}`,
                          fontStyle: `${style.fontstyle}`,
                          fontWeight: `${style.fontweight}`,
                          padding: `${style.padding}`,
                          fontFamily: `${style.fontfamily}`,
                          cursor: `${style.cursor}`,
                        }}
                      >
                        {style.para}
                      </p>
                    ))}
                  </div>
                ))
            : isNestedListClicked && nestListTag === "Themed Buttons"
            ? panelData
                .filter((el) => el.type === "Button")
                .map((ele) => ele.children)
                .flat()
                .filter((ele) => ele.name === "Themed Buttons")
                .map((ele) => (
                  <div key={ele.name}>
                    {ele.stylesArr.map((style) => (
                      <button
                        draggable={style.draggable}
                        id={style.ID}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        key={style.ID}
                        style={{
                          backgroundColor: `${style.bgcolor}`,
                          color: `${style.color}`,
                          cursor: `${style.cursor}`,
                          padding: `${style.padding}`,
                          fontSize: `${style.fontsize}`,
                          margin: `${style.margin}`,
                          border: `${style.border}`,
                          letterSpacing: `${style.lettersace}`,
                          borderRadius: `${style.borderradius}`,
                          marginTop: 20,
                          marginLeft: 60,
                        }}
                      >
                        {style.btnText}
                      </button>
                    ))}
                  </div>
                ))
            : isNestedListClicked && nestListTag === "Text & icons Buttons"
            ? panelData
                .filter((el) => el.type === "Button")
                .map((ele) => ele.children)
                .flat()
                .filter((ele) => ele.name === "Text & icons Buttons")
                .map((ele) => (
                  <div key={ele.name}>
                    {ele.stylesArr.map((style) => (
                      <button
                        draggable={style.draggable}
                        id={style.ID}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        key={style.ID}
                        style={{
                          backgroundColor: `${style.bgcolor}`,
                          color: `${style.color}`,
                          cursor: `${style.cursor}`,
                          padding: `${style.padding}`,
                          fontSize: `${style.fontsize}`,
                          margin: `${style.margin}`,
                          border: `${style.border}`,
                          borderRadius: `${style.borderradius}`,
                          marginLeft: 30,
                          marginTop: 20,
                        }}
                      >
                        {style.btnText}
                        <i
                          style={{
                            padding: `${style.iconpadding}`,
                            fontSize: `${style.iconsize}`,
                          }}
                          className={style.classname}
                        ></i>
                      </button>
                    ))}
                  </div>
                ))
            : isNestedListClicked && nestListTag === "icon Buttons"
            ? panelData
                .filter((el) => el.type === "Button")
                .map((ele) => ele.children)
                .flat()
                .filter((ele) => ele.name === "icon Buttons")
                .map((ele) => (
                  <div key={ele.name}>
                    {ele.stylesArr.map((style) => (
                      <i
                        draggable={style.draggable}
                        id={style.ID}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        key={style.ID}
                        style={{
                          fontSize: `${style.fontsize}`,
                          margin: `${style.margin}`,
                          cursor: `${style.cursor}`,
                          color: `${style.color}`,
                          padding: `${style.padding}`,
                          backgroundColor: `${style.bgcolor}`,
                          borderRadius: `${style.borderradius}`,
                        }}
                        className={style.classname}
                      ></i>
                    ))}
                  </div>
                ))
            : isNestedListClicked && nestListTag === "My Uploads"
            ? panelData
                .filter((el) => el.type === "Image")
                .map((ele) => ele.children)
                .flat()
                .filter((ele) => ele.name === "My Uploads")
                .map((ele) => (
                  <div key={ele.name}>
                    {ele.stylesArr.map((style) => (
                      <img
                        draggable={style.draggable}
                        id={style.ID}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        src={style.imageUrl}
                        alt="description"
                        key={style.ID}
                        style={{
                          width: `${style.width}`,
                          height: `${style.height}`,
                          margin: `${style.margin}`,
                          padding: `${style.padding}`,
                          cursor: `${style.cursor}`,
                          borderRadius: `${style.borderradius}`,
                        }}
                        className={style.classname}
                      ></img>
                    ))}
                  </div>
                ))
            : isNestedListClicked && nestListTag === "My Collections"
            ? panelData
                .filter((el) => el.type === "Image")
                .map((ele) => ele.children)
                .flat()
                .filter((ele) => ele.name === "My Collections")
                .map((ele) => (
                  <div key={ele.name}>
                    {ele.stylesArr.map((style) => (
                      <img
                        draggable={style.draggable}
                        id={style.ID}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        src={style.imageUrl}
                        alt="description"
                        key={style.ID}
                        style={{
                          width: `${style.width}`,
                          height: `${style.height}`,
                          margin: `${style.margin}`,
                          padding: `${style.padding}`,
                          cursor: `${style.cursor}`,
                          borderRadius: `${style.borderradius}`,
                        }}
                        className={style.classname}
                      ></img>
                    ))}
                  </div>
                ))
            : isNestedListClicked && nestListTag === "Social images"
            ? panelData
                .filter((el) => el.type === "Image")
                .map((ele) => ele.children)
                .flat()
                .filter((ele) => ele.name === "Social images")
                .map((ele) => (
                  <div key={ele.name}>
                    {ele.stylesArr.map((style) => (
                      <img
                        draggable={style.draggable}
                        id={style.ID}
                        onDragStart={drag}
                        onDragOver={dragOver}
                        src={style.imageUrl}
                        alt="description"
                        key={style.ID}
                        style={{
                          width: `${style.width}`,
                          height: `${style.height}`,
                          margin: `${style.margin}`,
                          padding: `${style.padding}`,
                          cursor: `${style.cursor}`,
                          borderRadius: `${style.borderradius}`,
                        }}
                        className={style.classname}
                      ></img>
                    ))}
                  </div>
                ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default SidePanel;
