FROM node:16

COPY package* .

WORKDIR /home/node/app

RUN npm install @nestjs/cli && npm install

COPY . .

EXPOSE 3003

#FROM node:14-alpine3.16

#WORKDIR /usr/tallosflix/app

#RUN npm install @nestjs/cli && npm install

#COPY . .

#EXPOSE 3003