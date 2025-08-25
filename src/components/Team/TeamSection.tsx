"use client"

import Image from 'next/image'
import TeamCard from './TeamCard'
import styles from './TeamSection.module.css'
import { teamMembers } from '@/data/teamData'

export default function TeamSection() {
  return (
    <section className={`${styles.section} py-20 relative`}>
      {/* Soft connector glow background */}
      <div className={styles.connector} aria-hidden={true} />

      {/* Section header */}
      <div className="relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <Image
              src="/assets/Team/topbothsideline.svg"
              alt=""
              width={441}
              height={31}
              className="hidden md:block flex-grow basis-0 h-auto select-none"
              loading="lazy"
            />
            <h2 className="text-4xl font-primary font-bold whitespace-nowrap">
              Meet the <span className="neon-glow-cyan" style={{ color: 'var(--bright-cyan-glow)' }}>$REKT</span> Legends
            </h2>
            <Image
              src="/assets/Team/topbothsideline.svg"
              alt=""
              width={441}
              height={31}
              className="hidden md:block flex-grow basis-0 h-auto select-none"
              style={{ transform: 'scaleX(-1)' }}
              loading="lazy"
            />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The degenerates who turned pain into profit. Each one battle-tested by the market, forged in the fires of liquidation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </div>

      {/* Optional decorative corner lines or frames */}
      <div className="absolute top-10 right-10 opacity-10" aria-hidden={true}>
        <Image
          src="/assets/rekt_rocket_1.png"
          alt=""
          width={80}
          height={80}
          className="animate-float"
          loading="lazy"
        />
      </div>

      {/* Bottom decorative line */}
      <div
        className="absolute bottom-0 inset-x-0 pointer-events-none z-0"
        aria-hidden={true}
      >
        <Image
          src="/assets/Team/bottom line.svg"
          alt=""
          width={1920}
          height={32}
          className="w-full h-auto opacity-90"
          loading="lazy"
          priority={false}
        />
      </div>
    </section>
  )
}
