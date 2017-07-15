FROM node:5.11.0-slim

WORKDIR /angularhuman
USER root
COPY package.json /angularhuman/package.json
RUN npm install -g nodemon
RUN npm install express mongoose body-parser express-jwt express-validator ejs path cors morgan --save
RUN npm install && npm ls
RUN mv /angularhuman/node_modules /node_modules
RUN cp package.json /angularhuman/copypackage.json
COPY . /angularhuman

CMD ["npm", "start"]