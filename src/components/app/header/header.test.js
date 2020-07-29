import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';

test('renders learn react link', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
