'use client'

import { useState, useEffect } from 'react'

export default function InteractiveFooter() {
  const [isVisible, setIsVisible] = useState(false)
  const [hideTimer, setHideTimer] = useState(null)

  useEffect(() => {
    const showFooter = () => {
      setIsVisible(true)
      
      // Clear existing timer
      if (hideTimer) {
        clearTimeout(hideTimer)
      }
      
      // Set new timer to hide footer after 3 seconds of inactivity
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 3000)
      
      setHideTimer(timer)
    }

    // Show footer on mouse movement or scroll
    window.addEventListener('mousemove', showFooter)
    window.addEventListener('scroll', showFooter)
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', showFooter)
      window.removeEventListener('scroll', showFooter)
      if (hideTimer) {
        clearTimeout(hideTimer)
      }
    }
  }, [hideTimer])

  return (
    <footer className={isVisible ? 'visible' : ''}>
      <div className="footer-links">
        <a href="https://lauralee.design" target="_blank" rel="noopener noreferrer">My design work</a>
        {' · '}
        <a href="https://lauralee.space" target="_blank" rel="noopener noreferrer">My creative playground</a>
      </div>
    </footer>
  )
}