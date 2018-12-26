FROM node:8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN yarn install --silent
RUN yarn global install react-scripts@1.1.1 --silent

EXPOSE 3000

CMD ["npm", "start"]
