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


## Run Containers

### Root

```bash
docker run -d -p 3000:3000 docker-root
```

### Non-root

```bash
docker run -d -p 3001:3000 docker-nonroot
```

## Resource Monitoring

```bash
docker stats
```
---

## Expected Outcome

- Image size reduction
- Reduced vulnerabilities
- Secure container execution
- Lower memory usage
- Production-ready Docker images