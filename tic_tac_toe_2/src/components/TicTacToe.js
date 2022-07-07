import './TicTacToe.css';
import { Constants } from '../constants/Constants';
import { useState } from 'react';

function TicTacToe() {

  const [squares, setSquares] = useState(Array(Constants.TOTAL_SQUARES).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState(Constants.PLAYER_ONE_SYMBOL);

  const playedOn = (position) => {
    const board = squares.slice();
    if (board[position] !== "") {
      return;
    }
    board[position] = currentPlayer === Constants.PLAYER_ONE_SYMBOL ? Constants.PLAYER_ONE_SYMBOL : Constants.PLAYER_TWO_SYMBOL;
    togglePlayer();
    setSquares(board);
  }

  const togglePlayer = () => {
    setCurrentPlayer(currentPlayer === Constants.PLAYER_ONE_SYMBOL ? Constants.PLAYER_TWO_SYMBOL : Constants.PLAYER_ONE_SYMBOL);
  }

  const renderBoard = () => {
    return (
      <div className='board'>
        {
          squares.map((squareValue, position) => {
            return (
              <span
                key={position}
                data-testid='square'
                className='cell'
                onClick={() => playedOn(position)}>
                {squareValue}
              </span>
            )
          }
          )
        }
      </div>)
  }

  return (
    <div className='App'>
      <header data-testid='header' className='App-header'>
        {Constants.HEADER}
      </header>
      {renderBoard()}
    </div >
  );
}

export default TicTacToe;
