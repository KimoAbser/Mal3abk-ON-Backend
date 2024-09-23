FROM node:latest AS app

WORKDIR /usr/src/app

COPY . ./


# Install PostgreSQL
RUN apt-get update

RUN npm install

# Expose the necessary ports
EXPOSE 3000

CMD ["node","app.js"]

