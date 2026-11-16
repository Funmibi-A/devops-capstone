# DevOpsFlow – Automated CI/CD Pipeline

![CI/CD Status](https://img.shields.io/github/actions/workflow/status/Funmibi-A/devops-capstone/ci.yml?branch=main&label=CI%2FCD)
![Node.js](https://img.shields.io/badge/Node.js-24-green)
![React](https://img.shields.io/badge/React-19-blue)
![Docker](https://img.shields.io/badge/Docker-containerized-blue)
![Kubernetes](https://img.shields.io/badge/Kubernetes-deployment-326CE5)

## 1. Project Overview

DevOpsFlow is a web-based dashboard developed to demonstrate an automated Continuous Integration and Continuous Deployment (CI/CD) pipeline.

The project integrates modern DevOps tools and practices to automate application testing, building, security scanning, container image publishing, staging deployment and production deployment.

The application is built with React and Vite, while GitHub Actions orchestrates the CI/CD workflow.

## 2. Key Features

- Automated CI/CD using GitHub Actions.
- Code quality checks using ESLint.
- Unit testing with Vitest.
- End-to-end browser testing with Playwright.
- Dependency vulnerability scanning using npm audit.
- Automated production build and JavaScript bundle-size analysis.
- Docker image creation and publishing to GitHub Container Registry (GHCR).
- Container vulnerability scanning using Trivy.
- Automated staging deployment to Kubernetes using Minikube.
- Production deployment through GitHub Pages with environment approval.
- Workflow concurrency control to manage overlapping runs.

## 3. Technology Stack

| Category | Technology |
|---|---|
| Frontend | React 19 |
| Build Tool | Vite 8 |
| Runtime | Node.js 24 |
| Code Quality | ESLint |
| Unit Testing | Vitest |
| E2E Testing | Playwright |
| CI/CD | GitHub Actions |
| Containerisation | Docker |
| Container Registry | GitHub Container Registry |
| Security Scanning | npm audit, Trivy |
| Orchestration | Kubernetes |
| Local Cluster | Minikube |
| Deployment | GitHub Pages |

## 4. CI/CD Pipeline Architecture

The pipeline is configured in `.github/workflows/ci.yml`.

It is triggered automatically when code is pushed to the `main` branch or when a pull request targets `main`.

### Pipeline stages

1. **Checkout:** Retrieves the project source code.
2. **Dependency installation:** Installs project dependencies using `npm ci`.
3. **Security audit:** Checks npm dependencies for high and critical vulnerabilities.
4. **Code quality:** Runs ESLint.
5. **Unit testing:** Executes Vitest tests.
6. **End-to-end testing:** Runs Playwright browser tests.
7. **Build:** Creates an optimised production build.
8. **Bundle analysis:** Checks the compressed JavaScript bundle against a 100 KB budget.
9. **Docker build:** Creates the application container image.
10. **Container security:** Scans the Docker image using Trivy.
11. **Image publishing:** Pushes the container image to GHCR.
12. **Staging deployment:** Deploys the application to Minikube using a self-hosted GitHub Actions runner.
13. **Production deployment:** Deploys the application to GitHub Pages after the staging deployment and required production approval.

### Pipeline flow

```text
Developer Push / Pull Request
             |
             v
       GitHub Actions
             |
             v
    Install Dependencies
             |
             v
     npm Security Audit
             |
             v
       ESLint Checks
             |
             v
       Unit Testing
             |
             v
     Playwright E2E Tests
             |
             v
      Production Build
             |
             v
    Bundle Size Analysis
             |
             v
       Docker Build
             |
             v
       Trivy Scan
             |
             v
      Publish to GHCR
             |
             v
    Deploy to Minikube
             |
             v
     Production Approval
             |
             v
    Deploy to GitHub Pages
```

## 5. Getting Started

### Prerequisites

Ensure the following tools are installed:

- Node.js 24 or later
- npm
- Git
- Docker
- kubectl
- Minikube (for local Kubernetes deployment)

### Clone the repository

```bash
git clone https://github.com/Funmibi-A/devops-capstone.git
cd devops-capstone
```

### Install dependencies

```bash
npm ci
```

### Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal to access the application.

## 6. Testing and Code Quality

### Run ESLint

```bash
npm run lint
```

### Run unit tests

```bash
npm run test -- --run
```

### Run end-to-end tests

Install the Playwright Chromium browser if it is not already installed:

```bash
npx playwright install chromium
```

Run the tests:

```bash
npm run test:e2e
```

### Run the dependency security audit

```bash
npm audit --audit-level=high
```

The pipeline fails if vulnerabilities at the configured high or critical severity threshold are detected.

### Check JavaScript bundle size

First, build the application:

```bash
npm run build
```

Then run:

```bash
npm run check:bundle
```

The custom bundle-size script calculates the compressed JavaScript asset size and checks it against a 100 KB budget.

## 7. Docker

The application is containerised using Docker and served through Nginx.

### Build the application

```bash
npm run build
```

### Build the Docker image

```bash
docker build -t devopsflow:latest .
```

### Run the container

```bash
docker run -d -p 8080:80 --name devopsflow devopsflow:latest
```

Access the application at:

```text
http://localhost:8080
```

### Container Registry

The CI/CD pipeline publishes images to GitHub Container Registry.

```text
ghcr.io/funmibi-a/devopsflow:latest
ghcr.io/funmibi-a/devopsflow:staging
ghcr.io/funmibi-a/devopsflow:sha-<commit-sha>
```

## 8. Kubernetes Staging Deployment

The staging environment runs on Minikube and is managed using Kubernetes manifests.

The deployment configuration is located in the `k8s/` directory.

### Apply the staging namespace

```bash
kubectl create namespace staging --dry-run=client -o yaml | kubectl apply -f -
```

### Apply the staging deployment

```bash
kubectl apply -f k8s/staging-deployment.yaml
```

### Apply the staging service and ingress

```bash
kubectl apply -f k8s/staging-service.yaml
kubectl apply -f k8s/staging-ingress.yaml
```

### Verify the deployment

```bash
kubectl get pods -n staging
kubectl get deployments -n staging
kubectl get services -n staging
```

Check the deployment rollout:

```bash
kubectl rollout status deployment/devopsflow-staging -n staging
```

The staging ingress hostname is:

```text
devopsflow-staging.local
```

The GitHub Actions staging job applies the deployment manifest, checks rollout status and performs an HTTP verification against the Minikube cluster.

## 9. Security and Reliability

The project implements several measures to improve pipeline reliability and application security:

- **npm audit:** Identifies vulnerable npm dependencies.
- **Trivy:** Scans container images for operating system and library vulnerabilities.
- **ESLint:** Identifies code quality issues.
- **Automated testing:** Validates application functionality before deployment.
- **Readiness and liveness probes:** Help Kubernetes monitor application availability.
- **Concurrency control:** Prevents unnecessary overlapping workflow executions, particularly for pull requests.
- **Deployment verification:** Checks that the staging application responds successfully after deployment.

## 10. Project Structure

```text
devops-capstone/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── e2e/
│   └── dashboard.spec.js
│
├── k8s/
│   ├── deployment.yaml
│   ├── ingress.yaml
│   ├── service.yaml
│   ├── staging-deployment.yaml
│   ├── staging-ingress.yaml
│   └── staging-service.yaml
│
├── scripts/
│   └── check-bundle-size.js
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│
├── Dockerfile
├── package.json
├── package-lock.json
├── playwright.config.js
├── vitest.config.js
└── README.md
```

## 11. Project Outcomes

The project demonstrates the implementation of an automated software delivery workflow, including:

- Automated code validation and testing.
- Security checks for dependencies and container images.
- Container image creation and registry publishing.
- Kubernetes-based staging deployment.
- Production deployment through GitHub Pages.
- Automated deployment verification.

## 12. Future Improvements

Potential improvements include:

- Integrating live GitHub Actions data into the dashboard.
- Adding application performance monitoring.
- Introducing automated rollback procedures.
- Implementing additional integration tests.
- Expanding Kubernetes deployment and monitoring capabilities.

## 13. Repository

**GitHub:** https://github.com/Funmibi-A/devops-capstone

**Author:** Funmibi Adedokun
