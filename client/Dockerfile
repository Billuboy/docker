FROM node:16.13-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "run", "serve"]
