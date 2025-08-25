"use client"

import Image from 'next/image'
import styles from './TeamSection.module.css'
import type { TeamMember } from '@/data/teamData'

export default function TeamCard({ name, role, desc, avatar, splitAfter }: TeamMember) {
  // Compute an optional forced split for desktop to match the reference line breaks
  let pre = ''
  let post = ''
  if (splitAfter) {
    const idx = desc.indexOf(splitAfter)
    if (idx !== -1) {
      const cut = idx + splitAfter.length
      pre = desc.slice(0, cut).trim()
      post = desc.slice(cut).trim()
    }
  }
  const descClasses =
    'text-text-secondary text-base leading-relaxed max-w-[40ch] md:max-w-[46ch] lg:max-w-[50ch] xl:max-w-[52ch] mx-auto mt-3'
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
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-primary font-bold mb-2 text-white">{name}</h3>
      <p className={`${styles.roleText} text-base font-semibold mb-3`}>{role}</p>
      {/* Single paragraph: natural wrap on small; forced break on md+ */}
      <p className={descClasses}>
        {pre && post ? (
          <>
            <span className="md:whitespace-nowrap">{pre} </span>
            <br className="hidden md:block" />
            <span>{post}</span>
          </>
        ) : (
          desc
        )}
      </p>
    </article>
  )
}

