FROM node:20-alpine
WORKDIR /site
COPY package*.json ./           # if package*.json absent, create them first
RUN npm ci --omit=dev || true   # okay if no lockfile yet
COPY . .
EXPOSE 8080
CMD ["npm","start"]
