# Node Express TypeScript Prisma Starter

This project is a starter template for building a Node.js application using Express, TypeScript, and Prisma. It includes a set of tools and configurations to help you get started quickly with a modern development workflow.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Docker](#docker)
- [Linting and Formatting](#linting-and-formatting)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **Docker**: Containerization platform to build and run applications.
- **ESLint**: Pluggable JavaScript linter.
- **Prettier**: Code formatter.
- **Husky**: Git hooks made easy.
- **Lint-Staged**: Run linters on git staged files.

## Project Structure

```plaintext
.
├── .dockerignore
├── .env
├── .env.development
├── .env.example
├── .env.production
├── .gitignore
├── .husky/
│   ├── _/
│   ├── commit-msg
│   └── pre-commit
├── .prettierignore
├── .prettierrc
├── commitlint.config.js
├── docker/
│   ├── development/
│   └── production/
├── eslint.config.mjs
├── nginx/
│   ├── http.config
│   └── https.config
├── nodemon.json
├── package.json
├── pnpm-lock.yaml
├── prisma/
│   └── schema.prisma
├── public/
├── README.md
├── scripts/
│   └── temp.js
├── src/
│   ├── app.ts
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── routers/
│   ├── server.ts
│   ├── services/
│   └── util/
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js
- Docker (optional, for containerization)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/bamjam101/node-express-ts-prisma-starter.git
    cd node-express-ts-prisma-starter
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    ```sh
    cp .env.example .env
    ```

4. Run the development server:
    ```sh
    npm run dev
    ```

## Scripts

- `dev`: Run the development server with nodemon.
- `start`: Run the production server.
- `build`: Compile TypeScript to JavaScript.
- `prepare`: Set up Husky.
- `lint`: Run ESLint.
- `lint:fix`: Fix ESLint issues.
- `format:check`: Check code formatting with Prettier.
- `format:fix`: Fix code formatting with Prettier.
- `docker:dev`: Build the development Docker image.
- `docker:prod`: Build the production Docker image.

## Docker

### Development

## Build the Docker image:
### Development
```sh
npm run docker:dev
```
### Production
```sh
npm run docker:prod
```

## Run the Docker container (via Terminal):
### Development
```sh
docker run --rm -it -v ${PWD}:/app -v /app/node_modules -p 3000:3000 server-app:dev
```
### Production
```sh
docker run --rm -d -v ${PWD}:/app -v /app/node_modules -p 3000:3000 server-app:1.0.0
```

## Linting and Formatting
This project uses ESLint for linting and Prettier for code formatting. You can run the following commands to lint and format your code:
### Lint code:
```sh
npm run lint
```
### Fix linting issues:
```sh
npm run lint:fix
```
### Check code formatting:
```sh
npm run format:check
```
### Fix code formatting:
```sh
npm run format:fix
```

## Environment Variables
Environment variables are managed using .env files. You can create different .env files for different environments (e.g., .env.development, .env.production). The .env.example file provides a template for the required environment variables.

## License
This project is licensed under the ISC License.