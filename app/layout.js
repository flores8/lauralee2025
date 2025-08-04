import './globals.css'

export const metadata = {
  title: 'Lauralee - Designer, Wife, Mother, Lifelong Learner',
  description: 'The quiet center of everything I do. A personal narrative and bio hub.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,300;0,400;0,500;1,400&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" 
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
      </body>
    </html>
  )
}