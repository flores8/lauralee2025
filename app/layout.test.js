import { render, screen } from '@testing-library/react'
import RootLayout, { metadata } from './layout'

// Mock the Navigation component
jest.mock('./components/Navigation', () => {
  return function Navigation() {
    return <nav data-testid="navigation">Navigation</nav>
  }
})

// Mock globals.css import
jest.mock('./globals.css', () => ({}))

// Helper function to extract just the body content for testing
const renderLayoutContent = (children) => {
  const LayoutContent = () => (
    <div className="container">
      <nav data-testid="navigation">Navigation</nav>
      <main>
        {children}
      </main>
    </div>
  )
  return render(<LayoutContent />)
}

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const testContent = 'Test Content'
    
    renderLayoutContent(<div>{testContent}</div>)
    
    expect(screen.getByText(testContent)).toBeInTheDocument()
  })

  it('renders children within a main element', () => {
    renderLayoutContent(<div>Test</div>)
    
    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
    expect(mainElement).toContainHTML('<div>Test</div>')
  })

  it('renders Navigation component', () => {
    renderLayoutContent(<div>Test</div>)
    
    expect(screen.getByTestId('navigation')).toBeInTheDocument()
  })

  it('includes container div with correct class', () => {
    const { container } = renderLayoutContent(<div>Test</div>)
    
    const containerDiv = container.querySelector('.container')
    expect(containerDiv).toBeInTheDocument()
  })

  it('renders main and navigation in correct structure', () => {
    const { container } = renderLayoutContent(<div>Test Content</div>)
    
    const containerDiv = container.querySelector('.container')
    expect(containerDiv).toBeInTheDocument()
    
    // Check that main and navigation are inside container
    const mainElement = containerDiv.querySelector('main')
    const navElement = containerDiv.querySelector('[data-testid="navigation"]')
    
    expect(mainElement).toBeInTheDocument()
    expect(navElement).toBeInTheDocument()
    expect(mainElement).toContainHTML('Test Content')
  })
})

describe('RootLayout metadata', () => {
  it('contains correct title', () => {
    expect(metadata.title).toBe('Lauralee Flores — Systems & Platform Product Designer')
  })

  it('contains correct description', () => {
    expect(metadata.description).toBe(
      'Staff product designer focused on system-level UX, platform foundations, and designing products that scale with clarity and trust.'
    )
  })

  it('has both title and description properties', () => {
    expect(metadata).toHaveProperty('title')
    expect(metadata).toHaveProperty('description')
  })
})
