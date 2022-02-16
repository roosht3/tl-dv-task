FROM node:16-alpine

WORKDIR /home/node/app

COPY app/package*.json ./

RUN npm install

COPY .env ../

COPY app .

CMD [ "npm", "start" ]