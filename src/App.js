import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import players from "./players.json";

class App extends Component {
  state = {
    players
  };
  render() {
    return (
      <div>
        <Navbar />
        <Header />
       <main className="container">
          {this.state.players.map(player => (
            <Main
              id={player.id}
              key={player.id}
              name={player.name}
              image={player.image}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
