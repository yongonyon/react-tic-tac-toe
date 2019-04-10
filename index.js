import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ShoppingList from './ShoppingList';

import Game from './TicTacToe/Game'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Game/>
    );
  }
}

render(<App />, document.getElementById('root'));
