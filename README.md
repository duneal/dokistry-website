![qmweb](https://github.com/user-attachments/assets/4ea966f6-e5b5-4612-970a-3f349c86c78e)

## ✅ Prerequisites

Before starting, make sure you have the following installed:

- **Node.js** `>= 22.0.0` [Download Node.js](https://nodejs.org/en/download) or **NVM**
- **Yarn** (`npm install -g yarn`)
- **Docker**  
  [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**  
  [Install Docker Compose](https://docs.docker.com/compose/install/)

<br>

## 🛠️ Getting Started

1. **Install the dependencies:**

```bash
corepack enable
yarn install
```

2. **Copy the environment file:**

```bash
cp .env.dev.example .env
```

3. **Start the services:**

```bash
docker compose watch
```

3. **Open your browser and visit http://127.0.0.1:3000** (the port set in the .env file).

<br>

## 🚀 Deploy to production

1. **Set the following secrets in your GitHub repository:**

   - `NEXT_PUBLIC_APP_URL`: APP URL
   - `NEXT_PUBLIC_APP_URL_CANONICAL`: APP Canonical URL
   - `SMTP_USER`: SMTP username
   - `SMTP_PASSWORD`: SMTP password
   - `REGISTRY_USERNAME`: Docker registry username
   - `REGISTRY_PASSWORD`: Docker registry password/token
   - Any other secrets required for your CI/CD pipeline

2. **Push to production branch** (from your local machine):

```bash
git switch prod
git push origin prod
```

3. **Start the services** (from your production server):

```bash
docker compose -f docker-compose.prod.yml up -d
```