# Docker Security & Optimization

## Objective

This project demonstrates Docker image optimization using enterprise best practices.

---

## Features

- Basic Docker Image
- Multi-stage Build
- Root vs Non-root Containers
- Image Size Comparison
- Resource Usage Analysis

#### Docker Build Command 

docker build -f dockerfiles/Dockerfile.basic -t docker-basic .

docker build -f dockerfiles/Dockerfile.multistage -t docker-multistage .

## Run Containers

### Root

docker run -d -p 3000:3000 docker-root


### Non-root


docker run -d -p 3001:3000 docker-nonroot


## Resource Monitoring


docker stats

---

## Expected Outcome

- Image size reduction
