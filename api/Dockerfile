FROM node:16.13-alpine
RUN mkdir /home/app
WORKDIR /home/app
COPY package*.json ./
RUN npm install --silent
COPY . ./
EXPOSE 3001
CMD ["npm", "start"]