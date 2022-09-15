FROM node:16

COPY package* .

WORKDIR /home/node/app

RUN npm install @nestjs/cli

COPY . .

EXPOSE 3003