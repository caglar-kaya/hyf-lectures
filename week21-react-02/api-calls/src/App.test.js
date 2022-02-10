import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('Loading...', () => {
    render(<App />);
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });
  test('quia et suscipit', () => {
    render(<App />);
    const loadingElement = screen.queryByText(/quia et suscipit/i);
    expect(loadingElement).toBeNull();
  });
  test('exist architecto', async () => {
    render(<App />);
    expect(screen.queryByText(/architecto/i)).toBeNull();
    expect(await screen.findByText(/architecto/i)).toBeInTheDocument();
  });
});
