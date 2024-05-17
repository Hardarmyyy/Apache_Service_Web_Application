# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /node_server_01

# Copy package.json and package-lock.json to the working directory
COPY package*.json /node_server_01/

# Install app dependencies
RUN npm install

# Copy only the necessary files
COPY . /node_server_01/

RUN npm install pm2 -g

# Set environment variables during build in order to allow data persistence in the container
ENV PORT=${PORT}

# Make port available to the world outside this container
EXPOSE ${PORT}

# Run the command
CMD ["pm2-runtime", "index.js"] 
