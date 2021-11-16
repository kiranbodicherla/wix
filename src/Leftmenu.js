import React from 'react'
import { FaPlus  } from "react-icons/fa";

import {useState} from "react"
import './Leftmenu.css';

import Panel from './Box';
function Leftmenu() {
  const [isAddBtnClicked, setBtn] = useState(false);

    const addClick = ()=>{

        setBtn(true);

    }
    return (
      <aside className="sidebar">
      <div className="left">
       <FaPlus  onClick={()=>addClick()}/> 
       <p className="lefthhh">Add</p>
     </div>
   


     {isAddBtnClicked && <Panel isAddBtnClicked={isAddBtnClicked} setBtn={setBtn}/>}
   

  </aside>
    )
}

export default Leftmenu;

