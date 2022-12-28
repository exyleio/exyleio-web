FROM node:hydrogen-alpine
VOLUME /app
WORKDIR /app
ENTRYPOINT yarn dev
