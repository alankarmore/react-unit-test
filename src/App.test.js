import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('button has correct intitial color', () => {
  render(<App/>);
  // find an element with the role of button
  const button = screen.getByRole('button', { name: 'Change to blue'});
  expect(button).toHaveStyle(`background-color: red;`);
});

test('button has correct intitial text', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });
});

test('button turns blue when clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Change to blue'});
    expect(button).toHaveStyle({ backgroundColor: 'red' });
    fireEvent.click(button);
    expect(button).toHaveStyle({ backgroundColor: 'blue'});
    expect(button.textContent).toBe('Change to red');
});