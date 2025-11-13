FROM node:20-alpine
WORKDIR /site

# Copy package files and install runtime deps
COPY package*.json ./
# If there's no lockfile yet, fall back to npm i
RUN npm ci --omit=dev || npm i --omit=dev

# Bring in the rest of the repo (index.html, src/, etc.)
COPY . .

# Ensure healthcheck tool is available
RUN apk add --no-cache wget

EXPOSE 8080
CMD ["npm","start"]
