# Using Lightweight docker image for node
FROM node:20-alpine AS base

# Setting Up Working Directory
WORKDIR /app

# Copying Package Files
COPY package.json ./

# Installing Dependencies
RUN npm install

# Copying Files
COPY . .

# Build TypeScript Project
RUN npm run build

# Exposing Port
EXPOSE 3000

# Start Application
CMD ["npm", "run", "start"]