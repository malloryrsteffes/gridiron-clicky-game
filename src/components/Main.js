import React from "react";
import "./Main.css";

function Main(props) {
  return (
    <div className="col-lg-3">
      <img className="click-item" alt={props.name} src={props.image} />
    </div>
  );
}

export default Main;
