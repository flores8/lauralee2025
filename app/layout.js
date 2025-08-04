import './globals.css'
import InteractiveFooter from './components/InteractiveFooter'

export const metadata = {
  title: 'Lauralee - Designer, Wife, Mother, Lifelong Learner',
  description: 'The quiet center of everything I do. A personal narrative and bio hub.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,300;0,400;0,500;1,400&family=Nunito:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <div className="container">
          <main>
            {children}
          </main>
          <InteractiveFooter />
        </div>
      </body>
    </html>
  )
}