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
    
    const intro = screen.getByText(/These case studies focus on foundational platform design/)
    expect(intro).toBeInTheDocument()
  })

  it('renders the Overview section', () => {
    render(<Portfolio />)
    
    const overviewHeading = screen.getByRole('heading', { name: 'Overview', level: 2 })
    expect(overviewHeading).toBeInTheDocument()
    
    const overviewText = screen.getByText(/system-level design decisions/)
    expect(overviewText).toBeInTheDocument()
  })

  it('renders resume link with correct href', () => {
    render(<Portfolio />)
    
    const resumeLink = screen.getByRole('link', { name: /Resume \(PDF\)/ })
    expect(resumeLink).toBeInTheDocument()
    expect(resumeLink).toHaveAttribute('href', 'https://lauraleeflores-com-website.s3.us-east-2.amazonaws.com/lauralee-flores-resume.pdf')
    expect(resumeLink).toHaveAttribute('target', '_blank')
    expect(resumeLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  describe('Project cards', () => {
    it('renders all projects from portfolio data', () => {
      render(<Portfolio />)
      
      // Should render all projects
      expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(projects.length + 1) // +1 for Overview heading
      
      // Check each project is rendered
      projects.forEach((project) => {
        expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument()
      })
    })

    it('renders project thesis for each project', () => {
      render(<Portfolio />)
      
      projects.forEach((project) => {
        expect(screen.getByText(project.thesis)).toBeInTheDocument()
      })
    })

    it('renders project role for each project', () => {
      const { container } = render(<Portfolio />)
      
      // All projects have the same role, so check that we have the right number of role elements
      const roleElements = container.querySelectorAll('.portfolio-card-role')
      expect(roleElements).toHaveLength(projects.length)
      
      // Verify they all contain the expected role text
      roleElements.forEach((element) => {
        expect(element).toHaveTextContent('Staff Product Designer · CoreWeave')
      })
    })

    it('renders "View case study" links for each project with correct href', () => {
      render(<Portfolio />)
      
      const caseStudyLinks = screen.getAllByRole('link', { name: /View case study/ })
      expect(caseStudyLinks).toHaveLength(projects.length)
      
      // Verify each project has a corresponding link with correct href
      projects.forEach((project) => {
        const linkWithHref = caseStudyLinks.find(
          link => link.getAttribute('href') === `/portfolio/${project.slug}`
        )
        expect(linkWithHref).toBeTruthy()
      })
    })

    it('renders portfolio cards with correct structure', () => {
      const { container } = render(<Portfolio />)
      
      const portfolioCards = container.querySelectorAll('.portfolio-card')
      expect(portfolioCards).toHaveLength(projects.length)
      
      portfolioCards.forEach((card) => {
        // Each card should have a heading, thesis, role, and link
        expect(card.querySelector('h2')).toBeInTheDocument()
        expect(card.querySelector('.portfolio-card-thesis')).toBeInTheDocument()
        expect(card.querySelector('.portfolio-card-role')).toBeInTheDocument()
        expect(card.querySelector('.portfolio-card-link')).toBeInTheDocument()
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

    it('renders how-to-read section', () => {
      const { container } = render(<Portfolio />)
      
      const howToRead = container.querySelector('.how-to-read')
      expect(howToRead).toBeInTheDocument()
    })
  })
})
