FROM node:alpine
RUN apk add --update nodejs
RUN apk add bash
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081