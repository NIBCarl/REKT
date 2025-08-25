export type TeamMember = {
  name: string
  role: string
  desc: string
  avatar: string // public path to SVG under /public
  /**
   * Substring after which the desktop layout should break the description
   * onto a new line for precise visual matching.
   * If not present or not found in desc, no forced break is applied.
   */
  splitAfter?: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Sadboi',
    role: 'Founder & Vision Lead',
    desc: "Built $REKT in a bear market because pain is the best teacher. Bags are heavy, conviction is heavier.",
    avatar: '/assets/Team/Sadboi icon.svg',
    // Reference shows line break right after the word "because"
    splitAfter: 'because',
  },
  {
    name: 'DownBad Dave',
    role: 'Community Manager & Chief Meme Officer',
    desc: 'Here to keep the vibes up when the charts are down. Memes are free, morale is priceless.',
    avatar: '/assets/Team/Downbad Dave.svg',
    // Break after first sentence ("down.")
    splitAfter: 'when the',
  },
  {
    name: 'Liquidation Lisa',
    role: 'Tokenomics & Staking Specialist',
    desc: "Knows the math, feels the pain. Designed $REKT’s supply curve tighter than a margin call.",
    avatar: '/assets/Team/Liquidation Lisa.svg',
    // Break after first sentence ("pain.")
    splitAfter: 'pain.',
  },
  {
    name: 'FOMO Fred',
    role: 'Marketing & Hype Generator',
    desc: "If you're reading this, you’re already late. Let’s go viral.",
    avatar: '/assets/Team/Fomo Fred.svg',
    // Break after first sentence ("late.")
    splitAfter: 'late.',
  },
  {
    name: 'Paperhand Pete',
    role: 'Risk Management & Anti-Abuse Lead',
    desc: 'Sells early so you don’t have to. Protecting the treasury from itself.',
    avatar: '/assets/Team/Paperhand Pete.svg',
    // Break after first sentence ("have to.")
    splitAfter: 'have to.',
  },
  {
    name: 'REKT Roxy',
    role: 'Lead Developer & Security Expert',
    desc: "Ships code faster than you can say ‘gas fees. 'No rug, all build.",
    avatar: '/assets/Team/REKT Roxy.svg',
    // Break after the phrase "‘gas fees.’" 
    splitAfter: 'gas' ,
  },
]

