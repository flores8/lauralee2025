import { render, screen } from '@testing-library/react'
import Navigation from './Navigation'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

const { usePathname } = require('next/navigation')

describe('Navigation', () => {
  beforeEach(() => {
    // Reset mock before each test
    usePathname.mockReset()
  })

  it('renders all navigation links', () => {
    usePathname.mockReturnValue('/')
    
    render(<Navigation />)
    
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument()
  })

  it('renders navigation within a nav element', () => {
    usePathname.mockReturnValue('/')
    
    render(<Navigation />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    expect(nav).toHaveClass('top-nav')
  })

  describe('Link hrefs', () => {
    it('Home link points to root path', () => {
      usePathname.mockReturnValue('/')
      
      render(<Navigation />)
      
      const homeLink = screen.getByRole('link', { name: 'Home' })
      expect(homeLink).toHaveAttribute('href', '/')
    })

    it('About link points to /about', () => {
      usePathname.mockReturnValue('/')
      
      render(<Navigation />)
      
      const aboutLink = screen.getByRole('link', { name: 'About' })
      expect(aboutLink).toHaveAttribute('href', '/about')
    })

    it('Work link points to /work', () => {
      usePathname.mockReturnValue('/')
      
      render(<Navigation />)
      
      const portfolioLink = screen.getByRole('link', { name: 'Work' })
      expect(portfolioLink).toHaveAttribute('href', '/work')
    })
  })

  describe('Active state', () => {
    it('marks Home as active when on home page', () => {
      usePathname.mockReturnValue('/')
      
      render(<Navigation />)
      
      const homeLink = screen.getByRole('link', { name: 'Home' })
      expect(homeLink).toHaveClass('active')
      
      const aboutLink = screen.getByRole('link', { name: 'About' })
      expect(aboutLink).not.toHaveClass('active')
      
      const portfolioLink = screen.getByRole('link', { name: 'Work' })
      expect(portfolioLink).not.toHaveClass('active')
    })

    it('marks About as active when on about page', () => {
      usePathname.mockReturnValue('/about')
      
      render(<Navigation />)
      
      const homeLink = screen.getByRole('link', { name: 'Home' })
      expect(homeLink).not.toHaveClass('active')
      
      const aboutLink = screen.getByRole('link', { name: 'About' })
      expect(aboutLink).toHaveClass('active')
      
      const portfolioLink = screen.getByRole('link', { name: 'Work' })
      expect(portfolioLink).not.toHaveClass('active')
    })

    it('marks Work as active when on portfolio page', () => {
      usePathname.mockReturnValue('/work')
      
      render(<Navigation />)
      
      const homeLink = screen.getByRole('link', { name: 'Home' })
      expect(homeLink).not.toHaveClass('active')
      
      const aboutLink = screen.getByRole('link', { name: 'About' })
      expect(aboutLink).not.toHaveClass('active')
      
      const portfolioLink = screen.getByRole('link', { name: 'Work' })
      expect(portfolioLink).toHaveClass('active')
    })

    it('marks Work as active when on portfolio detail pages', () => {
      usePathname.mockReturnValue('/work/platform-console')
      
      render(<Navigation />)
      
      const portfolioLink = screen.getByRole('link', { name: 'Work' })
      expect(portfolioLink).toHaveClass('active')
    })

    it('marks Work as active for any nested portfolio route', () => {
      usePathname.mockReturnValue('/work/some-project/nested-path')
      
      render(<Navigation />)
      
      const portfolioLink = screen.getByRole('link', { name: 'Work' })
      expect(portfolioLink).toHaveClass('active')
    })
  })
})
