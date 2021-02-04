FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

RUN apt-get -y install npm

RUN npm install
RUN npm run build

ENV NODE_ENV=production

CMD [ "node", "/app/build/index.js" ]
