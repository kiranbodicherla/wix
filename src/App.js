

import './App.css';

import React,{useRef} from "react";
import Leftmenu from './Leftmenu';
import Header from './Header';



function App() {
  const node = useRef(null);
 

  const downloadFile=()=>{

    if(node.current === null){

      return;
    }

    const obj = node.current.outerHTML
    const blob = new Blob([obj], {type : 'application/html'});
    let url = window.URL.createObjectURL(blob, {type: "application/html"});
    let a = document.createElement('a');
    a.href = url;
    a.download = 'file.html';
    a.click();
  }
  

  return (
    <div>
     <Header downloadFile={downloadFile}  />
    <div>
    <Leftmenu />
   
      </div>
  
      
    </div>
    );
}

export default App;
