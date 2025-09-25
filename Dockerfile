# Use official Node LTS image
FROM node:5-alpine

WORKDIR /app

# copy package.json first to leverage Docker cache
COPY package.json package-lock.json* ./

# install dependencies
RUN npm ci --only=production || npm install --only=production

# copy app
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]