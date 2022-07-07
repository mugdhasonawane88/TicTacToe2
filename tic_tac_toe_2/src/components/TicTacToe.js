import './TicTacToe.css';
import { Constants } from '../constants/Constants';

function TicTacToe() {

  const renderBoard = () => {
    return (
      <div className='board'>
        {
          [...Array(Constants.TOTAL_SQUARES)].map((square, index) => {
            return (
              <span key={index} role='square' className='cell' />
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
