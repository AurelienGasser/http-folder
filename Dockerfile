FROM node:13.6.0

RUN npm install -g http-server

CMD http-server