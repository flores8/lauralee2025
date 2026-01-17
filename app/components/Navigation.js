'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  const isHomeActive = pathname === '/'
  const isAboutActive = pathname === '/about'
  const isPortfolioActive = pathname.startsWith('/portfolio')

  return (
    <nav className="top-nav">
      <Link href="/" className={isHomeActive ? 'active' : ''}>
        Home
      </Link>
      {/* <span className="nav-separator">|</span> */}
      <Link href="/about" className={isAboutActive ? 'active' : ''}>
        About
      </Link>
      {/* <span className="nav-separator">|</span> */}
      <Link href="/portfolio" className={isPortfolioActive ? 'active' : ''}>
        Portfolio
      </Link>
    </nav>
  )
}
