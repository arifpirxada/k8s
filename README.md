# Overview

This repository serves as a reference implementation for Docker and Kubernetes deployments.

# Initial step

Configure .env in project root

```bash
DATABASE_URL=mongodb://username:password@mongodb:27017/dbname?authSource=admin

DATABASE_NAME=dbname
MONGO_USER=username
MONGO_PASSWORD=password
```

# Development

Start the local development environment:

```bash
docker compose up -d
```

# Production

## Build and Push Client Image

Replace `1.0.2` with the release version.

```bash
cd client

docker build -t username/k8s-client:1.0.2 -f Dockerfile.prod .
docker tag username/k8s-client:1.0.2 username/k8s-client:stable

docker push username/k8s-client:1.0.2
docker push username/k8s-client:stable
```

## Build and Push Server Image

```bash
cd server

docker build -t username/k8s-server:1.0.2 -f Dockerfile.prod .
docker tag username/k8s-server:1.0.2 username/k8s-server:stable

docker push username/k8s-server:1.0.2
docker push username/k8s-server:stable
```

## Two Option

### 1. Run using docker compose on server

```bash
docker compose -f compose.prod.yml up -d
```

### 2. Kubernetes

to be updated