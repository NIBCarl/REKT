"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type LeaderboardEntry = {
  rank: number;
  wallet: string; // truncated display e.g. DQyrAc...FUKv
  rektScore: number;
  totalLosses: number; // in USD
  purchase: number; // in USD
};

/*
 * Loser Leaderboard component (stand-alone, responsive)
 * Data is passed via props or fetched internally via /api/leaderboard.
 */
export default function LeaderboardSection({
  initialData,
}: {
  initialData?: LeaderboardEntry[];
}) {
  const fallback: LeaderboardEntry[] = [
    {
      rank: 1,
      wallet: "DQyrAc...FUKv",
      rektScore: 11232,
      totalLosses: 43391.01,
      purchase: 13391.01,
    },
    {
      rank: 2,
      wallet: "DQyrAc...FUKv",
      rektScore: 10102,
      totalLosses: 41391.01,
      purchase: 10391.01,
    },
    {
      rank: 3,
      wallet: "DQyrAc...FUKv",
      rektScore: 9102,
      totalLosses: 40391.01,
      purchase: 9391.01,
    },
    // dummy rows 4-10
    ...Array.from({ length: 7 }).map((_, i) => ({
      rank: i + 4,
      wallet: "DQyrAc...FUKv",
      rektScore: 9102,
      totalLosses: 43391.01,
      purchase: 9391.01,
    })),
  ];

  const [rows, setRows] = useState<LeaderboardEntry[]>(
    initialData?.length ? initialData : fallback
  );
  const [loading, setLoading] = useState(false);

  const refresh = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leaderboard");
      if (res.ok) {
        const data = await res.json();
        setRows(data);
      }
    } catch (_) {
      // silent fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // attempt auto-fetch once on mount
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // helpers
  const formatMoney = (n: number) =>
    `$${n.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;

  const rankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-[#40E0D0]/20"; // gold-turquoise per JSON (alpha for readability)
      case 2:
        return "bg-[#3B5998]/30";
      case 3:
        return "bg-[#8B4513]/30";
      default:
        return "bg-[#3A2A5E]/10";
    }
  };

  return (
    <section className="py-20 relative mt-8" id="leaderboard">
      {/* neon outer & inner frame */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* glow wrapper */}
        <div className="before:absolute before:-inset-2 before:rounded-[36px] before:bg-gradient-to-r before:from-[#8A2BE2] before:to-[#00D1FF] before:blur-md before:opacity-70" />
        <div className="relative rounded-[32px] border-2 border-cyan-300/40 overflow-hidden backdrop-blur-md" style={{ background: "#1A0F2B" }}>
          {/* Top cyan bar with center gap */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-1 flex justify-between">
            <span className="block h-full w-[25%] bg-[#00D1FF]" />
            <span className="block h-full w-[25%] bg-[#00D1FF]" />
          </div>
          {/* header decorations (both sides animation) */}
          <div className="pointer-events-none absolute left-0 top-4 w-28 h-32">
            <Image src="/assets/leaderboard/Animation%20bothside%20Loser%20Leaderboard.gif" alt="leaderboard side animation left" fill unoptimized className="object-contain scale-x-[-1]" />
          </div>
          <div className="pointer-events-none absolute right-0 top-4 w-28 h-32">
            <Image src="/assets/leaderboard/Animation%20bothside%20Loser%20Leaderboard.gif" alt="leaderboard side animation right" fill unoptimized className="object-contain" />
          </div>

          {/* Header */}
          <div className="text-center pt-10 pb-6 relative z-10">
            <h2 className="text-3xl font-primary font-bold text-white mb-2">
              Loser Leaderboard
            </h2>
            <p className="text-white/80 font-secondary">
              The biggest losers are the biggest winners
            </p>
          </div>

          {/* Cyan divider */}
          <div className="h-1 w-full bg-[#00D1FF] mb-4" />

          {/* Table */}
          <div className="px-6 pb-10 mt-4 overflow-x-auto">
            <table className="min-w-full text-sm text-white table-fixed rounded-lg overflow-hidden">
              <colgroup>
                <col className="w-[90px]" />
                <col className="w-[40%]" />
                <col className="w-[15%]" />
                <col className="w-[20%]" />
                <col className="w-[15%]" />
              </colgroup>
              <thead>
                <tr className="bg-[#00A0B0] text-white text-left">
                  <th className="py-4 px-3 font-semibold">Rank</th>
                  <th className="py-4 px-3 font-semibold">Loser</th>
                  <th className="py-4 px-3 font-semibold text-right">REKT Score</th>
                  <th className="py-4 px-3 font-semibold text-right">Total Losses</th>
                  <th className="py-4 px-3 font-semibold text-right">Purchase</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.rank}
                    className={`${rankBg(
                      row.rank
                    )} border-b border-cyan-300/10`}
                  >
                    <td className="py-3 px-3 font-bold">
                      <div className="flex items-center gap-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        {row.rank <= 3 ? (
                          <>
                            <span aria-label={`${row.rank} place`}>
                              {row.rank === 1 ? "🥇" : row.rank === 2 ? "🥈" : "🥉"}
                            </span>
                            <span>{row.rank}</span>
                          </>
                        ) : (
                          <span className="text-gray-300">#{row.rank}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-3 flex items-center space-x-2">
                      <Image
                        src="/assets/leaderboard/Loser icon.svg"
                        alt="loser icon"
                        width={20}
                        height={20}
                      />
                      <span>{row.wallet}</span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className="inline-block rounded-full border border-[#00A0B0] bg-[rgba(0,160,176,0.5)] px-3 py-0.5 text-xs font-semibold">
                        {row.rektScore.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right text-red-400 font-display font-semibold">
                      {formatMoney(row.totalLosses)}
                    </td>
                    <td className="py-3 px-3 text-right text-cyan-400 font-display font-semibold">
                      {formatMoney(row.purchase)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 pb-10">
            <button
              onClick={refresh}
              className="relative px-8 py-3 rounded-[20px] font-semibold text-white shadow-lg hover:brightness-110 transition disabled:opacity-50"
              style={{
                backgroundImage: "url('/assets/leaderboard/Refresh%20leaderboard.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                boxShadow: "0 0 15px #6A0DAD",
              }}
              aria-label="Refresh Leaderboard"
              disabled={loading}
            >
              {loading ? "Refreshing..." : "Refresh Leaderboard"}
            </button>
            <button
              onClick={() => alert("Claim your loss TBD")}
              className="relative px-8 py-3 rounded-[20px] font-semibold text-white shadow-lg hover:brightness-110 transition"
              style={{
                backgroundImage: "url('/assets/leaderboard/Claim%20your%20loss.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                boxShadow: "0 0 15px #6A0DAD",
              }}
              aria-label="Claim your loss"
            >
              Claim your loss
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
