'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  const isHomeActive = pathname === '/'
  const isAboutActive = pathname === '/about'
  const isWorkActive = pathname.startsWith('/work')

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
      <Link href="/work" className={isWorkActive ? 'active' : ''}>
        Work
      </Link>
    </nav>
  )
}
