FROM node:hydrogen-alpine
VOLUME /app
WORKDIR /app
CMD ["npm", "run", "dev"]
