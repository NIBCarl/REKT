import type { Metadata } from 'next'
import { Inter, Orbitron, Audiowide } from 'next/font/google'
import './globals.css'
import PageTransitionLoader from '@/components/Layout/PageTransitionLoader'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

const audiowide = Audiowide({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-audiowide',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '$REKT - Only losers win',
  description: 'Embrace the crash. The first memecoin that rewards your losses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} ${audiowide.variable} bg-background-main text-text-primary antialiased`}>
        <PageTransitionLoader />
        {children}
      </body>
    </html>
  )
}
