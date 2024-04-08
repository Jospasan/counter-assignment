// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

//tests
let getByText, getByTestId;

beforeEach(() => {
  // Render the Counter component here
  const component = render(<Counter />);
  getByText = component.getByText;
  getByTestId = component.getByTestId;
});

test('renders counter message', () => { //the message is "Counter"
  // Complete the unit test below based on the objective in the line above
  expect(getByText(/Counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(getByText('+'));
  expect(getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(getByText('+')); // Increment first to avoid negative count
  fireEvent.click(getByText('-'));
  expect(getByTestId('count')).toHaveTextContent('0');
});
