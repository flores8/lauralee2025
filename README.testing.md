# Testing Guide

## Overview

This project uses Jest and React Testing Library for unit testing.

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Test Structure

### RootLayout Tests (`app/layout.test.js`)

Tests for the root layout component covering:
- Children rendering correctly
- Main element structure
- Navigation component presence
- Container div class
- Correct nesting of main and navigation elements
- Metadata (title and description)

### Home Component Tests (`app/page.test.js`)

Tests for the home page component covering:
- Heading text ("I'm Lauralee")
- First paragraph content (platform products)
- Second paragraph content (professional description)
- CoreWeave mention
- Intro div structure
- Paragraph count (3 paragraphs)
- Heading count (1 heading)
- Portfolio link verification

### Navigation Tests (`app/components/Navigation.test.js`)

Tests for the navigation component covering:
- All navigation links render (Home, About, Portfolio)
- Navigation is wrapped in nav element
- Link hrefs point to correct routes
- Active state logic:
  - Home active when on `/`
  - About active when on `/about`
  - Portfolio active when on `/portfolio` or any nested portfolio route
- Client-side pathname detection

### Portfolio Tests (`app/(main)/portfolio/page.test.js`)

Tests for the portfolio landing page covering:
- Main heading and introduction text
- Overview section
- Resume link with correct href and target attributes
- Project cards rendering from portfolio data
- Project titles, thesis statements, and roles
- Case study links with correct hrefs for each project
- Portfolio grid and container structure

### About Page Tests (`app/(main)/about/page.test.js`)

Tests for the about page covering:
- Main heading
- Key content sections (design philosophy, professional background, family, AI)
- Portfolio link verification
- Intro div structure

## Configuration

- **Jest Config**: `jest.config.js` - Configures Next.js integration
- **Setup File**: `jest.setup.js` - Loads @testing-library/jest-dom matchers
- **Test Environment**: jsdom (simulates browser environment)

## Writing New Tests

Follow these patterns:

1. Import testing utilities:
   ```js
   import { render, screen } from '@testing-library/react'
   ```

2. Mock CSS imports:
   ```js
   jest.mock('./styles.css', () => ({}))
   ```

3. Use descriptive test names with `it()` or `test()`

4. Use `screen` queries for better error messages

## Test Coverage

Current coverage includes:
- ✅ RootLayout component structure and children
- ✅ RootLayout metadata
- ✅ Home component content and structure
- ✅ Navigation component with active state logic
- ✅ Portfolio page with project data rendering
- ✅ About page content
- ✅ Link verification across pages

To add more coverage, create test files with `.test.js` extension next to the components you want to test.
