import React, { Component } from "react";
import CapsCard from "./components/CapsCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import ScoreCounter from "./components/ScoreCounter";
import caps from "./Caps.json";
import "./App.css";

class App extends Component {
  // Setting this.state.caps to the caps json array
  state = {
    caps,
    count: 0,
    highScore: 0,
    // randomCap: randomCap
  };


// onClick function needs to:

// -Check to see if image has been clicked
// -Increment score if image has not been clicked
// -rearrange images
// work on console.logging basic state thing





 // handleIncrement increments this.state.count by 1
 onCardClick = () => {
  // We always use the setState method to update a component's state
  this.setState({ count: this.state.count + 1 });
  this.setState({ highScore: this.state.highScore + 1 });

  if (this.state.count > this.state.highScore) {
    this.setState({ highScore: this.state.score });
  }

  this.state.caps.sort(() => Math.random() - 0.5)
  
  let clickedCap = this.state.caps

  // let clickedCap = this.state.caps
  for (let i = 0; i < clickedCap.length; i++) {
    console.log(clickedCap[i].name)
  }
 

 
  
  
};

  // Map over this.state.caps and render a CapsCard component for each friend object
  render() {
    return (

      <div className="app">
        
        <ScoreCounter count={this.state.count} highscore={this.state.highScore}></ScoreCounter>
        <Wrapper>
        
        {this.state.caps.map(cap => (
          <CapsCard
            id={cap.id}
            key={cap.id}
            image={cap.image}
            onCardClick={this.onCardClick} 
            // position={cap.position}
            // country={cap.country}
            // name={cap.name}
          />
        ))}
        </Wrapper>
      
      </div>
    );
  }
}

export default App;
