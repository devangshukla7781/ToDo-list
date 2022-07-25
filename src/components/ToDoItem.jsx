import React from "react";


// import deleteImg from "../assets/deleteImg.png"
import complete from "../assets/complete.png"

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}
      <img src={complete}
      alt="completeImg" 
      className="completeImg" 
      style={{width: "25px", marginLeft:'20px'}} 
      />
      {/* <img src={deleteImg} alt="deleteImg" className="deleteImg" style={{width: "25px"}} /> */}
      </li>
    </div>
  );
}

export default ToDoItem;
