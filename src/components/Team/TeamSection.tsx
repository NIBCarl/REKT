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
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-primary font-bold mb-4">
            Meet the <span className="neon-glow-cyan" style={{ color: 'var(--bright-cyan-glow)' }}>$REKT</span> Legends
          </h2>
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

      {/* Optional decorative corner lines or frames could be added here */}
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
    </section>
  )
}
