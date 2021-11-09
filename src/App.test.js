import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TD Docker CI CD Naoufel link', () => {
  render(<App />);
  const linkElement = screen.getByText(/TD Docker CI CD Naoufel/i);
  expect(linkElement).toBeInTheDocument();
});
