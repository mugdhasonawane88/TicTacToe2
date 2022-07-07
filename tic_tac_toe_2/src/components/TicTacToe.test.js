import { render, screen } from '@testing-library/react';
import TicTacToe from './TicTacToe';

describe('TicTacToe component', () => {
  test('should have title', () => {
    render(<TicTacToe />);

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe('Tic Tac Toe Game');
  });
});
