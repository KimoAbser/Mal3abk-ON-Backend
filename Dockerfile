FROM node:latest

WORKDIR /usr/src/app
COPY package.json ./
# Copy the rest of the application files
COPY logic ./ 

COPY model ./

COPY route ./ # This will copy everything from the current directory to /usr/src/app

COPY Dockerfile ./ 

COPY app.js ./

COPY sequelize ./

COPY deploymentservice.yaml ./ 
RUN npm install

EXPOSE 3000

CMD ["node","app.js"]
