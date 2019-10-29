import React, { Component } from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="textBg">
        <h1>The Gridiron Clicky Game!</h1>
        <h2>
          Click on an image to earn a point - but don't click an image more than
          once!
        </h2>
      </div>
    </header>
  );
}

export default Header;
