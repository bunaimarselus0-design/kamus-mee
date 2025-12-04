import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

/**
 * Unit tests for book opening and closing
 * Validates: Requirements 1.1, 1.2, 5.1, 5.2, 5.3
 */
describe('Digital Book - Opening and Closing', () => {
  it('should open the book when clicking the book button', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Find and click the book button
    const bookButton = screen.getByTitle('Buku Digital');
    await user.click(bookButton);
    
    // Verify book is displayed
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Buku Digital')).toBeInTheDocument();
  });

  it('should display book title when book is opened', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Open the book
    const bookButton = screen.getByTitle('Buku Digital');
    await user.click(bookButton);
    
    // Verify book title is displayed
    const bookTitles = screen.getAllByText('Translate Indonesia ke Suku Mee');
    expect(bookTitles.length).toBeGreaterThan(0);
  });

  it('should close the book when clicking the close button', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Open the book
    const bookButton = screen.getByTitle('Buku Digital');
    await user.click(bookButton);
    
    // Verify book is open
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    
    // Close the book
    const closeButton = screen.getByLabelText('Close book');
    await user.click(closeButton);
    
    // Verify book is closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should preserve app state after closing the book', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Verify main app content is present
    expect(screen.getByText('Penerjemah Bahasa')).toBeInTheDocument();
    
    // Open and close the book
    const bookButton = screen.getByTitle('Buku Digital');
    await user.click(bookButton);
    const closeButton = screen.getByLabelText('Close book');
    await user.click(closeButton);
    
    // Verify main app content is still present
    expect(screen.getByText('Penerjemah Bahasa')).toBeInTheDocument();
    expect(screen.getByText('Kamus Bahasa Mee/Ekari')).toBeInTheDocument();
  });
});
