FROM node:5.11.0-slim

WORKDIR /api
USER root
COPY package.json /api/package.json
RUN npm install -g nodemon
RUN npm install express mongoose body-parser express-jwt express-validator ejs path cors morgan --save
RUN npm install && npm ls
RUN mv /api/node_modules /node_modules
RUN cp package.json /api/copypackage.json
COPY . /api

CMD ["npm", "start"]