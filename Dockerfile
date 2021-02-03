FROM node:12.20.1 

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

RUN npm install && npm run build

ENV NODE_ENV=production

CMD [ "node", "/app/build/index.js" ]
