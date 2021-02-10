import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
it('button work', () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId('button');
  expect(button).toBeTruthy();
  fireEvent.click(button);
});
it('renders', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Check weather/i)).toBeInTheDocument();
});
