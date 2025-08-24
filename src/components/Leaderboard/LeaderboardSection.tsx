"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Leaderboard section replaced with static SVG frame; hooks no longer needed.

/*
 * Loser Leaderboard component – static SVG frame render (stand-alone, responsive)
 */
export default function LeaderboardSection() {
  const router = useRouter();
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
        {/* CTA Buttons group */}
        <div className="absolute left-1/2 -translate-x-1/2 ml-[-2px] bottom-11 md:bottom-14 lg:bottom-13 z-[60]">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Refresh Leaderboard"
              onClick={() => router.refresh()}
              className="block cursor-pointer transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Image
                src="/assets/leaderboard/button.svg"
                alt="Refresh Leaderboard"
                width={170}
                height={48}
                unoptimized
                priority
                className="w-[170px] h-[48px] object-contain drop-shadow-[0_0_12px_rgba(0,255,255,0.35)]"
              />
            </button>
            <Link
              href="/loss-claim"
              aria-label="Open Loss Claim"
              className="block cursor-pointer transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Image
                src="/assets/leaderboard/button2.svg"
                alt="Open Loss Claim"
                width={170}
                height={48}
                unoptimized
                priority
                className="w-[170px] h-[48px] object-contain drop-shadow-[0_0_12px_rgba(0,255,255,0.35)]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
