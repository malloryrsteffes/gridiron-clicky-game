import React from "react";
import "./Main.css";

function Main(props) {
  return (
    
      <img className="click-item" alt={props.name} src={props.image} />
    
  );
}

export default Main;
