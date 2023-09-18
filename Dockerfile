FROM node:18

WORKDIR /backend

ENV AWS_REGION=us-east-1
ENV AWS_SECRET=aoc-staging-backend

COPY ./package.json .
COPY . .

RUN npm install

ENTRYPOINT [ "npm", "start" ]