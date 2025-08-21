/**
 * DistributionBreakdown Component Tests
 * Tests for horizontal line display with SVG assets and percentage labels
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DistributionBreakdown from '../DistributionBreakdown';
import { DistributionItem } from '../../types';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}));

const mockDistributionItems: DistributionItem[] = [
  {
    name: 'Presale',
    percentage: 50,
    svgAsset: '/assets/Rektonomics/presale line.svg',
    color: '#8c5dff',
  },
  {
    name: 'Treasury',
    percentage: 20,
    svgAsset: '/assets/Rektonomics/treasury line.svg',
    color: '#00d1ff',
  },
  {
    name: 'Liquidity Pool',
    percentage: 15,
    svgAsset: '/assets/Rektonomics/liquidity line.svg',
    color: '#007bff',
  },
];

describe('DistributionBreakdown', () => {
  it('renders without crashing', () => {
    render(<DistributionBreakdown items={[]} />);
  });

  it('displays all distribution items with correct percentages', () => {
    render(<DistributionBreakdown items={mockDistributionItems} />);
    
    // Check that all items are rendered
    expect(screen.getByText('Presale')).toBeInTheDocument();
    expect(screen.getByText('Treasury')).toBeInTheDocument();
    expect(screen.getByText('Liquidity Pool')).toBeInTheDocument();
    
    // Check percentages
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText('20%')).toBeInTheDocument();
    expect(screen.getByText('15%')).toBeInTheDocument();
  });

  it('renders SVG assets with correct alt text', () => {
    render(<DistributionBreakdown items={mockDistributionItems} />);
    
    // Check that images are rendered with correct alt text
    expect(screen.getByAltText('Presale distribution line')).toBeInTheDocument();
    expect(screen.getByAltText('Treasury distribution line')).toBeInTheDocument();
    expect(screen.getByAltText('Liquidity Pool distribution line')).toBeInTheDocument();
  });

  it('uses correct SVG asset paths', () => {
    render(<DistributionBreakdown items={mockDistributionItems} />);
    
    const presaleImage = screen.getByAltText('Presale distribution line');
    const treasuryImage = screen.getByAltText('Treasury distribution line');
    const liquidityImage = screen.getByAltText('Liquidity Pool distribution line');
    
    expect(presaleImage).toHaveAttribute('src', '/assets/Rektonomics/presale line.svg');
    expect(treasuryImage).toHaveAttribute('src', '/assets/Rektonomics/treasury line.svg');
    expect(liquidityImage).toHaveAttribute('src', '/assets/Rektonomics/liquidity line.svg');
  });

  it('handles empty items array gracefully', () => {
    render(<DistributionBreakdown items={[]} />);
    
    // Should render container but no items
    const container = document.querySelector('.container');
    expect(container).toBeInTheDocument();
    expect(container?.children).toHaveLength(0);
  });

  it('applies correct CSS classes', () => {
    render(<DistributionBreakdown items={mockDistributionItems} />);
    
    // Check that container has correct class
    const container = document.querySelector('.container');
    expect(container).toBeInTheDocument();
    
    // Check that distribution items have correct classes
    const distributionItems = document.querySelectorAll('.distributionItem');
    expect(distributionItems).toHaveLength(3);
  });

  it('maintains proper structure for each distribution item', () => {
    render(<DistributionBreakdown items={mockDistributionItems} />);
    
    const firstItem = document.querySelector('.distributionItem');
    expect(firstItem).toBeInTheDocument();
    
    // Check that each item has the expected child elements
    const svgContainer = firstItem?.querySelector('.svgContainer');
    const percentageLabel = firstItem?.querySelector('.percentageLabel');
    const itemName = firstItem?.querySelector('.itemName');
    
    expect(svgContainer).toBeInTheDocument();
    expect(percentageLabel).toBeInTheDocument();
    expect(itemName).toBeInTheDocument();
  });

  it('displays items in the correct order', () => {
    render(<DistributionBreakdown items={mockDistributionItems} />);
    
    const distributionItems = document.querySelectorAll('.distributionItem');
    const itemNames = Array.from(distributionItems).map(item => 
      item.querySelector('.itemName')?.textContent
    );
    
    expect(itemNames).toEqual(['Presale', 'Treasury', 'Liquidity Pool']);
  });
});