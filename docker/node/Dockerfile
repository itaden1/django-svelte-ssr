FROM node:12.18.1

RUN mkdir app
WORKDIR /app

RUN npm install yarn -G

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

CMD ["yarn", "start"]
