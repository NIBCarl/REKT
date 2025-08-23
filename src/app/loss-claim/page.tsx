"use client";

import Image from "next/image";
import Navigation from "@/components/Layout/Navigation";
import FooterSection from "@/components/Footer/FooterSection";
import Link from "next/link";

/*
  REKT Loss Claim Page – simplified implementation based on Figma design
  TailwindCSS 4 utility classes are used to match existing project styling.
*/

export default function LossClaimPage() {
  return (
    <>
      <Navigation />
    <main className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden pb-32 pt-32 md:pt-36">
      {/* Section background */}
      <div className="absolute inset-0 -z-10">
        <Image src="/assets/loss%20claim/background.png" alt="Loss Claim Background" fill className="object-cover opacity-60 brightness-125" priority />
      </div>
      {/* Floating coins overlay (tiled) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-9 pointer-events-none opacity-60"
        style={{
          backgroundImage: "url('/assets/loss%20claim/logocoin%20spread%20around.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '88px',
          backgroundPosition: 'center',
        }}
      />

      {/* Top Section */}
      <section className="container mx-auto px-4 pt-0 text-center">
        <h1 className="font-display text-[44px] md:text-[68px] lg:text-[76px] font-bold leading-[1.05] tracking-[0.01em] mb-2" style={{ textShadow: '0 0 14px rgba(255,255,255,0.25)' }}>REKT Loss Claim</h1>
        <p className="text-gray-200 text-[15px] md:text-base mb-5">One shot. One shield.</p>
        <p className="text-gray-200 mb-7 max-w-[900px] mx-auto text-[16px] md:text-[18px] leading-[1.55]">
          An exclusive V1 presale bonus for wallets with at least $350 allocation. Submit your claim after the presale ends to recover REKT tokens for eligible losses. Loss Claim rewards are <span className="text-yellow-400 font-semibold">NOT</span> staked — this is a one-time chance.
        </p>
        <div className="relative flex justify-center">
          <button className="relative w-[228px] h-[56px] flex items-center justify-center focus:outline-none group">
            <Image src="/assets/loss%20claim/check%20Eligibility%20button.svg" alt="Check Eligibility" fill className="object-contain" />
            <span className="relative z-10 font-semibold text-white text-[15px] leading-none">Check Eligibility</span>
          </button>
        </div>
        <div className="mt-9 flex justify-center">
          <Image src="/assets/loss%20claim/shield.svg" alt="Shield" width={96} height={96} />
        </div>
      </section>

      {/* Status Cards */}
      <section className="container mx-auto px-4 mt-20 flex flex-wrap justify-center gap-10 max-w-7xl">
        {[
          {
            title: "Whitelisted Wallet",
            status: "Eligible",
            iconSrc: "/assets/loss%20claim/person.png",
            desc: "Only V1 presale wallets with a $350 allocation can claim",
          },
          {
            title: "One Claim Per Wallet",
            status: "Unused",
            iconSrc: "/assets/loss%20claim/dart.png",
            desc: "Single claim per wallet — no resets",
          },
          {
            title: "Claim Window",
            status: "⏰",
            iconSrc: "/assets/loss%20claim/clock.png",
            desc: "Claims can only be submitted once the presale has officially closed",
          },
        ].map(({ title, status, iconSrc, desc }) => (
          <div
            key={title}
            className="relative p-8 text-center w-[378px] h-[308px] bg-[url('/assets/loss%20claim/yellow%20border%20frame.png')] bg-no-repeat bg-center bg-contain"
          >
            <div className="mb-3 flex justify-center" aria-hidden>
              <Image src={iconSrc} alt={title} width={64} height={64} />
            </div>
            <h3 className="font-display text-xl text-cyan-400 mb-1">{title}</h3>
            <div className="flex items-center justify-center mb-2">
              {(status === "Eligible" || status === "Unused") ? (
                <Image src="/assets/loss%20claim/check.svg" alt="Check" width={20} height={20} className="mr-2" />
              ) : null}
              <p className="text-green-400 font-semibold">{status}</p>
            </div>
            <p className="text-sm text-gray-300 leading-snug">{desc}</p>
          </div>
        ))}
      </section>

      {/* Claim Form */}
      <section className="container mx-auto px-4 mt-24 max-w-6xl">
        <h2 className="font-display text-[28px] md:text-[32px] text-white text-center mb-10" style={{ textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>
          Claim Your Presale Bonus
        </h2>
        <div className="grid lg:grid-cols-2 gap-14 items-start">
        {/* Form */}
        <form
          className="space-y-7 max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Submit Claim – functionality not implemented yet.");
          }}
        >
          <h2 className="sr-only">Claim Your Presale Bonus</h2>

          {/* Select Token */}
          <div>
            <label className="block mb-2 text-sm text-yellow-400">Select Token</label>
            <select
              className="w-full bg-black/30 border border-cyan-500/60 rounded-lg px-4 h-12 py-0 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ring-cyan-400/60"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Choose eligible token...
              </option>
              <option value="REKT">REKT</option>
              <option value="SOL">SOL</option>
            </select>
          </div>

          {/* Claim Amount */}
          <div>
            <label className="block mb-2 text-sm text-yellow-400">Claim Amount</label>
            <input
              type="number"
              placeholder="0.0"
              className="w-full bg-black/30 border border-cyan-500/60 rounded-lg px-4 h-12 py-0 text-white focus:outline-none focus:ring-2 ring-cyan-400/60"
              required
            />
            <p className="text-xs text-gray-400 mt-1">$0.00 USDT equivalent</p>
          </div>

          <p className="text-[13px] text-red-300 bg-red-900/40 border border-red-500/70 rounded-md px-4 py-3">
            Loss Claim tokens are not staked and cannot be restaked later
          </p>

          <button
            type="submit"
            className="w-full bg-gradient-to-b from-[#0E5F56] to-[#0B4B43] hover:brightness-110 px-6 py-3 rounded-md font-semibold text-white shadow-[0_8px_24px_rgba(0,255,204,0.15)] transition"
          >
            Submit Claim
          </button>
        </form>

        {/* Info Box */}
        <div className="relative w-full max-w-[560px] h-[400px] mx-auto bg-[url('/assets/loss%20claim/cyan%20border%20frame.png')] bg-no-repeat bg-center bg-contain">
          <div className="absolute inset-0 px-10 py-10 flex flex-col">
            <h3 className="font-display text-[20px] md:text-[22px] text-white mb-4 tracking-[0.01em]">Important: V1 Presale Bonus</h3>
            <ul className="list-disc list-inside marker:text-yellow-400 space-y-[10px] text-gray-200 text-[14px] leading-relaxed">
              <li>Available only to V1 presale wallets with ≥ $350 allocation</li>
              <li>One claim per wallet</li>
              <li>Eligible tokens only</li>
              <li>Claims can only be submitted after presale ends</li>
              <li>Tokens received from Loss Claim are <span className="text-yellow-400 font-semibold">NOT staked</span></li>
            </ul>
            <div className="mt-auto">
              <button className="relative w-[178px] h-[50px] flex items-center justify-center focus:outline-none">
                <Image src="/assets/loss%20claim/check%20Eligibility%20button.svg" alt="View Eligibility" fill className="object-contain" />
                <span className="relative z-10 font-semibold text-white text-[15px] leading-none">View Eligibility</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 bg-[#0058ff] py-16 text-center">
        <h2 className="font-display text-[28px] md:text-[32px] text-yellow-400 tracking-[0.01em] mb-3">V1 Bonus — One Time Only</h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          Miss the claim window, and it&apos;s gone forever.
        </p>
        <Link href="#buy" className="relative inline-block w-[178px] h-[50px] focus:outline-none group">
          <Image src="/assets/loss%20claim/buy%20rekt%20button.svg" alt="Buy Rekt" fill className="object-contain" />
          <span className="relative z-10 font-semibold text-white text-[15px] leading-none">BUY $REKT</span>
        </Link>
      </section>
    </main>
      <FooterSection />
    </>
  );
}
