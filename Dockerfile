FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY env .env
RUN npm install
RUN npm run build
RUN npm run export

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80