FROM node:16-alpine

WORKDIR /index

COPY package*.json ./
COPY . .

RUN npm install --omit=dev

CMD [ "npm", "start" ]