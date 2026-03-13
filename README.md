# Unit Testing Workshop - React, Jest & React Testing Library

A hands-on workshop designed to introduce developers to unit testing in React applications using Jest and React Testing Library. This project provides practical examples and exercises that progressively build testing skills, from basic component rendering to complex interactions and async operations.

## About This Workshop

This workshop is structured as a learning path through five practical examples, each focusing on different aspects of unit testing React components. Participants will learn how to write effective tests, use React Testing Library queries, handle user interactions, mock API calls, and test complex component behaviors.

## Project Structure

```
UnitTesting-workshop/
├── src/
│   ├── components/          # React components for testing
│   │   ├── Example1/        # Simple input component
│   │   ├── Example2/        # Product list component
│   │   ├── Example3/        # Counter with state
│   │   ├── Example4/        # Data fetching component
│   │   └── Example5/        # Selectable product list
│   │
│   ├── __tests__/           # Test files organized by example
│   │   ├── Example1/
│   │   │   ├── SimpleInput.test.tsx      # Exercise tests
│   │   │   └── Solution1.test.tsx        # Solution tests
│   │   ├── Example2/
│   │   │   ├── ProductList.test.tsx
│   │   │   └── Solution2.test.tsx
│   │   ├── Example3/
│   │   │   ├── SimpleCounter.test.tsx
│   │   │   └── Solution3.test.tsx
│   │   ├── Example4/
│   │   │   ├── SimpleDataFetch.test.tsx
│   │   │   └── Solution4.test.tsx
│   │   └── Example5/
│   │       ├── Example5.test.tsx
│   │       └── Solution5.test.tsx
│   │
│   ├── services/            # API service functions
│   └── utils/               # Utility functions
│
├── jest.config.ts           # Jest configuration
├── jest.setup.ts            # Jest setup and extensions
└── vite.config.ts           # Vite configuration
```

## Workshop Examples

Each example builds on previous concepts and introduces new testing techniques:

1. **Example 1: Simple Input** - Basic component rendering and querying elements
2. **Example 2: Product List** - Testing lists and conditional rendering
3. **Example 3: Simple Counter** - User interactions and state changes
4. **Example 4: Simple Data Fetch** - Async operations and mocking API calls
5. **Example 5: Selectable Product List** - Complex interactions and multiple state changes

## Requirements

- Node.js v16.13.0 or higher

## Setup

Install dependencies:

```bash
npm install
```

## Running Tests

Run all tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm run coverage
```

## Development

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Technologies

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Jest** - Testing framework
- **React Testing Library** - React component testing utilities
- **@testing-library/user-event** - User interaction simulation
- **@testing-library/jest-dom** - Custom Jest matchers

## Learning Path

1. Start with the component in each example folder
2. Review the corresponding test file in `__tests__/ExampleN/`
3. Try writing tests yourself
4. Compare with the solution file when ready
5. Run tests to verify your implementation

## Key Testing Concepts Covered

- Rendering components
- Querying elements (getBy, findBy, queryBy)
- Testing user interactions
- Mocking functions and modules
- Async/await testing
- Test organization and best practices
