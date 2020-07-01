FROM node:14-alpine

WORKDIR /app

#add node_modules bin to path
ENV PATH /app/node_modules/.bin:$PATH

#copy code and install node modules
COPY . /app
RUN npm install

CMD ng serve
