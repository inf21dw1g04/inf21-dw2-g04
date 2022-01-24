FROM node:17
WORKDIR /app
COPY . .
RUN npm install
#RUN chown -R node /app
EXPOSE 3006
USER node
CMD ["npm", "start"]