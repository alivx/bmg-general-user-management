FROM node:latest
# Create app directory
WORKDIR /app
# Install app dependencies
COPY . /app/
RUN npm install
# Copy app source code
#Expose port and start application
EXPOSE 3001
CMD [ "node", "server.js" ]