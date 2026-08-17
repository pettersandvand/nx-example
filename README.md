# nx-example

A full-stack monorepo example built with [Nx](https://nx.dev), featuring a React weather frontend and a .NET backend API — wired together with OpenAPI code generation.

---

## What's in this repo

| Project | Type | Stack | Description |
|---|---|---|---|
| `weather` | App | React 19 + Vite + Tailwind | Weather frontend |
| `weather-e2e` | E2E tests | Playwright | End-to-end tests for the weather app |
| `my-api` | App | .NET (C#) | Backend REST API |
| `my-api-test` | Tests | .NET | API integration tests |
| `libs/generated` | Library | TypeScript | Auto-generated API client from OpenAPI spec |

---

## Prerequisites

- [Node.js](https://nodejs.org/) v20+
- [pnpm](https://pnpm.io/) v9+
- [.NET SDK](https://dotnet.microsoft.com/) 8+

---

## Getting started

```sh
# Install dependencies
pnpm install
```

---

## Running projects

### Frontend (weather app)

```sh
# Start dev server
pnpm nx serve weather

# Build for production
pnpm nx build weather

# Run unit tests
pnpm nx test weather

# Run E2E tests
pnpm nx e2e weather-e2e
```

### Backend (.NET API)

```sh
# Start the API
pnpm nx serve my-api

# Build
pnpm nx build my-api
```

### Regenerate the API client

The TypeScript client in `libs/generated` is auto-generated from the OpenAPI spec produced by `my-api`.

```sh
# 1. Regenerate the swagger spec from the running API
pnpm nx swagger my-api

# 2. Generate the TypeScript client
pnpm nx codegen generated
```

---

## Running all tasks

```sh
# Lint everything
pnpm nx run-many -t lint

# Test everything
pnpm nx run-many -t test

# Build everything
pnpm nx run-many -t build
```

---

## Visualise the project graph

```sh
pnpm nx graph
```

---

## Project structure

```
nx-example/
├── apps/
│   ├── weather/          # React frontend
│   ├── weather-e2e/      # Playwright E2E tests
│   ├── my-api/           # .NET backend
│   └── my-api-test/      # .NET API tests
├── libs/
│   └── generated/        # Auto-generated OpenAPI TypeScript client
├── nx.json               # Nx workspace configuration
├── tsconfig.base.json    # Shared TypeScript config
└── package.json
```

---

## Tech stack

- **[Nx 23](https://nx.dev)** — monorepo tooling, task orchestration, caching
- **[React 19](https://react.dev)** — UI framework
- **[Vite](https://vitejs.dev)** — frontend bundler
- **[Tailwind CSS v4](https://tailwindcss.com)** — utility-first styling
- **[.NET 8](https://dotnet.microsoft.com)** — backend API
- **[OpenAPI Generator](https://openapi-generator.tech)** — TypeScript client generation
- **[Vitest](https://vitest.dev)** — unit testing
- **[Playwright](https://playwright.dev)** — E2E testing
- **[ESLint](https://eslint.org)** — linting

---

## Useful links

- [Nx docs](https://nx.dev/getting-started/intro)
- [Nx React tutorial](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial)
- [Nx on CI](https://nx.dev/ci/intro/ci-with-nx)
- [nx-dotnet plugin](https://nx-dotnet.com)
