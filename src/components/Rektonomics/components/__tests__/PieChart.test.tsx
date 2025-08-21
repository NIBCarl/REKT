/**
 * PieChart Component Tests
 * Tests for pie chart display, responsive behavior, and accessibility
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PieChart from '../PieChart';
import { DistributionItem } from '../../types';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}));

const mockDistributionData: DistributionItem[] = [
  {
    name: 'Presale',
    percentage: 50,
    svgAsset: '/assets/presale.svg',
    color: '#8c5dff',
  },
  {
    name: 'Treasury',
    percentage: 20,
    svgAsset: '/assets/treasury.svg',
    color: '#00d1ff',
  },
  {
    name: 'Liquidity Pool',
    percentage: 15,
    svgAsset: '/assets/liquidity.svg',
    color: '#007bff',
  },
  {
    name: 'Staking Pool',
    percentage: 10,
    svgAsset: '/assets/staking.svg',
    color: '#0052cc',
  },
  {
    name: 'Community Fund',
    percentage: 5,
    svgAsset: '/assets/community.svg',
    color: '#4dc3ff',
  },
];

const mockChartImageSrc = '/assets/Rektonomics/tokenomics chart.png';

describe('PieChart Component', () => {
  it('renders the pie chart image with correct props', () => {
    render(
      <PieChart
        data={mockDistributionData}
        chartImageSrc={mockChartImageSrc}
      />
    );

    const chartImage = screen.getByAltText('Tokenomics Distribution Chart');
    expect(chartImage).toBeInTheDocument();
    expect(chartImage).toHaveAttribute('src', mockChartImageSrc);
  });

  it('displays legend with all distribution items', () => {
    render(
      <PieChart
        data={mockDistributionData}
        chartImageSrc={mockChartImageSrc}
      />
    );

    // Check that all legend items are present
    mockDistributionData.forEach((item) => {
      expect(screen.getByText(`${item.name}: ${item.percentage}%`)).toBeInTheDocument();
    });
  });

  it('renders legend with correct colors', () => {
    render(
      <PieChart
        data={mockDistributionData}
        chartImageSrc={mockChartImageSrc}
      />
    );

    const legendColors = screen.getAllByRole('generic').filter(
      (element) => element.style.backgroundColor
    );

    // Should have color indicators for each distribution item
    expect(legendColors.length).toBeGreaterThanOrEqual(mockDistributionData.length);
  });

  it('has proper accessibility attributes', () => {
    render(
      <PieChart
        data={mockDistributionData}
        chartImageSrc={mockChartImageSrc}
      />
    );

    // Check for legend aria-label
    expect(screen.getByLabelText('Chart Legend')).toBeInTheDocument();

    // Check that chart image has descriptive alt text
    expect(screen.getByAltText('Tokenomics Distribution Chart')).toBeInTheDocument();
  });

  it('handles empty data gracefully', () => {
    render(
      <PieChart
        data={[]}
        chartImageSrc={mockChartImageSrc}
      />
    );

    // Chart image should still render
    expect(screen.getByAltText('Tokenomics Distribution Chart')).toBeInTheDocument();
    
    // Legend should be present but empty
    expect(screen.getByLabelText('Chart Legend')).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    const { container } = render(
      <PieChart
        data={mockDistributionData}
        chartImageSrc={mockChartImageSrc}
      />
    );

    // Check for main container class
    expect(container.querySelector('.pieChartContainer')).toBeInTheDocument();
    expect(container.querySelector('.chartWrapper')).toBeInTheDocument();
    expect(container.querySelector('.legend')).toBeInTheDocument();
  });

  it('renders with different data sets correctly', () => {
    const alternativeData: DistributionItem[] = [
      {
        name: 'Test Item',
        percentage: 100,
        svgAsset: '/test.svg',
        color: '#ff0000',
      },
    ];

    render(
      <PieChart
        data={alternativeData}
        chartImageSrc={mockChartImageSrc}
      />
    );

    expect(screen.getByText('Test Item: 100%')).toBeInTheDocument();
  });
});