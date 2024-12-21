import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignupPage from '../page';

describe('SignupPage', () => {
  test('renders the signup form', () => {
    render(<SignupPage />);
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign up/i })).toBeInTheDocument();
  });

  test('shows error messages for empty fields', async () => {
    render(<SignupPage />);
    
    fireEvent.click(screen.getByRole('button', { name: /Sign up/i }));

    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Password is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Password confirmation is required/i)).toBeInTheDocument();
  });

  test('submits the form with valid data', async () => {
    render(<SignupPage />);

    fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /Sign up/i }));

    expect(await screen.findByText(/Signed up successfully/i)).toBeInTheDocument();
  });
});