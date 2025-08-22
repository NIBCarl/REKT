'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import type { FAQItem } from '@/data/faqItems'
import { faqItems } from '@/data/faqItems'

function PlusIcon({ open }: { open: boolean }) {
  const color = open ? 'var(--bright-cyan-glow)' : 'var(--text-primary)'
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {open ? (
        <rect x="4" y="11" width="16" height="2" rx="1" fill={color} />
      ) : (
        <>
          <rect x="4" y="11" width="16" height="2" rx="1" fill={color} />
          <rect x="11" y="4" width="2" height="16" rx="1" fill={color} />
        </>
      )}
    </svg>
  )
}

function FAQItemRow({ item, index, isOpen, onToggle, headerRef }: {
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: (index: number) => void
  headerRef: (el: HTMLButtonElement | null) => void
}) {
  const panelId = `faq-panel-${item.id}`
  const headerId = `faq-header-${item.id}`

  // Background frame swap based on state
  const bgUrl = isOpen
    ? "/assets/Whitepaper/FAQ/opened question frame.png"
    : "/assets/Whitepaper/FAQ/unopened question frame.png"

  return (
    <div
      className="relative rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay to ensure readability on top of frame */}
      <div className="bg-black/30">
        <div className="p-6 md:p-6 transition-all duration-300">
          <button
            ref={headerRef}
            id={headerId}
            aria-controls={panelId}
            aria-expanded={isOpen}
            className="w-full text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
            onClick={() => onToggle(index)}
          >
            <h3 className="text-lg font-semibold text-white">
              {item.question}
            </h3>
            <span className="shrink-0" aria-hidden="true">
              <PlusIcon open={isOpen} />
            </span>
            <span className="sr-only">{isOpen ? 'Collapse' : 'Expand'}</span>
          </button>

          {isOpen && (
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="mt-4 pt-4 border-t border-purple-500/30"
            >
              <p className="text-gray-300 font-secondary leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const headerRefs = useRef<Array<HTMLButtonElement | null>>([])

  const setHeaderRef = useCallback((el: HTMLButtonElement | null, i: number) => {
    headerRefs.current[i] = el
  }, [])

  const onToggle = useCallback((i: number) => {
    setOpenIndex(prev => (prev === i ? null : i))
  }, [])

  const focusHeader = (i: number) => {
    const clamped = Math.max(0, Math.min(faqItems.length - 1, i))
    headerRefs.current[clamped]?.focus()
  }

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        focusHeader(i + 1)
        break
      case 'ArrowUp':
        e.preventDefault()
        focusHeader(i - 1)
        break
      case 'Home':
        e.preventDefault()
        focusHeader(0)
        break
      case 'End':
        e.preventDefault()
        focusHeader(faqItems.length - 1)
        break
      // Enter/Space handled by button default activation
    }
  }

  useEffect(() => {
    // Ensure ref array is correct length
    headerRefs.current = headerRefs.current.slice(0, faqItems.length)
  }, [])

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-20 bg-gradient-to-b from-purple-900/10 to-transparent">
      <div className="container relative z-10">
        {/* Neon divider line separating from Whitepaper section */}
        <div className="relative overflow-hidden w-screen -ml-[50vw] left-1/2 h-0.5 mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" aria-hidden="true"></div>
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-primary font-bold leading-tight">
            <span className="text-cyan-400">F</span>requently <span className="text-purple-500">A</span>sked <span className="text-cyan-400">Q</span>uestions
          </h2>
          <p className="text-gray-300 mt-3 text-lg">Everything you need to know about getting REKT</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, i) => (
            <div key={item.id} onKeyDown={(e) => onKeyDown(e, i)}>
              <FAQItemRow
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={onToggle}
                headerRef={(el) => setHeaderRef(el, i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
