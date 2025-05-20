FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY env .env
RUN npm install
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]