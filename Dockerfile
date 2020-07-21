FROM node:latest

# App directory to hold the application code inside the image. Working directory for app
WORKDIR /app

# Bundle app source
COPY . .

# Install app dependencies.
RUN npm install

EXPOSE 8080

CMD ["node", "server.js"]
