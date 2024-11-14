// src/__tests__/Home.test.js
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('renders the h1 with the correct text and style', () => {
  const name = "John Doe";  // Same as in your component
  const city = "New York";  // Same as in your component
  
  render(<Home />);
  
  // Query the h1 element
  const h1 = screen.queryByText(`${name} is a Web Developer from ${city}`);
  
  // Check if the h1 is in the document
  expect(h1).toBeInTheDocument();
  
  // Check if the element is a <h1>
  expect(h1.tagName).toBe("H1");

  // Check if the style is applied correctly
  expect(h1).toHaveStyle({ color: 'firebrick' });
});
