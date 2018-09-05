FROM node:8-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY . .

RUN npm config set unsafe-perm true

# RUN npm i -g yarn

RUN yarn

EXPOSE 3000

RUN yarn build

CMD [ "yarn", "start" ]