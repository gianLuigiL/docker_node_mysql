FROM node:latest
ENV APP_NAME=node
ENV APP_ROOT=/user/src/node
WORKDIR "${APP_ROOT}"
COPY package*.json ./
RUN ["npm", "install"]
COPY . .