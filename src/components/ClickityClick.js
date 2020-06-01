import React from 'react';

import React, { Component } from 'react'

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false
      currentTheme: 'blue',
    };
  }

  handleClick = () => {
    this.state({
      hasBeenClicked: true
      console.log(this.state.hasBeenClicked);
   })// Update our state here...
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
