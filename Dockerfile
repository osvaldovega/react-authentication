FROM node:8.16-alpine
RUN apk add bash
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081