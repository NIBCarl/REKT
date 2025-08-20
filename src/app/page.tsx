'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Navigation Component
function Navigation() {
  const [activeLink, setActiveLink] = useState('Hero')
  
  const navLinks = [
    'Hero', 'Tokenomics', 'Loss Claim', 'Staking', 
    'Leaderboard', 'Team', 'Roadmap', 'Whitepaper', 'Audit', 'FAQ'
  ]

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
            <div className="relative z-10 flex items-center justify-between px-6 py-3">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center relative">
                  <Image
                    src="/assets/hero-section/logocoin.png"
                    alt="REKT Coin"
                    width={32}
                    height={32}
                    className="animate-pulse"
                  />
                </div>
                <Image
                  src="/assets/hero-section/$rekt.png"
                  alt="REKT Logo"
                  width={100}
                  height={32}
                  className="object-contain"
                />
              </div>
              
              {/* Navigation Links */}
              <div className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => setActiveLink(link)}
                    className={`relative flex flex-col items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 ${
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
                      <span className="relative z-10 uppercase font-bold text-white text-xs tracking-wider" style={{ transform: 'translateY(1px)' }}>
                        {link}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Language Selector */}
              <div className="flex items-center">
                {/* Language selector */}
                <button 
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all hover:brightness-110"
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
              </div>
            </div>
          </div>
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
    <div className="card-presale w-full max-w-md">
      {/* Card Title */}
      <h3 className="text-2xl font-primary font-bold text-center mb-6 text-white">
        Phase 1 Presale
      </h3>
      
      {/* Price Info */}
      <div className="flex justify-between mb-6">
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
      <div className="text-center text-sm text-gray-400 mb-6">
        Price increase when goal reached
      </div>
      
      {/* Countdown */}
      <div className="mb-6">
        <CountdownTimer />
      </div>
      
      {/* Progress Bar */}
      <div className="mb-6">
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
      <div className="mb-6 flex space-x-2">
        {['SOL', 'USDT', 'USDC'].map((method) => (
          <button
            key={method}
            onClick={() => setPaymentMethod(method)}
            className={`flex-1 relative overflow-hidden rounded transition-all duration-300 ${
              paymentMethod === method ? 'opacity-100' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={method === 'SOL' 
                ? "/assets/hero-section/buy with sol.svg"
                : "/assets/hero-section/buy with usdt-usdc.svg"
              }
              alt={`Buy with ${method}`}
              width={120}
              height={40}
              className="w-full h-10 object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-xs uppercase tracking-wider">
                BUY WITH {method}
              </span>
            </div>
          </button>
        ))}
      </div>
      
      {/* Amount Input */}
      <div className="mb-6">
        <div className="flex">
          <input
            type="text"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-black/50 border border-gray-600 rounded-l px-3 py-2 text-white focus:outline-none focus:border-purple-500"
          />
          <button className="bg-purple-600 border border-purple-500 rounded-r px-4 py-2 text-white hover:bg-purple-700 transition-colors">
            MAX
          </button>
        </div>
      </div>
      
      {/* Connect Wallet Button */}
      <button className="w-full btn-primary mb-3">
        Connect Wallet
      </button>
      
      {/* Buy Button */}
      {paymentMethod === 'SOL' ? (
        <button className="w-full hover:scale-105 transition-transform">
          <Image
            src="/assets/hero-section/buy_with_sol.png"
            alt="Buy with SOL"
            width={400}
            height={60}
            className="w-full h-14 object-cover rounded border-glow"
          />
        </button>
      ) : (
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded font-bold text-lg hover:scale-105 transition-transform border-glow">
          BUY WITH {paymentMethod}
        </button>
      )}
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
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center min-h-[80vh]">
          {/* Left Column - Main Content with Mascot */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Mascot and Title */}
            <div className="space-y-4">
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <Image
                    src="/assets/hero-section/Rekts mascot.png"
                    alt="REKT Mascot"
                    width={200}
                    height={200}
                    className="filter drop-shadow-lg animate-float"
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
            <div className="relative bg-black/40 border border-cyan-400/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="absolute inset-0 opacity-5">
                <Image
                  src="/assets/hero-section/how to buy background.png"
                  alt="How to Buy Background"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
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
          
          {/* Center Column - Animated GIF Background */}
          <div className="flex justify-center relative min-h-[400px]">
            <div className="relative">
              <Image
                src="/assets/hero-section/rekt_transparent bg-1.gif"
                alt="REKT Animation"
                width={500}
                height={500}
                className="animate-pulse opacity-80"
              />
              
                             {/* Enhanced glow effect */}
               <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-3xl -z-10 rounded-full"></div>
               
               {/* Floating coin element */}
               <div className="absolute bottom-4 right-4 animate-float" style={{ animationDelay: '1s' }}>
                 <Image
                   src="/assets/hero-section/logocoin.png"
                   alt="Floating Coin"
                   width={50}
                   height={50}
                   className="animate-pulse"
                 />
               </div>
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
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="hover:opacity-100 transition-opacity">
              <Image src="/assets/logo-coinmarketcap.png" alt="CoinMarketCap" width={120} height={40} className="filter grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="hover:opacity-100 transition-opacity">
              <Image src="/assets/logo-coinsult.png" alt="Coinsult" width={120} height={40} className="filter grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="hover:opacity-100 transition-opacity">
              <Image src="/assets/logo-solidproof.png" alt="SolidProof" width={120} height={40} className="filter grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="hover:opacity-100 transition-opacity">
              <Image src="/assets/logo-bitget.png" alt="Bitget" width={120} height={40} className="filter grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="hover:opacity-100 transition-opacity">
              <Image src="/assets/logo-bitcoin.png" alt="Bitcoin" width={120} height={40} className="filter grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="hover:opacity-100 transition-opacity">
              <Image src="/assets/logo-btc-echo.png" alt="BTC Echo" width={120} height={40} className="filter grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="hover:opacity-100 transition-opacity">
              <Image src="/assets/logo-cryptonomist.png" alt="Cryptonomist" width={120} height={40} className="filter grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 animate-float">
        <Image
          src="/assets/rekt_confetti_2-3583c4.png"
          alt="Confetti"
          width={40}
          height={40}
          className="opacity-60"
        />
      </div>
      <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Image
          src="/assets/rekt_confetti_3-3583c4.png"
          alt="Confetti"
          width={30}
          height={30}
          className="opacity-60"
        />
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <Image
          src="/assets/rekt_rocket_1.png"
          alt="Rocket"
          width={50}
          height={50}
          className="opacity-40"
        />
      </div>
      <div className="absolute top-1/2 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <Image
          src="/assets/rekt_coindust.png"
          alt="Coin Dust"
          width={35}
          height={35}
          className="opacity-50"
        />
      </div>
      
      {/* Additional floating mascot */}
      <div className="absolute bottom-20 right-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
        <Image
          src="/assets/mascot_donut.gif"
          alt="Donut Mascot"
          width={80}
          height={80}
          className="opacity-60"
        />
      </div>
      
      {/* Floating REKT coins - repositioned */}
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '3s' }}>
        <Image
          src="/assets/hero-section/logocoin.png"
          alt="REKT Coin"
          width={40}
          height={40}
          className="opacity-40 animate-pulse"
        />
      </div>
      <div className="absolute bottom-1/3 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Image
          src="/assets/hero-section/logocoin.png"
          alt="REKT Coin"
          width={35}
          height={35}
          className="opacity-50 animate-pulse"
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
          <div className="card-default">
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
          <div className="card-default">
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
            <div key={index} className="card-default text-center hover:border-cyan-500 transition-colors duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center relative">
                <Image
                  src="/assets/hero-section/logocoin.png"
                  alt="Team Avatar"
                  width={60}
                  height={60}
                  className="rounded-full opacity-80"
                />
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
            <div key={index} className="card-default">
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full text-left flex justify-between items-center"
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
              {/* Background coin decoration */}
              <div className="absolute top-4 right-4 opacity-10">
                <Image
                  src="/assets/hero-section/logocoin.png"
                  alt="Background Coin"
                  width={60}
                  height={60}
                />
              </div>
              
              <div className="text-center mb-6 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl relative">
                  <Image
                    src="/assets/hero-section/logocoin.png"
                    alt="Phase Icon"
                    width={40}
                    height={40}
                    className="absolute opacity-30"
                  />
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
              src="/assets/hero-section/logocoin.png"
              alt="REKT Coin"
              width={50}
              height={50}
              className="animate-pulse"
            />
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
