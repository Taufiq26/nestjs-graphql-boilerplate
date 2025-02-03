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

Boilerplate project for building a scalable API using NestJS with PostgreSQL, OAuth2 authentication, Multi-Factor Authentication (MFA), Redis, and API documentation using Swagger.

## Features
- **TypeScript**: Strongly typed language support
- **PostgreSQL (Amazon RDS)**: Using TypeORM for database integration
- **OAuth2 Authentication**: Secure authentication with OAuth2
- **Multi-Factor Authentication (MFA)**: Implemented with Time-based One-Time Password (TOTP)
- **Redis**: Used for caching and session management
- **Swagger API Documentation**: Easy API documentation with OpenAPI

---

## 📦 Libraries Used

| Library                   | Description |
|---------------------------|-------------|
| @nestjs/common            | Core NestJS modules |
| @nestjs/config            | Environment configuration |
| @nestjs/typeorm           | ORM integration for PostgreSQL |
| pg                        | PostgreSQL driver |
| passport & passport-oauth2 | OAuth2 authentication |
| @nestjs/jwt               | JWT authentication support |
| bcryptjs                  | Password hashing |
| class-validator & class-transformer | Data validation and transformation |
| ioredis & @nestjs/redis   | Redis integration |
| swagger-ui-express & @nestjs/swagger | API documentation |
| speakeasy & qrcode        | Multi-Factor Authentication (MFA) |

---

## 🚀 Setup & Installation

### 1️⃣ Clone Repository
```sh
git clone https://github.com/your-repo/nestjs-boilerplate.git
cd nestjs-boilerplate
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create `.env` File
Create a `.env` file in the root directory and add the following variables:
```env
# Database Configuration
DB_HOST=my-db-instance.rds.amazonaws.com
DB_PORT=5432
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=your_db_name

# Redis Configuration
REDIS_HOST=your-redis-endpoint
REDIS_PORT=6379

# OAuth2 Configuration
OAUTH2_AUTH_URL=https://your-oauth2-provider.com/auth
OAUTH2_TOKEN_URL=https://your-oauth2-provider.com/token
OAUTH2_CLIENT_ID=your-client-id
OAUTH2_CLIENT_SECRET=your-client-secret
OAUTH2_CALLBACK_URL=https://your-app.com/auth/callback

# JWT Secret
JWT_SECRET=your-secret-key
```

### 4️⃣ Run Database Migrations (Optional)
If using TypeORM migrations:
```sh
npm run typeorm migration:run
```

### 5️⃣ Start the Application
```sh
npm run start:dev
```

---

## 🛠 API Documentation
Once the app is running, you can access the API documentation at:
- **Swagger UI**: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

---

## 🎯 Running with Docker (Optional)
If you want to use Docker, create a `docker-compose.yml` file and run:
```sh
docker-compose up -d
```

---

## ✅ Testing
Run tests using Jest:
```sh
npm run test
```

---

## 📜 License
This project is licensed under the [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
