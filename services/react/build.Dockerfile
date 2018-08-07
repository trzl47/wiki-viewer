FROM alpine:3.7

ENV LANG=C.UTF-8

# set working directory
WORKDIR /app
COPY package.json package.json

# install node
RUN apk add --update nodejs

# install native build dependencies and app dependencies
# then remove build dependcies to reduce image size
RUN apk add --no-cache make gcc g++ python && \
	npm install && \
	npm cache verify && \
	apk del make gcc g++ python

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add source
COPY ./ /app

# start app
CMD npm run build