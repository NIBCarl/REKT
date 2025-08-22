import Image from 'next/image'

export default function WhitepaperSection() {
  return (
    <section id="whitepaper" className="relative py-24 bg-gradient-to-b from-transparent to-purple-900/10">
      {/* Decorative cyan frame */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image src="/assets/Whitepaper/neon%20border%20frame.png" alt="Section Frame" fill className="object-contain" />
        {/* Top middle accent */}
        <Image
          src="/assets/Whitepaper/top%20middle%20of%20border.svg"
          alt="Frame Accent"
          width={260}
          height={40}
          className="absolute top-5 left-1/2 -translate-x-1/2 ml-4"
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-primary font-bold leading-tight">
            <span className="text-cyan-400">Documentation</span> <span className="text-purple-500">&amp; Security</span>
          </h2>
          <p className="text-gray-300 mt-3 text-lg">Transparency and security first</p>
          <p className="text-sm text-gray-400">Full documentation and third-party security audits</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">
          {/* Whitepaper Card */}
          <div className="relative w-full max-w-md mx-auto min-h-[640px]">
            <Image
              src="/assets/Whitepaper/border%20of%20white%20paper.png"
              alt="Whitepaper Card Border"
              fill
              className="object-contain pointer-events-none select-none"
            />
            <div className="relative pt-28 px-10 pb-10 flex flex-col items-center text-center">
              <Image src="/assets/Whitepaper/REKT.png" alt="Whitepaper Icon" width={100} height={100} />
              <h3 className="text-2xl font-primary font-bold text-white mt-6">Whitepaper</h3>
              <p className="text-gray-300 text-sm mt-3 max-w-sm">
                Comprehensive documentation covering tokenomics, roadmap and technical implementation
              </p>
              <ul className="mt-6 space-y-2 text-left">
                {[
                  'Complete tokenomics breakdown',
                  'Technical architecture details',
                  'Roadmap and future plans',
                  'Risk assessment and disclaimers'
                ].map(item => (
                  <li key={item} className="flex items-start space-x-2">
                    <Image
                      src="/assets/Whitepaper/check.svg"
                      alt="Checkmark"
                      width={24}
                      height={24}
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block relative group hover:scale-105 transition-transform"
              >
                <Image
                  src="/assets/Whitepaper/view%20whitepaper%20background%20button.svg"
                  alt="View Whitepaper Button"
                  width={220}
                  height={50}
                  className="pointer-events-none select-none"
                />
                <span className="absolute inset-0 flex items-center justify-center font-bold text-white text-sm tracking-wider">
                  View Whitepaper
                </span>
              </a>
            </div>
          </div>

          {/* Mascot (only on large) */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none">
            <Image src="/assets/Whitepaper/middle%20logo.png" alt="Mascot" width={250} height={550} priority />
          </div>

          {/* Anchor for navigation */}
          <span id="audit" className="block absolute -top-24" aria-hidden="true"></span>
          {/* Security Audit Card */}
          <div className="relative w-full max-w-md mx-auto min-h-[640px]">
            <Image
              src="/assets/Whitepaper/border%20of%20audit.png"
              alt="Audit Card Border"
              fill
              className="object-contain pointer-events-none select-none"
            />
            <div className="relative pt-28 px-10 pb-10 flex flex-col items-center text-center">
              <div className="relative flex justify-center mb-4">
                <Image
                  src="/assets/Whitepaper/square%20border%20o%20audit.svg"
                  alt="Icon Frame"
                  width={124}
                  height={124}
                  className="pointer-events-none select-none"
                />
                <Image
                  src="/assets/Whitepaper/material-symbols-light_security-rounded.svg"
                  alt="Security Icon"
                  width={80}
                  height={80}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <h3 className="text-2xl font-primary font-bold text-white mt-6">Security Audit</h3>
              <p className="text-gray-300 text-sm mt-3 max-w-sm">
                Third-party security audit by leading blockchain security firms
              </p>
              {/* Decorative Icons */}
              <div className="flex items-center justify-center gap-16 mt-6">
                <Image src="/assets/Whitepaper/check.svg" alt="Check Icon" width={28} height={28} />
                <Image src="/assets/Whitepaper/check.svg" alt="Check Icon" width={28} height={28} />
              </div>
              {/* Auditor logos */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <Image src="/assets/Whitepaper/coinsult_full_new_web.png" alt="Coinsult" width={120} height={40} />
                <Image src="/assets/Whitepaper/solidproof.png" alt="SolidProof" width={120} height={40} />
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block relative group hover:scale-105 transition-transform"
              >
                <Image
                  src="/assets/Whitepaper/view%20audit%20background%20button.svg"
                  alt="View Audit Report Button"
                  width={220}
                  height={50}
                  className="pointer-events-none select-none"
                />
                <span className="absolute inset-0 flex items-center justify-center font-bold text-white text-sm tracking-wider">
                  View Audit Report
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
