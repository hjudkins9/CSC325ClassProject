import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero'
 
describe('Hero', () => {
  it('renders a heading', () => {
    render(<Hero />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})

it('should display the subheading text correctly', () => {
  render(<Hero />);
  
  // Check if the subheading contains the expected phrase (case-insensitive)
  const subtitle = screen.getByText(/explore our cutting-edge dashboard/i);
  expect(subtitle).toBeInTheDocument();
});

it('should render the call-to-action button', () => {
  render(<Hero />);
  
  // Find the button by its role and accessible name
  const startButton = screen.getByRole('button', { name: /go now/i });
  expect(startButton).toBeInTheDocument();
});

it('should include the hero image component', () => {
  const { container } = render(<Hero />);
  
  // Since the visual is not a standard <img>, we locate it by its ID
  const heroImage = container.querySelector('#image');
  expect(heroImage).toBeInTheDocument();
});

