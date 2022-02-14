/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/await-async-utils */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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
    waitFor(() => expect(screen.findByText(/architecto/i)).toBeInTheDocument());
  });
});
