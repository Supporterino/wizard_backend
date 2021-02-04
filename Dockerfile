FROM ubuntu:focal

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

RUN apt-get update
RUN apt-get install apt-utils -y
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt-get install nodejs -y


RUN npm install
RUN npm run build

ENV NODE_ENV=production

CMD [ "node", "/app/build/index.js" ]
