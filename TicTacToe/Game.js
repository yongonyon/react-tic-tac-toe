import React from 'react'
import Board from './Board'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './TicTacToe.css';

const GameInfo = (props) => (
  <Paper className="game-info">
    <div>{props.status}</div>
    <List>{props.moves}</List>
  </Paper>
)

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      nextMove: 'X',
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.nextMove
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      nextMove: this.getNextMove(),
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      nextMove: (step % 2) === 0 ? 'X' : 'O',
    })
  }

  getNextMove() {
    return this.state.nextMove == 'X' ? 'O' : 'X'
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ?
        `Go to move #${move}` :
        `Go to game start`
      return (
        <ListItem button onClick={() => this.jumpTo(move)}>
          {desc}
        </ListItem>
      )
    })
    let status = winner ? `Winner: ${winner}` : `Next player: ${this.state.nextMove}`

    return (
      <div>
        <Grid container justify="center"
          alignItems="center" className="game">
          <Board className="game-board"
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </Grid>
        <GameInfo moves={moves} status={status} />
      </div>
    )
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default Game