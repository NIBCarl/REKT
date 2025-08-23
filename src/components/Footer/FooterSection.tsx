"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const firstRowLinks = [
  "Tokenomics",
  "Roadmap",
  "FAQ",
  "Whitepaper",
  "Audit",
  "Leaderboard",
];

const secondRowLinks = ["Loss Claim", "Staking"];

export default function FooterSection() {
  const year = new Date().getFullYear();

  const router = useRouter();

  const handleLinkClick = (link: string) => {
    if (link === "Loss Claim" || link === "Staking") {
      const targetRoute = link === "Loss Claim" ? "/loss-claim" : "/staking";
      router.push(targetRoute);
      return;
    }
    const targetId = link.toLowerCase().replace(/\s+/g, "");
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative pt-12 pb-6 mt-12 border-t-2 border-purple-500/50 overflow-hidden">
      {/* Top Disclaimer Bar */}
      <div className="w-full overflow-hidden bg-[#3e008c] py-2">
        <div className="inline-block animate-scroll-infinite whitespace-nowrap text-[13px] font-medium tracking-wide">
          <span className="text-cyan-400 font-bold mr-1">Disclaimer:</span>
          Meme coin with utility. No guaranteed profits. Not financial advice. Use at your own risk. &nbsp; • &nbsp;
          <span className="text-cyan-400 font-bold mr-1">Disclaimer:</span>
          Meme coin with utility. No guaranteed profits. Not financial advice. Use at your own risk.
        </div>
      </div>

      {/* Starry background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Image src="/assets/bg-2-1.png" alt="Background" fill className="object-cover" />
      </div>

      <div className="relative container z-10 flex flex-col lg:flex-row gap-10 lg:gap-0 py-10 items-start lg:items-start">
        {/* Left Column */}
        <div className="max-w-sm space-y-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/assets/footer/logocoin%201.png"
              alt="$REKT Coin"
              width={48}
              height={48}
              className="w-10 h-10"
            />
            <Image
              src="/assets/footer/Rekt%20wordmark%201.png"
              alt="$REKT"
              width={120}
              height={40}
              className="w-[120px] h-auto"
            />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            The revolutionary meme coin that turns your crypto losses into gains. Only losers win in the $REKT ecosystem.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex-1 flex flex-col items-center lg:items-center text-sm text-gray-300 space-y-2">
          <div className="flex flex-wrap justify-center gap-8">
            {firstRowLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleLinkClick(link)}
                className="hover:text-cyan-400 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
          <div className="flex gap-8">
            {secondRowLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleLinkClick(link)}
                className="hover:text-cyan-400 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Socials */}
        <div className="flex flex-col items-start lg:items-end space-y-4">
          <h4 className="text-white font-bold">Join our Social links</h4>
          <div className="flex space-x-4">
            {/* Telegram */}
            <a
              href="https://t.me/REKT"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12"
            >
              <Image
                src="/assets/hero-section/telegram background.svg"
                alt="Telegram BG"
                width={48}
                height={48}
                className="transition-all duration-300 group-hover:scale-110"
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

            {/* X / Twitter */}
            <a
              href="https://twitter.com/REKT"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12"
            >
              <Image
                src="/assets/hero-section/second background of x.svg"
                alt="X BG"
                width={48}
                height={48}
                className="transition-all duration-300 group-hover:scale-110"
              />
              <Image
                src="/assets/hero-section/x.svg"
                alt="X"
                width={22}
                height={22}
                className="absolute inset-0 m-auto w-5 h-5"
              />
              <span className="sr-only">Twitter/X</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-10 mt-8 pt-4 border-t border-purple-500/30 text-center text-xs text-gray-500">
        Copyright © $REKT {year}. All rights reserved.
      </div>
    </footer>
  );
}
