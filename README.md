# Learning MonoRepo

A hands-on frontend monorepo project built to understand how a modern application moves from development to production.

The project covers the complete development and deployment lifecycle:

**Code → Test → Quality Check → Release → Deploy → Production**

## Tech Stack

| Area | Technology |
|---|---|
| Monorepo | pnpm Workspaces, Lerna |
| Frontend | React, TypeScript, Vite |
| Testing | Jest, React Testing Library |
| Linting | ESLint |
| Code Quality | SonarCloud |
| CI/CD | GitHub Actions |
| Release Management | Semantic Release |
| Hosting | AWS S3, CloudFront |

## Repository Structure

```text
Learning_MonoRepo/
├── .github/
│   └── workflows/
│       ├── pull-request.yml
│       ├── quality-gate.yml
│       ├── release.yml
│       └── deploy.yml
│
├── apps/
│   └── customer-portal/
│       ├── src/
│       ├── public/
│       ├── test/
│       └── package.json
│
├── packages/
│   ├── eslint-config/
│   ├── typescript-config/
│   ├── jest-config/
│   ├── ui/
│   └── utils/
│
├── .release.config.cjs
├── sonar-project.properties
├── lerna.json
├── pnpm-workspace.yaml
├── package.json
└── pnpm-lock.yaml
```

## Why a Monorepo?

A monorepo keeps multiple applications and shared packages inside one repository.

For example, shared UI components, TypeScript configuration, ESLint configuration, and testing configuration can be maintained in one place and reused across applications.

```text
Learning_MonoRepo
│
├── apps
│   └── customer-portal
│
└── packages
    ├── ui
    ├── utils
    ├── eslint-config
    ├── typescript-config
    └── jest-config
```

## Why pnpm + Lerna?

**pnpm Workspaces** manages the packages inside the monorepo and handles dependencies efficiently.

**Lerna** is used to run scripts across the workspace packages.

For example:

```bash
pnpm build
pnpm test
pnpm lint
```

These commands can run the corresponding scripts across the required workspace packages.

## Why Shared Packages?

The project uses shared packages for common configuration and reusable code.

Instead of creating the same configuration for every application, it can be maintained once and reused.

```text
packages/
├── eslint-config/
├── typescript-config/
├── jest-config/
├── ui/
└── utils/
```

This helps keep the project consistent as more applications are added.

## CI/CD Workflow

The project uses GitHub Actions to automate the development and deployment process.

### Pull Request Workflow

When a Pull Request is opened against `main`, the quality pipeline runs:

```text
Pull Request
     │
     ▼
TypeScript Check
     │
     ▼
ESLint
     │
     ▼
Unit Tests
     │
     ▼
Production Build
     │
     ▼
SonarCloud
```

These checks help verify that the code is ready to be merged.

### Release and Deployment Workflow

After changes are merged into `main`:

```text
Push to main
     │
     ▼
Quality Gates
     │
     ▼
Semantic Release
     │
     ▼
Build Artifact
     │
     ▼
AWS S3
     │
     ▼
CloudFront
     │
     ▼
Production
```

## Why Semantic Release?

Semantic Release automates version management.

Based on Conventional Commit messages, it can determine whether a new release is required and create the release automatically.

This removes the need to manually manage:

* Version numbers
* Git tags
* Changelogs
* GitHub Releases

## Why SonarCloud?

SonarCloud is used to analyse the codebase for code quality and maintainability issues.

It is included as one of the quality gates in the CI pipeline.

```text
Code
 │
 ▼
SonarCloud
 │
 ├── Code Quality
 ├── Code Issues
 └── Test Coverage
```

## Why AWS S3 + CloudFront?

The React application produces static files after the production build.

These files are deployed to **Amazon S3**, while **CloudFront** is used as the CDN to deliver the application to users.

```text
React Build
     │
     ▼
  S3 Bucket
     │
     ▼
 CloudFront
     │
     ▼
   Users
```

## Useful Commands

Run these commands from the repository root:

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Run tests
pnpm test

# Run linting
pnpm lint

# Create production build
pnpm build
```

## What I Am Learning

This project focuses on understanding:

* Monorepo architecture
* pnpm Workspaces
* Lerna
* Shared packages
* React + TypeScript
* Unit testing
* ESLint
* SonarCloud
* GitHub Actions
* CI/CD pipelines
* Semantic Release
* AWS S3
* CloudFront
* Automated frontend deployment

The main goal is to understand how these tools work together to take a frontend application from **local development to production deployment**.