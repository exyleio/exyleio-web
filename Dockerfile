FROM node:hydrogen-alpine
VOLUME /app
WORKDIR /app
CMD ["yarn", "dev"]
