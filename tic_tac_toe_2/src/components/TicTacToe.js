import './TicTacToe.css';
import { Constants } from '../constants/Constants';
import { useState } from 'react';

function TicTacToe() {

  const [squares, setSquares] = useState(Array(Constants.TOTAL_SQUARES).fill(''));

  const playedOn = (position) => {
    const board = squares.slice();
    board[position] = "X";
    setSquares(board);
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
