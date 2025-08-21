# Requirements Document

## Introduction

This specification outlines the requirements for redesigning the Rektonomics section of the $REKT website to match the provided design mockup and utilize the existing visual assets. The current implementation uses basic card layouts that don't align with the sophisticated futuristic aesthetic shown in the design. This redesign will transform the section into a visually compelling, single-container layout that properly showcases the tokenomics information with enhanced visual elements.

## Requirements

### Requirement 1

**User Story:** As a website visitor, I want to see the Rektonomics section with a futuristic, cyberpunk aesthetic that matches the overall design language of the site, so that I have a cohesive visual experience.

#### Acceptance Criteria

1. WHEN the user views the Rektonomics section THEN the system SHALL display a single main container with neon pink/cyan corner brackets
2. WHEN the container is rendered THEN the system SHALL use the `rektonomics border.jpg` asset as the container border styling
3. WHEN the section loads THEN the system SHALL apply the dark purple background (#1a0f2b) as specified in the rektonomics.json
4. WHEN hover effects are applied THEN the system SHALL display subtle glow animations consistent with the cyberpunk theme

### Requirement 2

**User Story:** As a potential investor, I want to see the token distribution information presented in an engaging visual format with both a pie chart and horizontal breakdown lines, so that I can quickly understand the allocation structure.

#### Acceptance Criteria

1. WHEN the distribution section loads THEN the system SHALL display horizontal lines with percentages on the left side using individual SVG assets (presale line.svg, treasury line.svg, etc.)
2. WHEN the pie chart is rendered THEN the system SHALL use the `tokenomics chart.png` asset to display the visual breakdown
3. WHEN distribution data is shown THEN the system SHALL display the correct percentages: Presale 50%, Treasury 20%, Liquidity Pool 15%, Staking Pool 10%, Community Fund 5%
4. WHEN the chart is displayed THEN the system SHALL use the color palette specified in rektonomics.json for data visualization

### Requirement 3

**User Story:** As a user, I want to see the total supply information prominently displayed in a cyan banner format, so that the key metric is immediately visible and stands out.

#### Acceptance Criteria

1. WHEN the total supply section renders THEN the system SHALL use the `total supply background.svg` asset as the banner background
2. WHEN the banner is displayed THEN the system SHALL show "Total Supply: 1,000,000,000 $REKT" in the specified cyan styling
3. WHEN the banner loads THEN the system SHALL position it prominently at the top of the content area
4. WHEN text is rendered THEN the system SHALL use the primary-background color (#1a0f2b) for text on the cyan background

### Requirement 4

**User Story:** As a visitor, I want to see the REKT mascot character prominently displayed in the center of the tokenomics section, so that the branding is reinforced and the section feels engaging.

#### Acceptance Criteria

1. WHEN the mascot section loads THEN the system SHALL display the `main gif in the middle.gif` asset in the center of the container
2. WHEN the mascot is rendered THEN the system SHALL ensure it's properly sized and positioned between the distribution breakdown and pie chart
3. WHEN animations are enabled THEN the system SHALL allow the GIF to play its animation loop
4. WHEN the mascot is displayed THEN the system SHALL apply appropriate drop shadow effects as specified in the design system

### Requirement 5

**User Story:** As an investor, I want to see the tax structure information displayed in an integrated bottom section with clear percentage breakdowns, so that I understand the fee structure at a glance.

#### Acceptance Criteria

1. WHEN the tax section renders THEN the system SHALL use the `tax on every buy-sell background.png` asset as the section background
2. WHEN tax information is displayed THEN the system SHALL show "1% Tax on Every Buy/Sell" as the section title
3. WHEN the breakdown is shown THEN the system SHALL display 50% Staking Pool (green), 25% Treasury (cyan), 25% Burn (red/pink) with appropriate color coding
4. WHEN the explanation text is rendered THEN the system SHALL include the burn cap information: "Once 200M $REKT have been burned, burning will stop permanently. 50% will go to the treasury, and 50% will go to staking to encourage long-term growth."

### Requirement 6

**User Story:** As a developer, I want the redesigned component to be responsive and maintain visual integrity across different screen sizes, so that the user experience is consistent on all devices.

#### Acceptance Criteria

1. WHEN viewed on mobile devices THEN the system SHALL adapt the layout to stack elements vertically while maintaining visual hierarchy
2. WHEN the screen size changes THEN the system SHALL ensure all assets scale appropriately without losing quality
3. WHEN on tablet sizes THEN the system SHALL maintain the general layout structure with appropriate spacing adjustments
4. WHEN responsive breakpoints are triggered THEN the system SHALL ensure text remains readable and interactive elements remain accessible

### Requirement 7

**User Story:** As a user, I want the section to load efficiently and utilize the existing asset files properly, so that the page performance remains optimal.

#### Acceptance Criteria

1. WHEN assets are loaded THEN the system SHALL use Next.js Image optimization for all visual assets
2. WHEN the component renders THEN the system SHALL properly reference assets from the `/assets/Rektonomics/` directory
3. WHEN images are displayed THEN the system SHALL include appropriate alt text for accessibility
4. WHEN the section loads THEN the system SHALL ensure smooth transitions and animations without performance degradation