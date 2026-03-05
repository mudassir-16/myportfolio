import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Outfit } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' })

export const metadata: Metadata = {
  title: 'Mohammed Mudassir | AI & Full Stack Developer',
  description: 'AI Developer | Automation Builder | Problem Solver | Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(inter.variable, mono.variable, outfit.variable, 'antialiased')}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
