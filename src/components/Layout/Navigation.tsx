'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Shared Navigation bar extracted from original home page for reuse across pages

export default function Navigation() {
  const [activeLink, setActiveLink] = useState('Hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    'Hero',
    'Tokenomics',
    'Loss Claim',
    'Staking',
    'Leaderboard',
    'Team',
    'Roadmap',
    'Whitepaper',
    'Audit',
    'FAQ',
  ];

  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    if (link === 'Loss Claim') {
      router.push('/loss-claim');
      return;
    }
    setActiveLink(link);
    setIsMobileMenuOpen(false);
    const targetId = link.toLowerCase().replace(/\s+/g, '');
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Cyberdeck Navigation Container */}
        <div className="relative">
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-60" />

          {/* Main navigation container */}
          <div
            className="relative rounded-2xl border-2 border-cyan-400/40 backdrop-blur-lg"
            style={{
              background: '#05020a',
              boxShadow: '0 0 15px 3px rgba(0, 240, 255, 0.7)',
            }}
          >
            {/* Background image overlay */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-30">
              <Image
                src="/assets/hero-section/navigation background.jpg"
                alt="Navigation Background"
                fill
                className="object-cover"
              />
            </div>

            {/* Navigation Content */}
            <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-3">
              {/* Logo */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center relative">
                  <Image
                    src="/assets/hero-section/logocoin.png"
                    alt="REKT Coin"
                    width={24}
                    height={24}
                    className="animate-pulse sm:w-8 sm:h-8"
                  />
                </div>
                <Image
                  src="/assets/hero-section/$rekt.png"
                  alt="REKT Logo"
                  width={80}
                  height={24}
                  className="object-contain sm:w-[100px] sm:h-8"
                />
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => handleLinkClick(link)}
                    className={`relative flex flex-col items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:brightness-125 ${
                      activeLink === link ? 'text-white' : 'text-gray-300 hover:text-cyan-400'
                    }`}
                    style={{
                      width: '90px',
                      height: '32px',
                      padding: 0,
                      border: 'none',
                      overflow: 'visible',
                    }}
                  >
                    {/* Link Content - Text with SVG Background */}
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={link === 'Hero' ? '/assets/hero-section/home.svg' : '/assets/hero-section/Tokenomics.svg'}
                          alt="Nav BG"
                          width={80}
                          height={28}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="relative z-10 font-bold text-white text-xs tracking-wider" style={{ transform: 'translateY(1px)' }}>
                        {link}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right side - Language Selector & Mobile Menu Button */}
              <div className="flex items-center space-x-2">
                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border-2 border-cyan-400/40 bg-purple-900/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-purple-800/50 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/30"
                  aria-label="Toggle mobile menu"
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span
                      className={`bg-cyan-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                        isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                      }`}
                    />
                    <span
                      className={`bg-cyan-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                        isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    <span
                      className={`bg-cyan-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                        isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2">
              <div className="relative">
                {/* Background gradient */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-60" />
                <div
                  className="relative rounded-2xl border-2 border-cyan-400/40 backdrop-blur-lg"
                  style={{ background: '#05020a', boxShadow: '0 0 15px 3px rgba(0, 240, 255, 0.7)' }}
                >
                  <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
                    <Image
                      src="/assets/hero-section/navigation background.jpg"
                      alt="Mobile Menu Background"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10 p-6 flex flex-col h-screen">
                    <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                      {navLinks.map((link) => (
                        <button
                          key={link}
                          onClick={() => handleLinkClick(link)}
                          className={`text-lg font-primary tracking-wider px-4 py-2 transition-colors ${
                            activeLink === link ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                          }`}
                        >
                          <span className="font-bold text-xs tracking-wider">{link}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
