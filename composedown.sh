#!/usr/bin/env bash
docker-compose down && \
docker system prune --volumes && \
echo "Docker-compose down!"