FROM node:12.18.1

WORKDIR /app

RUN npm install yarn -G

COPY render-server/package.json package.json
COPY render-server/yarn.lock yarn.lock

RUN yarn install

COPY render-server/build .

CMD ["yarn", "start"]
