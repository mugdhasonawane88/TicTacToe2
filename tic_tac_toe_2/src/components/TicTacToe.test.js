import { render, screen } from '@testing-library/react';
import TicTacToe from './TicTacToe';

describe('TicTacToe component', () => {
  test('should have title', () => {
    render(<TicTacToe />);

    const headerElement = screen.getByTestId('header');

    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe('Tic Tac Toe Game');
  });

  test('Should create empty nine squares in the board when game starts', () => {
    render(<TicTacToe />);

    const squares = screen.queryAllByRole('square');

    expect(squares).toHaveLength(9);
    squares.forEach((square) => {
      expect(square.textContent).toBe('');
    })
  });

});
