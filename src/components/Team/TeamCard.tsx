"use client"

import Image from 'next/image'
import styles from './TeamSection.module.css'
import type { TeamMember } from '@/data/teamData'

export default function TeamCard({ name, role, desc, avatar }: TeamMember) {
  return (
    <article className={`${styles.cardFrame} text-center relative`}>
      {/* Avatar wrapper */}
      <div className={styles.avatarCircle}>
          {/* Decorative background */}
          <Image
            src="/assets/Team/icons circle background.svg"
            alt=""
            fill
            className="object-contain opacity-70"
            aria-hidden={true}
            sizes="100px"
            loading="lazy"
          />
          {/* Actual avatar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={avatar}
              alt={`${name} avatar`}
              width={72}
              height={72}
              className="object-contain"
              loading="lazy"
            />
          </div>
      </div>

      {/* Text content */}
      <h3 className="text-xl font-primary font-bold mb-1 text-white">{name}</h3>
      <p className={`${styles.roleText} text-sm font-semibold mb-2`}>{role}</p>
      <p className="text-gray-300 text-sm">{desc}</p>
    </article>
  )
}
