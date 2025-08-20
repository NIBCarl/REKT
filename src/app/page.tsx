'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Navigation Component
function Navigation() {
  const [activeLink, setActiveLink] = useState('Hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navLinks = [
    'Hero', 'Tokenomics', 'Loss Claim', 'Staking', 
    'Leaderboard', 'Team', 'Roadmap', 'Whitepaper', 'Audit', 'FAQ'
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
    setIsMobileMenuOpen(false) // Close mobile menu when link is clicked
  }

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Cyberdeck Navigation Container */}
        <div className="relative">
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-60"></div>
          
          {/* Main navigation container */}
          <div 
            className="relative rounded-2xl border-2 border-cyan-400/40 backdrop-blur-lg"
            style={{
              background: '#05020a',
              boxShadow: '0 0 15px 3px rgba(0, 240, 255, 0.7)'
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
                      activeLink === link 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                    style={{
                      width: '90px',
                      height: '32px',
                      padding: 0,
                      border: 'none',
                      overflow: 'visible'
                    }}
                  >
                    {/* Link Content - Text with SVG Background */}
                    <div className="relative z-10 flex items-center justify-center w-full h-full">
                      {/* SVG Background */}
                      {link === 'Hero' ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/assets/hero-section/home.svg"
                            alt="Home Background"
                            width={80}
                            height={28}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/assets/hero-section/Tokenomics.svg"
                            alt="Nav Button Background"
                            width={80}
                            height={28}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      
                      {/* Text Content */}
                      <span className="relative z-10 font-bold text-white text-xs tracking-wider" style={{ transform: 'translateY(1px)' }}>
                        {link}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Right side - Language Selector & Mobile Menu Button */}
              <div className="flex items-center space-x-2">
                {/* Language selector - Hidden on mobile */}
                <button 
                  className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all hover:brightness-110"
                  style={{
                    background: 'transparent',
                    border: '1px solid #ffffff',
                    color: '#ffffff'
                  }}
                >
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center text-xs">🇺🇸</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border-2 border-cyan-400/40 bg-purple-900/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-purple-800/50 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/30"
                  aria-label="Toggle mobile menu"
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`bg-cyan-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-cyan-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-cyan-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2">
              <div className="relative">
                {/* Glowing border effect for mobile menu */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-60"></div>
                
                {/* Mobile menu container */}
                <div 
                  className="relative rounded-2xl border-2 border-cyan-400/40 backdrop-blur-lg"
                  style={{
                    background: '#05020a',
                    boxShadow: '0 0 15px 3px rgba(0, 240, 255, 0.7)'
                  }}
                >
                  {/* Background image overlay */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
                    <Image
                      src="/assets/hero-section/navigation background.jpg"
                      alt="Mobile Menu Background"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Mobile menu content */}
                  <div className="relative z-10 p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {navLinks.map((link) => (
                        <button
                          key={link}
                          onClick={() => handleLinkClick(link)}
                          className={`relative flex items-center justify-center px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg border hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 ${
                            activeLink === link 
                              ? 'text-white border-cyan-400 bg-cyan-400/10' 
                              : 'text-gray-300 hover:text-cyan-400 border-purple-500/30 hover:border-cyan-400/50 hover:bg-purple-900/30'
                          }`}
                        >
                          <span className="font-bold text-xs tracking-wider">
                            {link}
                          </span>
                        </button>
                      ))}
                    </div>
                    
                    {/* Language selector in mobile menu */}
                    <div className="mt-4 pt-4 border-t border-purple-500/30">
                      <button 
                        className="w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg border transition-all hover:brightness-110"
                        style={{
                          background: 'transparent',
                          border: '1px solid #ffffff',
                          color: '#ffffff'
                        }}
                      >
                        <span className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center text-xs">🇺🇸</span>
                        <span className="text-sm">English</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 10,
    minutes: 15,
    seconds: 15
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex space-x-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center relative">
          <div className="relative">
            <Image
              src="/assets/hero-section/box for the days.png"
              alt="Timer Box"
              width={60}
              height={60}
              className="w-16 h-16 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-cyan-400 font-display text-xl font-bold">
                {value.toString().padStart(2, '0')}
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-1 uppercase">{unit}</div>
        </div>
      ))}
    </div>
  )
}

// Presale Card Component
function PresaleCard() {
  const [amount, setAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('SOL')
  
  return (
    <div className="w-full max-w-md relative">
      {/* Glowing border effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-2xl blur-sm opacity-80"></div>
      
      {/* Main card container */}
      <div className="card-presale relative rounded-2xl border-2 border-cyan-400/60 backdrop-blur-lg overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1a0b2e 0%, #16213e 50%, #0f3460 100%)',
        boxShadow: '0 0 20px 5px rgba(120, 0, 255, 0.5), inset 0 0 15px rgba(0, 255, 255, 0.25)'
      }}>
        {/* Inner circuit pattern */}
        <Image
          src="/assets/hero-section/circuit-bg.svg"
          alt="Circuit pattern"
          fill
          className="object-cover opacity-20 pointer-events-none"
        />
        {/* Central neon glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-3/4 h-3/4 bg-[radial-gradient(circle,rgba(0,255,255,0.35)_0%,rgba(0,0,0,0)_70%)] blur-2xl"></div>
        </div>
        {/* Card Title */}
        <h3 className="text-2xl font-primary font-bold text-center mb-4 text-white pt-6">
          Phase 1 Presale
        </h3>
      
        {/* Price Info */}
        <div className="flex justify-between mb-4 px-6">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Current Price</div>
            <div className="text-lg font-display font-bold text-cyan-400">$0.001</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Next Price</div>
            <div className="text-lg font-display font-bold text-white">$0.002</div>
          </div>
        </div>
        
        {/* Price Increase Note */}
        <div className="relative mb-4 mx-6">
          <Image
            src="/assets/hero-section/price increase background.svg"
            alt="Price Increase Background"
            width={400}
            height={60}
            className="w-full h-auto"
            priority
          />
          <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
            Price increase when goal reached
          </span>
        </div>
        
        {/* Countdown */}
        <div className="mb-6 px-6">
          <CountdownTimer />
        </div>
        
        {/* Progress Bar */}
        <div className="mb-6 px-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Progress</span>
            <span className="text-cyan-400 font-bold">67.5%</span>
          </div>
          <div className="relative rounded-full overflow-hidden">
            {/* Base layer - progress bar2.png */}
            <Image
              src="/assets/hero-section/progress bar2.png"
              alt="Progress Bar Base"
              width={400}
              height={20}
              className="w-full h-5 object-cover rounded-full"
            />
            {/* Second layer - progress bar 3.png */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image
                src="/assets/hero-section/progress bar 3.png"
                alt="Progress Bar Fill"
                width={270}
                height={20}
                className="h-5 object-cover rounded-full"
                style={{ width: '67.5%' }}
              />
            </div>
            {/* Top layer - Progress bar.png */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image
                src="/assets/hero-section/Progress bar.png"
                alt="Progress Bar Overlay"
                width={270}
                height={20}
                className="h-5 object-cover rounded-full"
                style={{ width: '67.5%' }}
              />
            </div>
          </div>
          {/* Progress 4 element below progress bar */}
          <div className="relative -mt-1 rounded-full overflow-hidden">
            <Image
              src="/assets/hero-section/progress 4.png"
              alt="Progress Bar Bottom"
              width={400}
              height={20}
              className="w-full h-5 object-cover rounded-full"
            />
          </div>
          <div className="text-center text-sm text-gray-400 mt-2">
            $2,024,000 raised
          </div>
        </div>
        
        {/* Payment Method Selection Buttons */}
        <div className="mb-6 flex space-x-2 px-6">
          {['SOL', 'USDT', 'USDC'].map((method) => (
            <button
              key={method}
              onClick={() => setPaymentMethod(method)}
              className={`group flex-1 relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 ${
                paymentMethod === method ? 'opacity-100 ring-2 ring-cyan-400' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {/* Cyan glow overlay */}
              <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.4)_0%,transparent_70%)] transition-opacity duration-300 ${paymentMethod === method ? 'opacity-80' : 'opacity-0 group-hover:opacity-60'}`}></div>
              <Image
                src={method === 'SOL' 
                  ? "/assets/hero-section/buy with sol.svg"
                  : "/assets/hero-section/buy with usdt-usdc.svg"
                }
                alt={`Buy with ${method}`}
                width={120}
                height={40}
                className="w-full h-10 object-contain pointer-events-none"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-[11px] uppercase tracking-wider whitespace-nowrap">
                  BUY WITH {method}
                </span>
              </div>
            </button>
          ))}
        </div>
        
        {/* Amount Input with MAX button using SVG */}
        <div className="mb-6 px-6">
          <div className="flex rounded-lg overflow-hidden border border-gray-600 focus-within:border-cyan-400 transition-colors">
            <input
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 bg-black/50 px-4 py-3 text-white focus:outline-none placeholder-gray-400"
            />
            <button className="relative flex items-center justify-center hover:scale-105 transition-all duration-300">
              <Image
                src="/assets/hero-section/max.svg"
                alt="MAX Button"
                width={57}
                height={41}
                className="h-full object-contain"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm tracking-wider">
                MAX
              </span>
            </button>
          </div>
        </div>
        
        {/* Connect Wallet Button with icon and dropdown */}
        <div className="mb-4 px-6">
          <button className="w-full bg-gray-800/80 border border-gray-600 rounded-lg px-4 py-3 text-white hover:bg-gray-700/80 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm6 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Connect Wallet</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        {/* Buy Button with skull icon and angular brackets */}
        <div className="px-6 pb-6">
          {paymentMethod === 'SOL' ? (
            <button className="w-full hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/50 transition-all duration-300 group">
              <Image
                src="/assets/hero-section/buy_with_sol.png"
                alt="Buy with SOL"
                width={400}
                height={60}
                className="w-full h-14 object-cover rounded-lg border-glow group-hover:brightness-110 transition-all duration-300"
              />
            </button>
          ) : (
            <button className="w-full relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 border-glow hover:brightness-110">
              <div className="flex items-center justify-center space-x-3 flex-nowrap whitespace-nowrap">
                <span className="text-cyan-400 text-xl font-bold">&lt;</span>
                <div className="flex items-center space-x-2">
                  <span className="tracking-wider">BUY WITH {paymentMethod}</span>
                  <span className="text-xl">💀</span>
                </div>
                <span className="text-cyan-400 text-xl font-bold">&gt;</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="min-h-screen pt-20 pb-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <Image
          src="/assets/bg-2-1.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-cyan-900/40"></div>
      </div>
      
      {/* Hero Section Border */}
      <div className="absolute inset-8 z-5">
        <Image
          src="/assets/hero-section/border-herosection.png"
          alt="Hero Section Border"
          fill
          className="object-contain opacity-80"
        />
      </div>

      {/* Social Media Overlay */}
      <div className="flex items-center space-x-6 absolute top-28 left-1/2 -translate-x-1/2 z-[999]">
        {/* Telegram */}
        <a
          href="https://t.me/REKT"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12"
        >
          <Image
            src="/assets/hero-section/telegram background.svg"
            alt="Telegram Background"
            width={48}
            height={48}
            className="transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]"
          />
          <Image
            src="/assets/hero-section/telegram.svg"
            alt="Telegram"
            width={22}
            height={22}
            className="absolute inset-0 m-auto w-5 h-5"
          />
          <span className="sr-only">Telegram</span>
        </a>

        {/* Twitter / X */}
        <a
          href="https://twitter.com/REKT"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12"
        >
          <Image
            src="/assets/hero-section/second background of x.svg"
            alt="X Background"
            width={48}
            height={48}
            className="transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]"
          />
          <Image
            src="/assets/hero-section/x.svg"
            alt="Twitter / X"
            width={22}
            height={22}
            className="absolute inset-0 m-auto w-5 h-5"
          />
          <span className="sr-only">Twitter/X</span>
        </a>
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center min-h-[80vh]">
          {/* Left Column - Main Content with Mascot */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Mascot and Title */}
            <div className="space-y-4">
              <div className="flex justify-center lg:justify-start group">
                <div className="relative">
                  <Image
                    src="/assets/hero-section/Rekts mascot.png"
                    alt="REKT Mascot"
                    width={200}
                    height={200}
                    className="filter drop-shadow-lg animate-float hover:scale-110 hover:brightness-110 transition-all duration-300 cursor-pointer"
                  />
                  
                  {/* Small glow effect behind mascot */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-xl -z-10 rounded-full"></div>
                </div>
              </div>
              
              {/* Main Subtitle */}
              <h1 className="text-4xl lg:text-5xl font-primary font-bold text-white leading-tight">
                Only losers win
              </h1>
              
              {/* Secondary Subtitle */}
              <h2 className="text-xl lg:text-2xl font-secondary text-gray-300">
                Embrace the crash
              </h2>
            </div>
            
            {/* How to Buy Section */}
            <div className="relative bg-black/20 border border-cyan-400/50 rounded-xl p-6 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 opacity-40">
                <Image
                  src="/assets/hero-section/how to buy background.png"
                  alt="How to Buy Background"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              {/* Additional glow effect to enhance the neon border */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-600/10 rounded-xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-primary font-bold mb-4 text-cyan-400 flex items-center justify-center lg:justify-start">
                  <span className="mr-2">💡</span>
                  How to Buy:
                </h3>
                <ol className="space-y-3 text-gray-200">
                  <li className="flex items-center justify-center lg:justify-start">
                    <span className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black text-sm font-bold mr-3">1</span>
                    Connect your wallet
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <span className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black text-sm font-bold mr-3">2</span>
                    Choose payment method
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <span className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black text-sm font-bold mr-3">3</span>
                    Enter amount
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <span className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black text-sm font-bold mr-3">4</span>
                    Confirm transaction
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          {/* Center Column - Independent GIF */}
          <div className="flex justify-center relative min-h-[400px] mt-20">
            {/* Independent GIF Component - Not affected by container styling */}
            <div className="absolute z-20">
              <Image
                src="/assets/hero-section/rekt_transparent bg-1.gif"
                alt="REKT Animation"
                width={800}
                height={800}
                className="w-[700px] h-[700px] animate-pulse opacity-80 hover:scale-105 hover:opacity-100 transition-all duration-500 cursor-pointer"
              />
            </div>
          </div>
          
          {/* Right Column - Presale Card */}
          <div className="flex justify-center lg:justify-center lg:ml-8">
            <div className="relative lg:translate-x-4 lg:translate-y-24">
              <PresaleCard />
            </div>
          </div>
        </div>
        
        {/* Bottom Banner */}
        <div className="text-center mt-16 pt-8 border-t border-purple-500/30">
          {/* Decorative SVG above "As seen on" */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Image
                src="/assets/hero-section/Group 2649.svg"
                alt="Decorative Element"
                width={300}
                height={40}
                className="opacity-80"
                style={{ transform: 'translateX(-10px) translateY(5px)' }}
              />
            </div>
          </div>
          <p className="text-gray-400 text-lg mb-6">As seen on</p>
          
        </div>
        
        {/* Purple banner background - Full width */}
        <div className="relative overflow-hidden w-screen -ml-[50vw] left-1/2">
          <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 py-4">
            {/* Animated scrolling banner - True infinite loop */}
            <div className="relative flex items-center">
              <div className="flex items-center space-x-12 animate-scroll-infinite">
                <Image
                  src="/assets/hero-section/Betecho.svg"
                  alt="BTC Echo"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
                <Image
                  src="/assets/hero-section/Bitcoin.svg"
                  alt="Bitcoin.com"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
                <Image
                  src="/assets/hero-section/coin-speaker 1.svg"
                  alt="Coin Speaker"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
                <Image
                  src="/assets/hero-section/coin-telegraph 1.svg"
                  alt="Coin Telegraph"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
                <Image
                  src="/assets/hero-section/Bitget.svg"
                  alt="Bitget"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
                <Image
                  src="/assets/hero-section/Cryptonomist.svg"
                  alt="Cryptonomist"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
                <Image
                  src="/assets/hero-section/cryptonews 1.svg"
                  alt="Crypto News"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
              </div>
              <div className="flex items-center space-x-12 animate-scroll-infinite">
                <Image
                  src="/assets/hero-section/Betecho.svg"
                  alt="BTC Echo"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
                <Image
                  src="/assets/hero-section/Bitcoin.svg"
                  alt="Bitcoin.com"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
                <Image
                  src="/assets/hero-section/coin-speaker 1.svg"
                  alt="Coin Speaker"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
                <Image
                  src="/assets/hero-section/coin-telegraph 1.svg"
                  alt="Coin Telegraph"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
                <Image
                  src="/assets/hero-section/Bitget.svg"
                  alt="Bitget"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
                <Image
                  src="/assets/hero-section/Cryptonomist.svg"
                  alt="Cryptonomist"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
                <Image
                  src="/assets/hero-section/cryptonews 1.svg"
                  alt="Crypto News"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container relative z-10">
        </div>
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 animate-float hover:scale-125 hover:rotate-45 transition-all duration-300 cursor-pointer">
        <Image
          src="/assets/rekt_confetti_2-3583c4.png"
          alt="Confetti"
          width={40}
          height={40}
          className="opacity-60"
        />
      </div>
      <div className="absolute top-1/3 right-20 animate-float hover:scale-125 hover:-rotate-12 transition-all duration-300 cursor-pointer" style={{ animationDelay: '1s' }}>
        <Image
          src="/assets/rekt_confetti_3-3583c4.png"
          alt="Confetti"
          width={30}
          height={30}
          className="opacity-60"
        />
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float hover:scale-125 hover:rotate-90 transition-all duration-300 cursor-pointer" style={{ animationDelay: '2s' }}>
        <Image
          src="/assets/rekt_rocket_1.png"
          alt="Rocket"
          width={50}
          height={50}
          className="opacity-40"
        />
      </div>
      <div className="absolute top-1/2 right-10 animate-float hover:scale-125 hover:rotate-180 transition-all duration-300 cursor-pointer" style={{ animationDelay: '0.5s' }}>
        <Image
          src="/assets/rekt_coindust.png"
          alt="Coin Dust"
          width={35}
          height={35}
          className="opacity-50"
        />
      </div>
      
      {/* Additional floating mascot */}
      <div className="absolute bottom-20 right-1/3 animate-float hover:scale-125 hover:brightness-125 transition-all duration-300 cursor-pointer" style={{ animationDelay: '1.5s' }}>
        <Image
          src="/assets/mascot_donut.gif"
          alt="Donut Mascot"
          width={80}
          height={80}
          className="opacity-60"
        />
      </div>
      
    </section>
  )
}

// Tokenomics Section Component
function TokenomicsSection() {
  const distribution = [
    { name: "Presale", percentage: 50, color: "bg-purple-500" },
    { name: "Treasury", percentage: 20, color: "bg-cyan-500" },
    { name: "Liquidity Pool", percentage: 15, color: "bg-pink-500" },
    { name: "Staking Pool", percentage: 10, color: "bg-green-500" },
    { name: "Community Fund", percentage: 5, color: "bg-yellow-500" }
  ]

  const taxBreakdown = [
    { name: "Staking Pool", percentage: 50 },
    { name: "Treasury", percentage: 25 },
    { name: "Burn", percentage: 25 }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-purple-900/10 relative">
      {/* Background tokenomics image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/assets/tokenomics-3.png"
          alt="Tokenomics Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-primary font-bold mb-4 neon-glow-purple">
            Rektomics
          </h2>
          <p className="text-xl text-gray-300">
            Fair distribution for maximum chaos
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Token Distribution */}
          <div className="card-default hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:border-cyan-400">
            <h3 className="text-2xl font-primary font-bold mb-6 text-center text-cyan-400">
              Token Distribution
            </h3>
            <div className="text-center mb-6">
              <div className="digital-text">1,000,000,000 $REKT</div>
              <p className="text-gray-400 mt-2">Total Supply</p>
            </div>
            
            <div className="space-y-4">
              {distribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                    <span className="text-white">{item.name}</span>
                  </div>
                  <span className="font-bold text-cyan-400">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tax Structure */}
          <div className="card-default hover:scale-105 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 hover:border-pink-400">
            <h3 className="text-2xl font-primary font-bold mb-6 text-center text-pink-400">
              1% Tax on Every Buy/Sell
            </h3>
            
            <div className="space-y-4 mb-6">
              {taxBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-white">{item.name}</span>
                  <span className="font-bold text-pink-400">{item.percentage}%</span>
                </div>
              ))}
            </div>
            
            <div className="bg-black/30 p-4 rounded border border-purple-500/30">
              <p className="text-sm text-gray-300">
                Until 200M Burn cap reached. Once 200M $REKT have been burned, burning will stop permanently. 
                50% will go to the treasury, and 50% will go to staking to encourage long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Team Section Component
function TeamSection() {
  const teamMembers = [
    { name: "Sadboi", role: "Founder & Vision Lead" },
    { name: "DownBad Dave", role: "Community Manager & Chief Meme Officer" },
    { name: "Liquidation Lisa", role: "Tokenomics & Staking Specialist" },
    { name: "FOMO Fred", role: "Marketing & Hype Generator" },
    { name: "Paperhand Pete", role: "Risk Management & Anti-Abuse Lead" },
    { name: "REKT Roxy", role: "Lead Developer & Security Expert" }
  ]

  return (
    <section className="py-20 relative">
      {/* Background with desktop base asset */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/assets/desktop-base-19acab.png"
          alt="Desktop Background"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Additional floating rockets */}
      <div className="absolute top-10 right-10 animate-float" style={{ animationDelay: '3s' }}>
        <Image
          src="/assets/rekt_rocket_1.png"
          alt="Rocket"
          width={60}
          height={60}
          className="opacity-30"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-primary font-bold mb-4 neon-glow-cyan">
            Meet the $REKT Legends
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The degenerates who turned pain into profit. Each one battle-tested by the market, 
            forged in the fires of liquidation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card-default text-center hover:border-cyan-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-purple-900/50 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-primary font-bold mb-2 text-cyan-400">
                {member.name}
              </h3>
              <p className="text-gray-300">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section Component
function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)
  
  const faqs = [
    {
      q: "Can I sell everything after launch?",
      a: "30% Unlocks at launch, the rest vests over 6 months. Want more early? Rage claim but expect a burn penalty."
    },
    {
      q: "Do I earn rewards on locked tokens?",
      a: "Yes! All presale tokens are automatically staked and earning rewards from day one."
    },
    {
      q: "What happens after the burn cap?",
      a: "Once 200M tokens are burned, the burn mechanism stops. Tax distribution shifts to 50% treasury, 50% staking."
    },
    {
      q: "Which tokens can I use for Loss Claims?",
      a: "Any verified loss from DeFi protocols, CEX liquidations, or rug pulls can be claimed with proper verification."
    },
    {
      q: "Can I stake if I buy after the presale?",
      a: "Absolutely! Staking is available to all $REKT holders, not just presale participants."
    },
    {
      q: "How much REKT can I claim from losses?",
      a: "Claims are calculated based on verified loss amount, wallet age, and community tier multipliers."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/10 to-transparent relative">
      {/* Background docs card */}
      <div className="absolute top-10 right-10 opacity-10">
        <Image
          src="/assets/docs-card.png"
          alt="Documentation"
          width={200}
          height={200}
          className="animate-float"
        />
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-primary font-bold mb-4 neon-glow-pink">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about getting REKT
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card-default hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:border-cyan-400/50">
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full text-left flex justify-between items-center hover:text-cyan-300 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-cyan-400">{faq.q}</h3>
                <span className="text-purple-400 text-xl">
                  {openQuestion === index ? '−' : '+'}
                </span>
              </button>
              {openQuestion === index && (
                <div className="mt-4 pt-4 border-t border-purple-500/30">
                  <p className="text-gray-300">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Roadmap Section Component
function RoadmapSection() {
  const phases = [
    {
      title: "Launch & Foundation",
      goal: "Fair launch, instant staking, lean & meme-ready setup.",
      items: [
        "Deploying Smart Contract.",
        "Open X (Twitter) & Telegram.",
        "Dashboard: REKT Score Leaderboard, Vesting Tracker, Staking Reward, Burn Cap.",
        "Auto Staking For All Presale Tokens, Start Earning From Day One.",
        "Loss Claim V1 (Only For Presale Investors From $350 Transaction, 1 Claim Per Wallet, On-Chain Verified).",
        "Solidproof Audit."
      ]
    },
    {
      title: "Utility & REKT Logic",
      goal: "Activate tokenomics, engage stakers, drive on-chain volume.",
      items: [
        "1% Dex Tax: 50% Staking, 25% Treasury, And 25% Burn (Until 200M Burned).",
        "Rage Claim Penalties Scale Over Time (20% -> 5%).",
        "REKT Score Leaderboard.",
        "Loss Claim V2: Wallet Age Multiplies, Cooldowns.",
        "Burn Cap Tracker + Live Staking Stats.",
        "Optional NFT Drop To Refill Staking Pool."
      ]
    },
    {
      title: "Scaling & Community Chaos",
      goal: "Meme-powered growth and ecosystem expansion.",
      items: [
        "CEX Outreach (Solana-Friendly).",
        "MEME Wars: Community Leaderboard + Airdrops.",
        "Rekt Labs: Experimental Staking/NFT Features.",
        "Final Audit (Certik Or Ottersec)."
      ]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-primary font-bold mb-4 neon-glow-purple">
            $REKT Roadmap
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="card-default hover:border-cyan-500 transition-colors duration-300 relative">
              
              <div className="text-center mb-6 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl relative">
                  <span className="relative z-10">{index + 1}</span>
                </div>
                <h3 className="text-xl font-primary font-bold mb-2 text-cyan-400">
                  {phase.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {phase.goal}
                </p>
              </div>
              
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Leaderboard Section Component
function LeaderboardSection() {
  const leaderboard = [
    { rank: 1, name: "RektKing2024", losses: "$127,840", rektScore: "9,847" },
    { rank: 2, name: "LiquidationLord", losses: "$89,230", rektScore: "8,923" },
    { rank: 3, name: "DownBadDave", losses: "$76,450", rektScore: "7,645" },
    { rank: 4, name: "PaperhándPete", losses: "$65,890", rektScore: "6,589" },
    { rank: 5, name: "FOMOFred", losses: "$54,320", rektScore: "5,432" }
  ]

  return (
    <section className="py-20 relative">
      {/* Background with rectangle asset */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/assets/rectangle-19.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-primary font-bold mb-4 neon-glow-cyan">
            Loser Leaderboard
          </h2>
          <p className="text-xl text-gray-300">
            The biggest losers are the biggest winners
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card-default">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="text-left py-4 px-4 text-cyan-400 font-primary">Rank</th>
                    <th className="text-left py-4 px-4 text-cyan-400 font-primary">Name</th>
                    <th className="text-left py-4 px-4 text-cyan-400 font-primary">Total Losses</th>
                    <th className="text-left py-4 px-4 text-cyan-400 font-primary">REKT Score</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((entry) => (
                    <tr key={entry.rank} className="border-b border-purple-500/10 hover:bg-purple-900/20 transition-colors">
                      <td className="py-4 px-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          entry.rank === 1 ? 'bg-yellow-500 text-black' :
                          entry.rank === 2 ? 'bg-gray-400 text-black' :
                          entry.rank === 3 ? 'bg-orange-600 text-white' :
                          'bg-purple-600 text-white'
                        }`}>
                          {entry.rank}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-white font-medium">{entry.name}</td>
                      <td className="py-4 px-4 text-red-400 font-display font-bold">{entry.losses}</td>
                      <td className="py-4 px-4 text-green-400 font-display font-bold">{entry.rektScore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="py-12 border-t border-purple-500/30">
      <div className="container">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center space-x-3">
            <Image
              src="/assets/hero-section/$rekt.png"
              alt="REKT Logo"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Telegram
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Twitter/X
            </a>
          </div>
          
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Meme coin with utility. No guaranteed profits. Not financial advice. Use at your own risk.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TokenomicsSection />
      <LeaderboardSection />
      <TeamSection />
      <RoadmapSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
