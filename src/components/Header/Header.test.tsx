import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

test('Header should render title', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const title = screen.getByText(/SW-api/);
  expect(title).toBeInTheDocument();
});
