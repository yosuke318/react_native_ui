FROM node:19.8.1

RUN npm install -g npm@latest && npx react-native init storybook

WORKDIR storybook