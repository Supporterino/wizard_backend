# Building stage

FROM node:12.20.1 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src
RUN npm ci && npm run build

# Production stage

FROM node:12.20.1-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
#COPY ./client ./client
RUN npm ci

COPY --from=builder /usr/src/app/build ./build

CMD [ "node", "/app/build/index.js" ]
