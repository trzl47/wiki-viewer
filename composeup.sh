#!/usr/bin/env bash
docker-compose up --build -d && \
docker system prune --volumes && \
echo "Docker-compose up!"