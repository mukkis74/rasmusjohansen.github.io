FROM node:20-alpine
WORKDIR /site
COPY package*.json ./        # needs package.json to exist
RUN npm ci --omit=dev
COPY . .
EXPOSE 8080
CMD ["npm","start"]
