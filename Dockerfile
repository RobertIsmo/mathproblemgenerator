FROM node:17-alpine

COPY . .
RUN npm install
EXPOSE 333

CMD [ "node", "app.js" ]