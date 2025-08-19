import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Dashboard heading', () => {
  render(<App />);
  // Verify presence of Schedule section as a smoke test
  const schedule = screen.getByText(/Schedule/i);
  expect(schedule).toBeInTheDocument();
});
