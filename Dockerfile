FROM node:16-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY ./package.json ./package.json
# Build the app
RUN npm install
COPY . .
# Build the app
RUN npm run build
CMD [ "npm", "start" ]
