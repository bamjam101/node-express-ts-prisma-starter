# Using Lightweight docker image for node
FROM node:20-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Setting Up Working Directory
WORKDIR /app

# Copying Package Files
COPY package.json pnpm-lock.yaml  ./

# Installing Dependencies
RUN pnpm install --frozen-lockfile

# Copying Files
COPY . .

# Exposing Port
EXPOSE 3000

# Start Application
CMD ["pnpm", "dev"]