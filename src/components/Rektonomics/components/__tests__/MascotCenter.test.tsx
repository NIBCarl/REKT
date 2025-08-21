/**
 * MascotCenter Component Tests
 * Tests for the REKT mascot GIF display component
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MascotCenter from '../MascotCenter';

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ 
    src, 
    alt, 
    onLoad, 
    onError, 
    ...props 
  }: {
    src: string;
    alt: string;
    onLoad?: () => void;
    onError?: () => void;
    [key: string]: unknown;
  }) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
        data-testid="mascot-image"
        {...props}
      />
    );
  };
});

describe('MascotCenter', () => {
  const defaultProps = {
    gifSrc: '/assets/Rektonomics/main gif in the rektonomics put it the middle.gif',
    altText: 'REKT Mascot Animation',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the mascot image with correct props', () => {
    render(<MascotCenter {...defaultProps} />);
    
    const image = screen.getByTestId('mascot-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', defaultProps.gifSrc);
    expect(image).toHaveAttribute('alt', defaultProps.altText);
  });

  it('shows loading state initially', () => {
    render(<MascotCenter {...defaultProps} />);
    
    const image = screen.getByTestId('mascot-image');
    expect(image).toHaveAttribute('data-loading', 'true');
  });

  it('removes loading state when image loads', () => {
    render(<MascotCenter {...defaultProps} />);
    
    const image = screen.getByTestId('mascot-image');
    fireEvent.load(image);
    
    expect(image).toHaveAttribute('data-loading', 'false');
  });

  it('shows error fallback when image fails to load', () => {
    render(<MascotCenter {...defaultProps} />);
    
    const image = screen.getByTestId('mascot-image');
    fireEvent.error(image);
    
    expect(screen.getByText('Mascot loading failed')).toBeInTheDocument();
    expect(screen.getByText('🤖')).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(<MascotCenter {...defaultProps} />);
    
    const container = screen.getByTestId('mascot-image').parentElement;
    expect(container).toHaveClass('mascotCenter');
  });

  it('handles custom alt text', () => {
    const customAltText = 'Custom mascot description';
    render(<MascotCenter {...defaultProps} altText={customAltText} />);
    
    const image = screen.getByTestId('mascot-image');
    expect(image).toHaveAttribute('alt', customAltText);
  });

  it('handles custom gif source', () => {
    const customGifSrc = '/custom/path/to/mascot.gif';
    render(<MascotCenter {...defaultProps} gifSrc={customGifSrc} />);
    
    const image = screen.getByTestId('mascot-image');
    expect(image).toHaveAttribute('src', customGifSrc);
  });
});