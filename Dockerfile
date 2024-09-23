FROM node:latest AS app

WORKDIR /usr/src/app

COPY . ./


# Install PostgreSQL
RUN apt-get update

RUN npm install

# Expose the necessary ports
EXPOSE 3000

CMD ["node","app.js"]


# PostgreSQL setup
FROM postgres:latest AS db

# Set environment variables
ENV PGUSER=postgres
ENV PGPASSWORD=postgres
ENV PGHOST=db-service
ENV PGDATABASE=mal3abk_on
CMD ["sh", "-c", "service postgresql start"]
