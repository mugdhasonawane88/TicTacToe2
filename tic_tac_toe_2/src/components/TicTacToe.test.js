import { render, screen, fireEvent } from '@testing-library/react';
import TicTacToe from './TicTacToe';
import { Constants } from '../constants/TestConstants';

describe('TicTacToe component', () => {

  beforeEach(() => {
    render(<TicTacToe />);
  })

  test('should have title', () => {

    const headerElement = screen.getByTestId('header');

    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe(Constants.HEADER);
  });

  test('Should create empty nine squares in the board when game starts', () => {

    const squares = screen.queryAllByTestId('square');

    expect(squares).toHaveLength(Constants.TOTAL_SQUARES);
    squares.forEach((square) => {
      expect(square.textContent).toBe('');
    })
  });

  test('Should display X in square when player one clicks on a square', () => {

    const squares = screen.queryAllByTestId('square');

    fireEvent.click(squares[Constants.TOP_LEFT_SQUARE]);

    squares.forEach((square, position) => {
      if (position === Constants.TOP_LEFT_SQUARE) {
        expect(square.textContent).toBe(Constants.PLAYER_ONE_SYMBOL);
      } else {
        expect(square.textContent).toBe('');
      }
    })
  });

  test('Should display alternatively X & O in square when players click on a square', () => {

    const squares = screen.queryAllByTestId('square');

    fireEvent.click(squares[Constants.TOP_LEFT_SQUARE]);
    fireEvent.click(squares[Constants.CENTER_SQUARE]);

    squares.forEach((square, position) => {
      if (position === Constants.TOP_LEFT_SQUARE) {
        expect(square.textContent).toBe(Constants.PLAYER_ONE_SYMBOL);
      } else if (position === Constants.CENTER_SQUARE) {
        expect(square.textContent).toBe(Constants.PLAYER_TWO_SYMBOL);
      } else {
        expect(square.textContent).toBe('');
      }
    })
  });

});
