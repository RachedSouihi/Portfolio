import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Form', () => {
  it('renders all form fields', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('allows typing in all fields', () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Alice' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Hello' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'This is a test.' } });

    expect(screen.getByLabelText(/name/i)).toHaveValue('Alice');
    expect(screen.getByLabelText(/subject/i)).toHaveValue('Hello');
    expect(screen.getByLabelText(/message/i)).toHaveValue('This is a test.');
  });

  it('shows validation errors if fields are empty on submit', () => {
    render(<Contact />);
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    // You may need to implement error messages in your component for this to work.
    // Example:
    // expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  });

  it('submits the form with valid data', () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Bob' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Greetings' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello world!' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Add assertions here based on what should happen on submit
    // For example, check for a success message or that the form is cleared
  });
});