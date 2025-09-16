import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the main application', () => {
    render(<App />);

    // Check if main sections are rendered (using getAllByText for multiple occurrences)
    const nameElements = screen.getAllByText(/Priscilla Jospin G/i);
    expect(nameElements.length).toBeGreaterThan(0);
  });

  it('renders all main sections', () => {
    render(<App />);

    // Check for section headings with updated text
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
    expect(screen.getByText('My Projects')).toBeInTheDocument();

    // Check for contact section (using role since text appears multiple times)
    const contactHeadings = screen.getAllByText('Get In Touch');
    expect(contactHeadings.length).toBeGreaterThan(0);
  });
});
