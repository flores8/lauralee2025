import { render, screen } from '@testing-library/react'
import About from './page'

describe('About', () => {
  it('renders the main heading', () => {
    render(<About />)
    
    const heading = screen.getByRole('heading', { name: 'About', level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('describes the current team and hiring decisions', () => {
    render(<About />)

    expect(screen.getByText(/Today I lead four Staff designers and a UX researcher/)).toBeInTheDocument()
    const hiring = screen.getByText(/When acquisitions brought new teams and products together/)
    expect(hiring).toHaveTextContent('a shared design system and hired a Staff designer to lead it')
    expect(hiring).toHaveTextContent('I hired CoreWeave’s first UX researcher to build a dedicated practice')
  })

  it('renders professional background content', () => {
    render(<About />)
    
    const background = screen.getByText(/I came to design through research/)
    expect(background).toHaveTextContent('human-computer interaction and psychology')
    expect(background).toHaveTextContent('machine learning engineers at Weights & Biases')
  })

  it('describes how research shapes mentorship', () => {
    render(<About />)

    expect(screen.getByText(/The curiosity I brought to research shows up in how I mentor/)).toHaveTextContent(
      'giving people room to use their own judgment'
    )
  })

  it('links to LinkedIn first and Selected Work second', () => {
    render(<About />)

    const linkedin = screen.getByRole('link', { name: 'Connect on LinkedIn' })
    const work = screen.getByRole('link', { name: 'View selected work' })

    expect(screen.getAllByRole('link')).toEqual([linkedin, work])
    expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/lauraleeflores')
    expect(work).toHaveAttribute('href', '/work')
  })

  it('renders content within intro div', () => {
    const { container } = render(<About />)
    
    const introDiv = container.querySelector('.intro')
    expect(introDiv).toBeInTheDocument()
  })
})
