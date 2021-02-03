FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

RUN npm -v
RUN node -v

RUN npm install --loglevel verbose
RUN npm run build

ENV NODE_ENV=production

CMD [ "node", "/app/build/index.js" ]
