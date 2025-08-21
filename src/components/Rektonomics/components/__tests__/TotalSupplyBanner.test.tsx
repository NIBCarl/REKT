/**
 * TotalSupplyBanner Component Tests
 * Verifies component functionality and requirements compliance
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TotalSupplyBanner from '../TotalSupplyBanner';

describe('TotalSupplyBanner', () => {
  const defaultProps = {
    totalSupply: '1,000,000,000',
    tokenSymbol: '$REKT',
  };

  it('renders with correct total supply and token symbol', () => {
    render(<TotalSupplyBanner {...defaultProps} />);
    
    expect(screen.getByText('Total Supply: 1,000,000,000 $REKT')).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    const { container } = render(<TotalSupplyBanner {...defaultProps} />);
    
    const banner = container.firstChild as HTMLElement;
    expect(banner).toHaveClass('totalSupplyBanner');
    
    const text = screen.getByText('Total Supply: 1,000,000,000 $REKT');
    expect(text).toHaveClass('totalSupplyText');
  });

  it('handles different token symbols correctly', () => {
    render(<TotalSupplyBanner totalSupply="500,000,000" tokenSymbol="$TEST" />);
    
    expect(screen.getByText('Total Supply: 500,000,000 $TEST')).toBeInTheDocument();
  });

  it('handles different supply amounts correctly', () => {
    render(<TotalSupplyBanner totalSupply="2,500,000,000" tokenSymbol="$REKT" />);
    
    expect(screen.getByText('Total Supply: 2,500,000,000 $REKT')).toBeInTheDocument();
  });
});