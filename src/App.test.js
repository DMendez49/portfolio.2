import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// based on stack over flow the function call getByAltText would be appropriate for line 7
//unfortunitly is using some test libraries and my application fails because of line 7 method getByText