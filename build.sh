#!/usr/bin/env bash
docker-compose -f docker-compose-build.yml up --build -d && \
docker system prune --volumes && \
mkdir services/wiki-nginx/build && \
cp -r services/react/build/client services/wiki-nginx/build && \
docker build -t trzl/portfolio:wiki-react.1 -f ./services/wiki-nginx/build.Dockerfile ./services/wiki-nginx && \
# docker push trzl/portfolio:wiki-react.1 && \
docker build -t trzl/portfolio:wiki-proxy.1 -f ./services/reverseproxy/Dockerfile ./services/reverseproxy && \
# docker push trzl/portfolio:wiki-proxy.1 && \
docker-compose down && \
docker system prune --volumes && \
sudo rm -rf services/wiki-nginx/build && \
sudo rm -rf services/react/build/client && \
echo "Build complete!"