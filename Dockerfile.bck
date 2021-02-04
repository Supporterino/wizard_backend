FROM ubuntu:focal

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

# update 
RUN apt-get update
RUN apt-get install apt-utils -y
# install curl 
RUN apt-get install curl -y
# get install script and pass it to execute: 
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
# and install node 
RUN apt-get install nodejs -y
# confirm that it was successful 
RUN node -v
# npm installs automatically 
RUN npm -v

RUN npm install
RUN npm run build

ENV NODE_ENV=production

CMD [ "node", "/app/build/index.js" ]
