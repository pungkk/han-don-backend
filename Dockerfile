# Use Node.js 20 as base image
FROM node:20.0.0-alpine

# Set working directory
WORKDIR /usr/src/app

# Create non-root user first
RUN addgroup -g 1001 -S nodejs && adduser -S nestjs -u 1001

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy source code
COPY . .

# Fix ownership of all files to the nestjs user
RUN chown -R nestjs:nodejs /usr/src/app

# Switch to non-root user
USER nestjs

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
