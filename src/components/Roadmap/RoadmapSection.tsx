import Image from 'next/image';
import { phases } from '@/data/roadmap';
import styles from './RoadmapSection.module.css';

export default function RoadmapSection() {
  const headerBg = '/assets/roadmap/background.svg';

  const phaseBadgeBgByIndex = [
    '/assets/roadmap/PHASE1%20background.png',
    '/assets/roadmap/PHASE2%20background.png',
    '/assets/roadmap/PHASE3%20background.png'
  ];

  const phaseLabelImgByIndex = [
    '/assets/roadmap/phase1.png',
    '/assets/roadmap/phase2.png',
    '/assets/roadmap/phase3.png'
  ];

  const goalBg = '/assets/roadmap/Goalfair.png';

  return (
    <section id="roadmap" className={`relative py-20 bg-gradient-to-b from-transparent to-purple-900/10 ${styles.sectionRoot}`}>
      {/* Top separators: left/right segments with a center gap */}
      <div className={styles.topSeparatorLeft} aria-hidden="true">
        <Image
          src="/assets/roadmap/top%20line.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-right pointer-events-none"
        />
      </div>
      <div className={styles.topSeparatorRight} aria-hidden="true">
        <Image
          src="/assets/roadmap/top%20line.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-left pointer-events-none"
        />
      </div>
      {/* Middle purple fillers on both sides */}
      <div className={styles.topSeparatorMiddleLeft} aria-hidden="true">
        <Image
          src="/assets/roadmap/middle%20line%20in%20the%20top.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-right pointer-events-none"
        />
      </div>
      <div className={styles.topSeparatorMiddleRight} aria-hidden="true">
        <Image
          src="/assets/roadmap/middle%20line%20in%20the%20top.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-left pointer-events-none"
        />
      </div>
      {/* Lower double-line segments */}
      <div className={styles.topSeparatorLowerLeft} aria-hidden="true">
        <Image
          src="/assets/roadmap/top%20line.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-right pointer-events-none"
        />
      </div>
      <div className={styles.topSeparatorLowerRight} aria-hidden="true">
        <Image
          src="/assets/roadmap/top%20line.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-left pointer-events-none"
        />
      </div>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-primary font-bold neon-glow-purple mb-2">
            $REKT Roadmap
          </h2>
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Staking exclusive to presale buyers · Simplified launch stack
          </p>
        </div>

        {/* Timeline */}
        <div className={`relative ${styles.timeline} mx-auto max-w-5xl`}>
          {phases.map((phase, index) => {
            const isLeft = index % 2 === 0;
            const cardPositionClass = isLeft ? styles.left : styles.right;
            const badgeSideClass = isLeft ? styles.oppositeRight : styles.oppositeLeft;
            const badgeOrderClass = isLeft ? '' : styles.rowReverse;

            return (
              <div key={phase.title} className="relative mb-28 flex items-start">
                {/* Phase Card */}
                <div className={`${styles.phaseCard} ${cardPositionClass} w-full lg:max-w-md`}>
                  {/* Header with phase-specific background */}
                  <div className={styles.phaseHeader}>
                    <Image
                      src={headerBg}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-contain pointer-events-none transform -translate-x-6 sm:-translate-x-8 md:-translate-x-10 lg:-translate-x-12 xl:-translate-x-16 2xl:-translate-x-20"
                      aria-hidden="true"
                    />
                    <h3 className={styles.headerTitle}>{phase.title}</h3>
                  </div>

                  {/* Goal + Items box with background */}
                  <div className={styles.goalBox}>
                    <Image
                      src={goalBg}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-fill object-left-top pointer-events-none"
                      aria-hidden="true"
                    />
                    <p className={styles.goalLabel}>GOAL: {phase.goal}</p>
                    <ul className={styles.goalList}>
                      {phase.items.map((item, i) => (
                        <li key={i} className={styles.listItem}>
                          <span className="text-sm text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Phase Badge with background and mascot (opposite side of goal box) */}
                <div className={`${styles.phaseBadge} ${badgeSideClass} ${badgeOrderClass} hidden lg:flex`}>
                  <div className={styles.badgeBox}>
                    {/* Arrow */}
                    <div className={`${styles.badgeArrow} ${isLeft ? styles.arrowLeft : styles.arrowRight}`}>
                      <Image
                        src="/assets/roadmap/Arrow%20of%20the%20phase.svg"
                        alt=""
                        fill
                        sizes="34px"
                        className="object-contain pointer-events-none"
                        aria-hidden="true"
                      />
                    </div>
                    <Image
                      src={phaseBadgeBgByIndex[index]}
                      alt=""
                      fill
                      sizes="220px"
                      className="object-contain pointer-events-none"
                      aria-hidden="true"
                    />
                    <Image
                      src={phaseLabelImgByIndex[index]}
                      alt=""
                      fill
                      sizes="220px"
                      className="object-contain pointer-events-none p-1 pl-8 pr-3 z-10"
                      aria-hidden="true"
                    />
                    <span className="sr-only">PHASE {index + 1}</span>
                  </div>
                  <Image
                    src="/assets/roadmap/SMIRK.png"
                    alt={`Mascot for phase ${index + 1}`}
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Upper separator line (for double-line effect) */}
      <div className={styles.bottomSeparatorUpper} aria-hidden="true">
        <Image
          src="/assets/roadmap/bottom%20line.png"
          alt=""
          fill
          sizes="100vw"
          className="object-contain pointer-events-none"
        />
      </div>
      {/* Middle filler line */}
      <div className={styles.bottomSeparatorMiddle} aria-hidden="true">
        <Image
          src="/assets/roadmap/middle%20line%20in%20the%20bottom.png"
          alt=""
          fill
          sizes="100vw"
          className="object-contain pointer-events-none"
        />
      </div>
      {/* Bottom separator line */}
      <div className={styles.bottomSeparator} aria-hidden="true">
        <Image
          src="/assets/roadmap/bottom%20line.png"
          alt=""
          fill
          sizes="100vw"
          className="object-contain pointer-events-none"
        />
      </div>
    </section>
  );
}

