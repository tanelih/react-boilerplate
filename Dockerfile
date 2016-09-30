FROM node:6

WORKDIR /tmp

ADD package.json .
RUN npm install

WORKDIR /app

RUN ln -sf /tmp/node_modules .
ADD package.json .
RUN npm install

