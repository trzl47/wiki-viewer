# docker.nginx

FROM nginx:alpine

COPY ./build/client /client
COPY nginx.conf /etc/nginx/nginx.conf