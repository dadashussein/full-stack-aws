#node-express-mongo end

FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 9002
CMD [ "npm", "start" ]