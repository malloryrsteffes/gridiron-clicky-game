import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import players from "./players.json";

class App extends Component {
  state = {
    players,
    score: 0,
    highScore: 0
  };

  // Function to end the game
  gameOver = () => {
    // if the player's score is higher than high score, update the high score
    if (this.state.score > this.state.highScore){
      this.setState({highScore: this.state.score})
    };

    // set each card's "clicked" value to false
    this.state.players.forEach(player => {
      player.clicked = false;
    });

    // Tell the player the game is over
    alert("Game Over! Score: " + this.state.score);
    this.setState({score: 0});
    return true;
  }

  // Function to handle when a player is clicked
  handleClick = id => {
    this.state.players.find((player, i) => {
      if (player.id === id) {
        if (players[i].clicked === false) {
          players[i].clicked = true;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.players.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} highScore={this.state.highScore}/>
        <Header />
        <main className="container">
          {this.state.players.map(player => (
            <Main
              id={player.id}
              key={player.id}
              name={player.name}
              image={player.image}
              clicked={player.clicked}
              handleClick={this.handleClick}
            />
          ))}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
