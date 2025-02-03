<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# NestJS Boilerplate

## 🚀 Features
- **NestJS** Framework
- **Apollo** (GraphQL)
- **Prisma ORM** (PostgreSQL)
- **Amazon RDS PostgreSQL** Integration
- **Authentication with JWT**
- **Multi-Factor Authentication (MFA)**
- **Redis for Caching and Session Management**
- **GraphQL Playground for API Documentation**
- **Rate Limiting with Throttler**

---

## 🛠 Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Taufiq26/nestjs-graphql-boilerplate.git
cd nestjs-graphql-boilerplate
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and configure your database & Redis:
```env
DATABASE_URL="postgresql://<DB_USERNAME>:<DB_PASSWORD>@<RDS_ENDPOINT>:5432/<DB_NAME>?schema=public"
JWT_SECRET="your_jwt_secret"
REDIS_HOST="your_redis_host"
REDIS_PORT=6379
```

### 4️⃣ Setup Prisma
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5️⃣ Run the Application
```bash
npm run start:dev
```
API is now running at `http://localhost:3000`

---

## 📚 API Documentation
Swagger is available at:
```
http://localhost:3000/api
```

---

## 📂 Project Structure
```
nestjs-prisma-boilerplate/
│── src/
│   ├── auth/
│   ├── prisma/
│   ├── users/
│   ├── main.ts
│── prisma/
│   ├── schema.prisma
│── .env
│── README.md
│── package.json
```

---

## 🛡 Authentication (JWT + OAuth2)
- Login API: `POST /auth/login`
- Register API: `POST /auth/register`
- OAuth2 Integration (Google, Facebook, etc.)

---

## ⚡ Rate Limiting
This project includes **Throttler** to prevent API abuse. You can configure rate limits in `app.module.ts`.

---

## 📌 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## 📜 License
This project is licensed under the [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
