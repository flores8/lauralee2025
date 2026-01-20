import { render, screen } from '@testing-library/react'
import About from './page'

describe('About', () => {
  it('renders the main heading', () => {
    render(<About />)
    
    const heading = screen.getByRole('heading', { name: 'About', level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('renders key content about design philosophy', () => {
    render(<About />)
    
    expect(screen.getByText(/Design has always been my way of understanding the world/)).toBeInTheDocument()
    expect(screen.getByText(/platform systems that make complex technology legible/)).toBeInTheDocument()
  })

  it('renders professional background content', () => {
    render(<About />)
    
    expect(screen.getByText(/began my career in user research/)).toBeInTheDocument()
    expect(screen.getByText(/Human–Computer Interaction and psychology/)).toBeInTheDocument()
  })

  it('renders personal content about family', () => {
    render(<About />)
    
    expect(screen.getByText(/wife and mother of two teenagers/)).toBeInTheDocument()
  })

  it('renders content about AI and technology', () => {
    render(<About />)
    
    expect(screen.getByText(/AI is collapsing the distance between idea and execution/)).toBeInTheDocument()
  })

  it('renders portfolio link with correct href', () => {
    render(<About />)
    
    const portfolioLink = screen.getByRole('link', { name: /View selected work/ })
    expect(portfolioLink).toBeInTheDocument()
    expect(portfolioLink).toHaveAttribute('href', '/portfolio')
  })

  it('renders content within intro div', () => {
    const { container } = render(<About />)
    
    const introDiv = container.querySelector('.intro')
    expect(introDiv).toBeInTheDocument()
  })

  it('contains key themes: design, systems, family, AI', () => {
    render(<About />)
    
    // Check that all major content sections are present
    expect(screen.getByText(/Design has always been my way/)).toBeInTheDocument()
    expect(screen.getByText(/platform systems/)).toBeInTheDocument()
    expect(screen.getByText(/wife and mother/)).toBeInTheDocument()
    expect(screen.getByText(/AI is collapsing/)).toBeInTheDocument()
  })
})
