# Dockerfile
FROM node:20-alpine

# 1) Work in a clean, guaranteed directory
WORKDIR /site

# 2) Copy only package files and install deps (fast layer cache)
#    NOTE: the destination is "./" (a directory), not "exist"
COPY package.json package-lock.json* ./
RUN [ -f package.json ] && npm ci --omit=dev || true

# Add Allure to Newman (Postman API Tests)
FROM postman/newman:alpine
RUN npm install -g newman-reporter-htmlextra newman-reporter-allure

# 3) Copy the rest of your project
COPY . .

# 4) Run your tiny static server wrapper (you should have src/server.js)
EXPOSE 8080
CMD ["npm","start"]
