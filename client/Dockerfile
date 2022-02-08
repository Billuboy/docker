FROM node:16.13-alpine
RUN mkdir /home/app
WORKDIR /home/app
COPY package*.json ./
RUN npm install --silent
COPY . ./
RUN npm run build
EXPOSE 5000
CMD ["npm", "run", "serve"]
