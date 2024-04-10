# Use a Node base image
FROM node:20-alpine as build

# Set working directory for the client
WORKDIR /usr/src/app

# Copy the client package
COPY ./client ./client

WORKDIR /usr/src/app/client

# Copy the .env file(s)
# RUN echo "NODE_ENV=$NODE_ENV" >> .env
# RUN echo "VITE_API_URL=$VITE_API_URL" >> .env

# TODO: tmp solution
COPY ./client/.env.example ./.env

# Install dependencies in the root of the workspace
RUN npm install

# Build the site package, which should transpile TypeScript to JavaScript
RUN npm run build

# Serve 
FROM nginx:stable-alpine as serve
COPY --from=build /usr/src/app/client/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]