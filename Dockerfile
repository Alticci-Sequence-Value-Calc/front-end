FROM node:16.13.2 as node
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/alticci-sequence-value-calc-front-end /usr/share/nginx/html
