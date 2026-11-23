import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  it('renders the full name in the heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('I’m Lauralee Flores')
  })

  it('renders content within an intro div', () => {
    const { container } = render(<Home />)
    
    const introDiv = container.querySelector('.intro')
    expect(introDiv).toBeInTheDocument()
  })

  it('leads with team building and ends the intro with an invitation to compare notes', () => {
    const { container } = render(<Home />)

    const paragraphs = [...container.querySelectorAll('p')].map((paragraph) => paragraph.textContent)
    expect(paragraphs).toEqual([
      'I build design teams and research practices. I love helping people grow into roles where they can lead more of the work.',
      'At CoreWeave, I started the product design function and now lead four Staff designers. I also hired a Staff UX Researcher, and we’re building a practice that brings customer research into more product decisions.',
      'If you’re building a design or research team in a complex product organization, I’d love to compare notes on how you give people room to lead.',
    ])
  })

  it('renders one heading', () => {
    const { container } = render(<Home />)
    
    const headings = container.querySelectorAll('h1')
    expect(headings).toHaveLength(1)
  })

  it('puts LinkedIn first and Selected Work second directly after the invitation', () => {
    render(<Home />)

    const invitation = screen.getByText(/I’d love to compare notes/)
    const links = screen.getAllByRole('link')
    const linkedin = screen.getByRole('link', { name: 'Connect on LinkedIn' })
    const work = screen.getByRole('link', { name: 'View selected work' })

    expect(links).toEqual([linkedin, work])
    expect(invitation.nextElementSibling).toContainElement(linkedin)
    expect(invitation.nextElementSibling).toContainElement(work)
    expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/lauraleeflores')
    expect(work).toHaveAttribute('href', '/work')
    expect(linkedin).toHaveTextContent('↗')
    expect(work).toHaveTextContent('→')
  })
})
