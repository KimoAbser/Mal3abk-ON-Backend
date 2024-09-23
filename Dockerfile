FROM node:latest

WORKDIR /usr/src/app

COPY . ./


# Install PostgreSQL
RUN apt-get update && \
    apt-get install -y postgresql postgresql-contrib

# Set environment variables for PostgreSQL
ENV PGUSER=postgres
ENV PGPASSWORD=admin
ENV PGHOST=http://localhost:5432
ENV PGDATABASE=mal3abk_on



# Start PostgreSQL and create the database
RUN service postgresql start && \
  psql -U postgres -c "CREATE DATABASE mal3abk_on;" \
  psql -U postgres -c "ALTER USER postgres PASSWORD 'admin';"

RUN npm install

# Expose the necessary ports
EXPOSE 3000
EXPOSE 5432
CMD ["node","app.js"]
