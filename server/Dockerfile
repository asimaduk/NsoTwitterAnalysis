#To build the docker file run: docker build -t nso-twitter-analysis:latest .
FROM node:11-alpine

WORKDIR /var/src

COPY package.json .

RUN npm install

RUN npm i -g typescript

COPY . .

RUN tsc

EXPOSE 3000

CMD ["node","index.js"]