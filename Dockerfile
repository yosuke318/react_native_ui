FROM node:18-slim

WORKDIR /usr/src/app/

RUN apt update && apt install -y bash

RUN yarn global add expo-cli

#RUN yarn install
#
#CMD yarn start