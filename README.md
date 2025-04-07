# 💖 Heartstrings

**Heartstrings** is a personal web application designed to store and revisit all the poems you’ve written. It provides a smooth and elegant interface to browse your poetry, backed by a fast and scalable serverless setup using Cloudflare services.

---

## ✨ Features

- 📜 Add, view, and manage your personal poems
- 🌐 Deployed entirely on Cloudflare (Workers + Pages)
- 💅 Beautiful and responsive UI with Tailwind CSS
- ⚡ Fast backend built with Hono and Drizzle ORM
- 🗄️ Serverless storage using Cloudflare D1 database

---

## 🛠️ Tech Stack

### Frontend (Cloudflare Pages)
- **React 19**
- **React Router DOM**
- **Tailwind CSS**
- **Swiper.js**
- **Vite**

### Backend (Cloudflare Workers)
- **Hono** – Fast web framework for Workers
- **Drizzle ORM** – Type-safe DB interaction
- **better-sqlite3**
- **Cloudflare D1** – Serverless SQL database

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) installed globally

---

### 📦 Installation & Development

#### Backend (Workers + D1)
cd backend
npm install
# Run locally
npm run dev
# Deploy to Cloudflare
npm run deploy


Frontend (Cloudflare Pages)
bash
Copy
Edit
cd frontend
npm install
npm run dev
# Deploy to Pages manually or connect to your GitHub repo for auto-deploy


Deployment
Frontend: Deployed via Cloudflare Pages

Backend: Deployed via Cloudflare Workers

Database: Cloudflare D1 for storing poem data
