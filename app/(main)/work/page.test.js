import { render, screen } from '@testing-library/react'
import Portfolio from './page'
import { projects } from './portfolio-data'

describe('Portfolio', () => {
  it('renders the main heading', () => {
    render(<Portfolio />)
    
    const heading = screen.getByRole('heading', { name: 'Selected work', level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('renders the portfolio introduction text', () => {
    render(<Portfolio />)
    
    const intro = screen.getByText(/A look at how I approach complex product problems/)
    expect(intro).toBeInTheDocument()
  })

  it('offers the PDF as the only resume download', () => {
    render(<Portfolio />)

    const pdfLink = screen.getByRole('link', { name: /Resume \(PDF\)/ })
    expect(pdfLink).toHaveAttribute('href', '/resume/lauralee-flores-resume.pdf')
    expect(pdfLink).toHaveAttribute('target', '_blank')
    expect(pdfLink).toHaveAttribute('rel', 'noopener noreferrer')

    const resumeLinks = screen.getAllByRole('link').filter((link) => link.getAttribute('href')?.startsWith('/resume/'))
    expect(resumeLinks).toEqual([pdfLink])
  })

  describe('Project cards', () => {
    it('renders all projects with Permissions first', () => {
      render(<Portfolio />)

      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings).toHaveLength(projects.length)
      projects.forEach((project, index) => {
        expect(headings[index]).toHaveAccessibleName(project.title)
      })
      expect(headings[0]).toHaveAccessibleName('Reframing access as a platform communication problem')
    })

    it('renders project thesis for each project', () => {
      render(<Portfolio />)
      
      projects.forEach((project) => {
        expect(screen.getByText(project.thesis)).toBeInTheDocument()
      })
    })

    it('uses each project title as its case study link', () => {
      render(<Portfolio />)

      projects.forEach((project) => {
        const link = screen.getByRole('link', { name: project.title })
        expect(link).toHaveAttribute('href', `/work/${project.slug}`)
      })
    })

    it('renders portfolio cards with correct structure', () => {
      const { container } = render(<Portfolio />)
      
      const portfolioCards = container.querySelectorAll('.portfolio-card')
      expect(portfolioCards).toHaveLength(projects.length)
      
      portfolioCards.forEach((card) => {
        expect(card.querySelector('h2 .portfolio-card-link')).toBeInTheDocument()
        expect(card.querySelector('.portfolio-card-thesis')).toBeInTheDocument()
      })
    })
  })

  describe('Portfolio grid structure', () => {
    it('renders portfolio grid container', () => {
      const { container } = render(<Portfolio />)
      
      const portfolioGrid = container.querySelector('.portfolio-grid')
      expect(portfolioGrid).toBeInTheDocument()
    })

    it('renders portfolio overview container', () => {
      const { container } = render(<Portfolio />)
      
      const portfolioOverview = container.querySelector('.portfolio-overview')
      expect(portfolioOverview).toBeInTheDocument()
    })
  })
})
