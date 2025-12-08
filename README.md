![banner](https://github.com/user-attachments/assets/7c9cd937-1dfb-402f-8802-b36e015cb0d2)

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