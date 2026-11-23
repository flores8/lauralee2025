import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  it('renders the full name in the heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('I’m Lauralee Flores')
  })

  it('describes Lauralee’s design leadership at CoreWeave', () => {
    render(<Home />)
    
    const paragraph = screen.getByText(/I built CoreWeave’s product design function from the ground up/)
    expect(paragraph).toHaveTextContent('I lead four Staff designers')
  })

  it('links the cross-team permissions example to the case study', () => {
    render(<Home />)
    
    const link = screen.getByRole('link', { name: 'permissions work' })
    expect(link).toHaveAttribute('href', '/work/permission-aware-systems')
    expect(link.closest('p')).toHaveTextContent('problems that sit between teams and systems')
  })

  it('renders content within an intro div', () => {
    const { container } = render(<Home />)
    
    const introDiv = container.querySelector('.intro')
    expect(introDiv).toBeInTheDocument()
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
    expect(portfolioLink).toHaveAttribute('href', '/work')
  })
})
