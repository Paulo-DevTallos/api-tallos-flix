FROM node:16

COPY package* .

WORKDIR /home/node/app

RUN npm install @nestjs/cli && npm install --force

COPY . .

EXPOSE 3003