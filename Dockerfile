FROM node AS stage-1
WORKDIR /app
COPY . .
COPY env .env

RUN npm install

RUN npm run build

FROM nginx AS production-stage

COPY --from=stage-1 /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]