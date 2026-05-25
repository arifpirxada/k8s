# Overview

This project demonstrates how to deploy a full-stack application using Docker Compose for local development and Kubernetes for production environments.

**Components:**
- Client (frontend)
- Server (backend API)
- MongoDB database

## Project Structure Overview

   
├── client/   
├── server/   
├── k8s-config/   
├── compose.prod.yml   
└── .env

# Setup

Create a `.env` file in the project root, `env.example` as reference

Then update the values:

```bash
DATABASE_URL=mongodb://username:password@mongodb:27017/dbname?authSource=admin

DATABASE_NAME=dbname
MONGO_USER=username
MONGO_PASSWORD=password

VITE_API_URL=http://localhost:3000
CLIENT_URL=http://localhost:5173
```

Also create `.env` files in client and server. `env.example` is provided.

# Requirements

- Docker
- Docker Compose

For Kubernetes:

- kubectl
- Minikube


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

## Deployment Options

### 1. Run using docker compose on server

```bash
docker compose -f compose.prod.yml up -d
```

### 2. Kubernetes

Requirements to run locally: minikube and kubectl installed.

1. Create `k8s-config/secret.yml`
    - Copy template content from `k8s-config/secret.example.yml` and paste into `k8s-config/secret.yml`
    - Fill the secrets

2. Apply k8s yaml config files

```bash
cd k8s-config

minikube start

kubectl apply -f secret.yml

kubectl apply -f mongo-pvc.yml

kubectl apply -f mongo.yml

kubectl apply -f server.yml

kubectl apply -f client.yml
```

View in browser

```bash
minikube service k8s-client-service
```

