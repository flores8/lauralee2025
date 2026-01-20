import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  it('renders the heading "I\'m Lauralee"', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("I'm Lauralee")
  })

  it('renders the first paragraph about designing platform products', () => {
    render(<Home />)
    
    const paragraph = screen.getByText(/I design platform products that make complex systems legible and scalable/)
    expect(paragraph).toBeInTheDocument()
  })

  it('renders the second paragraph with professional description', () => {
    render(<Home />)
    
    const paragraph = screen.getByText(/I'm a staff product designer working at the intersection/)
    expect(paragraph).toBeInTheDocument()
  })

  it('includes mention of CoreWeave in the description', () => {
    render(<Home />)
    
    const text = screen.getByText(/CoreWeave/)
    expect(text).toBeInTheDocument()
  })

  it('renders content within an intro div', () => {
    const { container } = render(<Home />)
    
    const introDiv = container.querySelector('.intro')
    expect(introDiv).toBeInTheDocument()
  })

  it('renders all expected text content', () => {
    render(<Home />)
    
    // Check for key phrases
    expect(screen.getByText("I'm Lauralee")).toBeInTheDocument()
    expect(screen.getByText(/design platform products/)).toBeInTheDocument()
    expect(screen.getByText(/staff product designer/)).toBeInTheDocument()
    expect(screen.getByText(/infrastructure, AI, and systems design/)).toBeInTheDocument()
    expect(screen.getByText(/CoreWeave/)).toBeInTheDocument()
  })

  it('renders exactly three paragraphs', () => {
    const { container } = render(<Home />)
    
    const paragraphs = container.querySelectorAll('p')
    expect(paragraphs).toHaveLength(3)
  })

  it('renders one heading', () => {
    const { container } = render(<Home />)
    
    const headings = container.querySelectorAll('h1')
    expect(headings).toHaveLength(1)
  })

  it('renders portfolio link with correct href', () => {
    render(<Home />)
    
    const portfolioLink = screen.getByRole('link', { name: /View selected work/ })
    expect(portfolioLink).toBeInTheDocument()
    expect(portfolioLink).toHaveAttribute('href', '/portfolio')
  })
})
