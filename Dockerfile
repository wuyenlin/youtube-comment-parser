# Application container
FROM node:16.10.0 as application

ARG START_COMMAND
ENV START_COMMAND=$START_COMMAND

# docker workdir
WORKDIR /home/usr/app/

COPY package*.json tsconfig.json ./
COPY .env ./

RUN npm ci --quiet

RUN npm run build

COPY . .

ENV TZ=Europe/Amsterdam

# expose at port 3000
EXPOSE 3000

# default command is starting the server
CMD [ "sh", "-c", "npm run ${START_COMMAND}"]
