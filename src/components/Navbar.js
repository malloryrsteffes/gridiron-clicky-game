import React, { Component } from "react";
import "./Navbar.css"

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Gridiron Clicky Game</span>
          <span className="navbar-brand mb-0 h1">Click an image to begin!</span>
          <span className="navbar-brand mb-0 h1">Score: 0 | Top Score: 0</span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
