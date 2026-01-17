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
- Paragraph count (2 paragraphs)
- Heading count (1 heading)

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

To add more coverage, create test files with `.test.js` extension next to the components you want to test.
