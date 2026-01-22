import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Lauralee Flores — Systems & Platform Product Designer',
  description: 'Staff product designer focused on system-level UX, platform foundations, and designing products that scale with clarity and trust.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <div className="container">
          <nav>
            <a href="https://lauralee.design" target="_blank" rel="noopener noreferrer">lauralee.design</a>
            {' · '}
            <a href="https://lauralee.space" target="_blank" rel="noopener noreferrer">lauralee.space</a>
          </nav>
          <main>
            {children}
          </main>
          <footer>
            <p>© {new Date().getFullYear()} Lauralee</p>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  )
}