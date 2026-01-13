# Use latest stable Node.js Alpine image for development
FROM node:alpine

# Set working directory
WORKDIR /app

# Install dependencies (will be re-run if package.json changes)
COPY package.json .
COPY package-lock.json .
RUN npm ci || npm install

# Copy the rest of the app (for initial build, but will be overridden by volume in compose)
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
