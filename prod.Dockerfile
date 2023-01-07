# This Docker image is only used to test other parts
# of the Exyle.io online infrastructure. It is not
# actually used in production.

# Build
FROM node:hydrogen-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN echo PUBLIC_USE_PRODUCTION_API=true > .env
RUN npx vite build

# Run
FROM nginx:alpine-slim
RUN sed -i '1idaemon off;' /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /app
EXPOSE 80
CMD ["nginx"]
