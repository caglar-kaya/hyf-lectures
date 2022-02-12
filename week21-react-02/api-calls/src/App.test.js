import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('Loading...', () => {
    // Passed with toBeInTheDocument, No Async/Await
    render(<App />);
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });
  test('quia et', () => {
    // Passed with toBeNull, No Async/Await
    render(<App />);
    const quiaEtWords = screen.queryByText(/quia et suscipit/i);
    expect(quiaEtWords).toBeNull();
  });
  test('architecto', async () => {
    //Failed. Why? getByText, queryByText, findByText don't work!
    render(<App />);
    const architectoWord = await screen.findByText(/architecto/i);
    expect(architectoWord).toBeInTheDocument();
  });
});
