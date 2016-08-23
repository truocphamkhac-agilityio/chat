FROM mhart/alpine-node:4.2.1

# Create app directory
RUN mkdir -p /home/chat
WORKDIR /home/chat

# Add packages
COPY package.json /home/chat/

# Install npm packages
RUN cd /home/chat && npm install

# Bundle app source
COPY . /home/chat

CMD [ "npm", "start" ]

EXPOSE 8020
