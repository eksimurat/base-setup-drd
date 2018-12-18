# base image
FROM node:11.4.0

# set working directory
RUN mkdir /frontend
WORKDIR /frontend

# add `/frontend/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /frontend/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent