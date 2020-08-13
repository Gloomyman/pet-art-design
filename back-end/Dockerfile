###############################################################################
# Step 1 : Builder image
#
FROM node:8.12.0-alpine AS builder

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
# optionally if you want to run npm global bin without specifying path
ENV PATH=$PATH:/home/node/.npm-global/bin

# Define working directory and copy source
# TODO change WORKDIR
WORKDIR /usr/src/back-end

RUN apk update && apk add python make gcc g++ libuuid

COPY . .
# Install dependencies and build whatever you have to build
# (babel, grunt, webpack, etc.)

RUN npm install

###############################################################################
# Step 2 : Run image
#
FROM node:8.12.0-alpine

# TODO change WORKDIR
WORKDIR /usr/src/back-end

RUN apk update && apk add python make gcc g++ libuuid

# Install deps for production only
COPY ./package* ./
RUN npm install && \
    npm cache clean --force

COPY . .
# Copy builded source from the upper builder stage
# TODO change directory path (/back-end)
COPY --from=builder /usr/src/back-end ./back-end

# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 5000
