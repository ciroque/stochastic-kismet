FROM node:8-alpine AS BUILD_STEP

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN yarn install --silent
RUN yarn global add react-scripts@1.1.1 --silent

COPY ./public /usr/src/app/public
COPY ./src /usr/src/app/src

RUN yarn build

## ############################################################################
## Release Image
FROM node:8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY --from=BUILD_STEP /usr/src/app/build/ ./
#COPY --from=BUILD_STEP /usr/src/app/node_modules/ ./

RUN yarn global add serve --silent

EXPOSE 3000
EXPOSE 5000

CMD ["serve", "-s", "."]
