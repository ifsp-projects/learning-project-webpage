FROM node:18 AS builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm config set fetch-retry-maxtimeout 60000

RUN npm config set registry https://registry.npmjs.org/

RUN npm install -g npm@latest

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
