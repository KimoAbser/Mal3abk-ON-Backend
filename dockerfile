FROM node:latest

WORKDIR /usr/src/app
COPY package.json ./
# Copy the rest of the application files
COPY . .  # This will copy everything from the current directory to /usr/src/app

RUN npm install

EXPOSE 3000

CMD ["node","app.js"]
