FROM node:14-alpine

WORKDIR /app
RUN npm install -g @angular/cli
RUN ng new example

WORKDIR /app/example
CMD ng serve --host 0.0.0.0
