import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Gridiron Clicky Game</span>
        <span className="navbar-brand mb-0 h1">Click an image to begin!</span>
        <span className="navbar-brand mb-0 h1">
          Score: {props.score}  Top Score: {props.highScore}
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
