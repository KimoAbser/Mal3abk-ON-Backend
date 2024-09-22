FROM node:latest

WORKDIR /usr/src/app
COPY package.json ./
# Copy the rest of the application files
COPY logic ./
COPY model ./
COPY route ./
COPY Dockerfile ./
COPY package-lock.json ./
COPY app.js ./
COPY sequelize.js ./
COPY deploymentservice.yaml ./

RUN npm install

EXPOSE 3000

CMD ["node","app.js"]
