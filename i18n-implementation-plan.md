# Multilingual Implementation Plan

## Overview
This document outlines the step-by-step implementation plan for adding multilingual support to the REKT website using next-intl. The implementation follows Next.js App Router best practices and ensures a seamless user experience across different languages.

## Implementation Steps

### Phase 1: Setup and Configuration

#### 1. Install Dependencies
```bash
npm install next-intl
```

#### 2. Configure Internationalization

Create a configuration file for internationalization settings:

**File: `src/i18n.ts`**
```typescript
import {getRequestConfig} from 'next-intl/server';

// Define supported locales
export const locales = ['en', 'es', 'fr', 'ja'];
export const defaultLocale = 'en';

// This is the default implementation for loading messages
export default getRequestConfig(async ({locale}) => {
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
```

#### 3. Create Middleware for Locale Detection

**File: `middleware.ts`**
```typescript
import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
  // Locale detection strategy
  localeDetection: true,
  // Locale prefix strategy
  localePrefix: 'always'
});

export const config = {
  // Match all pathnames except for
  // - files with extensions (e.g. static files)
  // - API routes
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
```

### Phase 2: Translation Files

#### 1. Create Translation Directory

Create a directory for translation files:
```bash
mkdir -p src/messages
```

#### 2. Create Base Translation File (English)

**File: `src/messages/en.json`**
```json
{
  "metadata": {
    "title": "$REKT - Only losers win",
    "description": "Embrace the crash. The first memecoin that rewards your losses."
  },
  "navigation": {
    "hero": "Hero",
    "tokenomics": "Tokenomics",
    "lossClaim": "Loss Claim",
    "staking": "Staking",
    "leaderboard": "Leaderboard",
    "team": "Team",
    "roadmap": "Roadmap",
    "whitepaper": "Whitepaper",
    "audit": "Audit",
    "faq": "FAQ"
  },
  "languageSwitcher": {
    "label": "Language",
    "en": "English",
    "es": "Español",
    "fr": "Français",
    "ja": "日本語"
  },
  "hero": {
    "title": "Only Losers Win",
    "subtitle": "The first memecoin that rewards your losses",
    "presaleTitle": "Presale Ending In",
    "buyNow": "Buy Now",
    "connectWallet": "Connect Wallet"
  },
  "staking": {
    "title": "REKT Staking",
    "info": "Your presale tokens are auto-staked. No action required.",
    "viewLeaderboard": "View Leaderboard",
    "yourStakedBalance": "Your Staked Balance",
    "yourPercentOfPool": "Your % of Pool",
    "totalStaked": "Total Staked (Presale Pool)"
  },
  "lossClaim": {
    "title": "Loss Claim",
    "subtitle": "Submit your loss proof to earn $REKT",
    "connectWallet": "Connect Wallet to Continue",
    "eligibilityCheck": "Check Eligibility",
    "submitProof": "Submit Proof"
  },
  "footer": {
    "copyright": "© {year} REKT. All rights reserved.",
    "disclaimer": "$REKT is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. It is completely useless and for entertainment purposes only."
  }
}
```

#### 3. Create Additional Language Files

Create similar files for other supported languages:
- `src/messages/es.json`
- `src/messages/fr.json`
- `src/messages/ja.json`

### Phase 3: App Structure Modification

#### 1. Restructure App Directory

Restructure the app directory to include locale parameter:

```
src/app/
├── [locale]/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loss-claim/
│   │   └── page.tsx
│   └── staking/
│       └── page.tsx
└── favicon.ico
```

#### 2. Update Root Layout

**File: `src/app/[locale]/layout.tsx`**
```typescript
import type { Metadata } from 'next'
import { Inter, Orbitron, Audiowide } from 'next/font/google'
import '../globals.css'
import PageTransitionLoader from '@/components/Layout/PageTransitionLoader'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const audiowide = Audiowide({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-audiowide',
  display: 'swap',
})

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const messages = await getMessages({ locale: params.locale });
  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
  };
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${orbitron.variable} ${audiowide.variable} bg-background-main text-text-primary antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PageTransitionLoader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

#### 3. Update Page Components

Update page components to use translations:

**File: `src/app/[locale]/page.tsx`**
```typescript
'use client'

import { useState, useEffect, Fragment } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import RektonomicsSection from '../../components/Rektonomics/RektonomicsSection'
import LeaderboardSection from '../../components/Leaderboard/LeaderboardSection'
import TeamSection from '@/components/Team/TeamSection'
import RoadmapSection from '@/components/Roadmap/RoadmapSection'
import WhitepaperSection from '@/components/Whitepaper/WhitepaperSection'
import FAQSection from '@/components/FAQ/FAQSection'
import FooterSection from '@/components/Footer/FooterSection'
import Navigation from '@/components/Layout/Navigation'

// Main page component
export default function Home() {
  // Use the Navigation component instead of defining it inline
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Other sections */}
      <RektonomicsSection />
      <LeaderboardSection />
      <TeamSection />
      <RoadmapSection />
      <WhitepaperSection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
```

### Phase 4: Component Updates

#### 1. Update Navigation Component

**File: `src/components/Layout/Navigation.tsx`**
```typescript
'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from 'next-intl';
import Image from 'next/image';

export default function Navigation() {
  const [activeLink, setActiveLink] = useState('Hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === '/' || pathname.startsWith('/#');
  const locale = useLocale();
  const t = useTranslations('navigation');
  const tLang = useTranslations('languageSwitcher');

  const navLinks = [
    { id: 'Hero', label: t('hero') },
    { id: 'Tokenomics', label: t('tokenomics') },
    { id: 'Loss Claim', label: t('lossClaim') },
    { id: 'Staking', label: t('staking') },
    { id: 'Leaderboard', label: t('leaderboard') },
    { id: 'Team', label: t('team') },
    { id: 'Roadmap', label: t('roadmap') },
    { id: 'Whitepaper', label: t('whitepaper') },
    { id: 'Audit', label: t('audit') },
    { id: 'FAQ', label: t('faq') },
  ];

  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLanguageMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    // Always open Loss Claim route
    if (link === 'Loss Claim' || link === 'Staking') {
      const targetRoute = link === 'Loss Claim' ? '/loss-claim' : '/staking';
      router.push(targetRoute);
      return;
    }
    
    const targetId = link.toLowerCase().replace(/\s+/g, '');

    // If on home, use smooth scroll
    if (isHome) {
      setActiveLink(link);
      setIsMobileMenuOpen(false);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback navigate to hash to force reposition
        router.push('/#' + targetId);
      }
      return;
    }

    // If on a different page, navigate to home with anchor
    router.push('/#' + targetId);
    setIsMobileMenuOpen(false);
  };

  // Language options
  const languages = [
    { code: 'en', label: tLang('en') },
    { code: 'es', label: tLang('es') },
    { code: 'fr', label: tLang('fr') },
    { code: 'ja', label: tLang('ja') },
  ];

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
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative flex flex-col items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:brightness-125 ${
                      activeLink === link.id ? 'text-white' : 'text-gray-300 hover:text-cyan-400'
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
                          src={link.id === 'Hero' ? '/assets/hero-section/home.svg' : '/assets/hero-section/Tokenomics.svg'}
                          alt="Nav BG"
                          width={80}
                          height={28}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="relative z-10 font-bold text-white text-xs tracking-wider" style={{ transform: 'translateY(1px)' }}>
                        {link.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right side - Language Selector & Mobile Menu Button */}
              <div className="flex items-center space-x-2">
                {/* Language Selector */}
                <div className="relative">
                  <button
                    onClick={toggleLanguageMenu}
                    className="flex items-center justify-center space-x-1 px-2 py-1 rounded-lg border-2 border-cyan-400/40 bg-purple-900/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-purple-800/50"
                    aria-label="Select language"
                  >
                    <span className="text-white text-xs font-medium">{locale.toUpperCase()}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Language Dropdown */}
                  {isLanguageMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-32 rounded-lg overflow-hidden z-50">
                      <div className="relative">
                        {/* Background gradient */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur-sm opacity-60" />
                        <div
                          className="relative rounded-lg border-2 border-cyan-400/40 backdrop-blur-lg"
                          style={{ background: '#05020a', boxShadow: '0 0 15px 3px rgba(0, 240, 255, 0.7)' }}
                        >
                          <div className="py-1">
                            {languages.map((lang) => (
                              <Link
                                key={lang.code}
                                href={pathname}
                                locale={lang.code}
                                className="block px-4 py-2 text-sm text-white hover:bg-purple-800/50 hover:text-cyan-400"
                                onClick={() => setIsLanguageMenuOpen(false)}
                              >
                                {lang.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

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
                          key={link.id}
                          onClick={() => handleLinkClick(link.id)}
                          className={`text-lg font-primary tracking-wider px-4 py-2 transition-colors ${
                            activeLink === link.id ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                          }`}
                        >
                          <span className="font-bold text-xs tracking-wider">{link.label}</span>
                        </button>
                      ))}
                      
                      {/* Mobile Language Selector */}
                      <div className="mt-6 pt-6 border-t border-cyan-400/20 w-full flex flex-col items-center">
                        <span className="text-xs text-gray-400 mb-2">{tLang('label')}</span>
                        <div className="flex space-x-2">
                          {languages.map((lang) => (
                            <Link
                              key={lang.code}
                              href={pathname}
                              locale={lang.code}
                              className={`px-3 py-1 rounded text-xs ${locale === lang.code ? 'bg-cyan-400/20 text-cyan-400' : 'text-white hover:text-cyan-400'}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {lang.code.toUpperCase()}
                            </Link>
                          ))}
                        </div>
                      </div>
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
```

#### 2. Update Footer Component

**File: `src/components/Footer/FooterSection.tsx`**
```typescript
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';

export default function FooterSection() {
  const year = new Date().getFullYear();
  const t = useTranslations('navigation');
  const tFooter = useTranslations('footer');

  const firstRowLinks = [
    { id: "Tokenomics", label: t('tokenomics') },
    { id: "Roadmap", label: t('roadmap') },
    { id: "FAQ", label: t('faq') },
    { id: "Whitepaper", label: t('whitepaper') },
    { id: "Audit", label: t('audit') },
    { id: "Leaderboard", label: t('leaderboard') },
  ];

  const secondRowLinks = [
    { id: "Loss Claim", label: t('lossClaim') },
    { id: "Staking", label: t('staking') },
  ];

  const router = useRouter();

  const handleLinkClick = (link: string) => {
    if (link === "Loss Claim") {
      router.push("/loss-claim");
      return;
    }
    const targetId = link.toLowerCase().replace(/\s+/g, "");
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Rest of the component...

  return (
    // Footer JSX with translated content
    <footer className="relative bg-background-darker py-16">
      {/* ... */}
      <div className="text-center text-sm text-gray-500 mt-8">
        {tFooter('copyright', { year })}
      </div>
      <div className="text-center text-xs text-gray-600 mt-2 max-w-2xl mx-auto">
        {tFooter('disclaimer')}
      </div>
      {/* ... */}
    </footer>
  );
}
```

### Phase 5: Testing and Deployment

#### 1. Testing

- Test language switching functionality
- Verify all translated content displays correctly
- Test URL-based locale switching
- Test browser-based locale detection
- Ensure SEO metadata is correctly translated

#### 2. Deployment

- Update Next.js configuration if needed
- Deploy to production environment
- Monitor for any issues related to internationalization

## Conclusion

This implementation plan provides a comprehensive approach to adding multilingual support to the REKT website using next-intl. By following these steps, the website will be able to serve content in multiple languages while maintaining its unique design aesthetic and user experience.