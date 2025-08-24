"use client";

import Image from "next/image";
// Leaderboard section replaced with static SVG frame; hooks no longer needed.

/*
 * Loser Leaderboard component – static SVG frame render (stand-alone, responsive)
 */
export default function LeaderboardSection() {
  // Static replacement: render the provided SVG frame only.

  return (
    <section className="py-20 relative mt-8">
      <div className="relative max-w-6xl mx-auto px-4">
        <Image
          src="/assets/leaderboard/frame.svg"
          alt="Loser Leaderboard"
          width={2000}
          height={800}
          className="w-full h-auto"
          priority
        />
        {/* Side GIF animations */}
        <div className="pointer-events-none absolute left-10 top-4 w-40 h-40 z-10">
          <Image
            src="/assets/leaderboard/Animation%20bothside%20Loser%20Leaderboard.gif"
            alt="Leaderboard side animation left"
            fill
            unoptimized
            aria-hidden
            className="object-contain scale-x-[-1]"
          />
        </div>
        <div className="pointer-events-none absolute right-10 top-4 w-40 h-40 z-10">
          <Image
            src="/assets/leaderboard/Animation%20bothside%20Loser%20Leaderboard.gif"
            alt="Leaderboard side animation right"
            fill
            unoptimized
            aria-hidden
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
