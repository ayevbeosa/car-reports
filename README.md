# Used Car Value API 🚗

![Build Status](https://github.com/ayevbeosa/car-reports/actions/workflows/ci.yml/badge.svg)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)

A robust RESTful API designed to estimate used car values based on historical sales data. This project serves as a demonstration of **Clean Architecture** principles within a **NestJS** environment, featuring custom interceptors, rigorous DTO validation, and secure authentication flows.

## 🏗 Architecture & Features

This project moves beyond basic CRUD operations to demonstrate Senior-level NestJS patterns:

* **Custom Interceptors:** Implemented `SerializeInterceptor` to handle DTO transformation and strictly control exposed response data (e.g., stripping passwords/admin flags).
* **Dependency Injection:** Heavily leverages DI for service decoupling, facilitating easier unit testing.
* **Authentication:** Custom-built auth system using **Sessions** and **Decorators** (`@CurrentUser`) to manage state without relying on external heavyweights like Passport (for demo purposes).
* **TypeORM & QueryBuilder:** utilized `createQueryBuilder` for complex price aggregation logic to accurately estimate vehicle value.
* **Validation:** Strict input validation using `class-validator` to ensure type safety from the controller level down to the database.

## 🛠 Tech Stack

* **Framework:** NestJS (Node.js)
* **Language:** TypeScript
* **Database:** SQLite (dev/test), adaptable to PostgreSQL for production
* **ORM:** TypeORM
* **Testing:** Jest (Unit & E2E)
* **Containerization:** Docker

## 🚀 Getting Started

### Option 1: Run with Docker (Recommended)

Ensure you have Docker installed, then run:

```bash
# Build the image
docker build -t car-value-api .

# Run the container
docker run -p 3000:3000 car-value-api
```

### Option 2: Run Locally
1. Install Dependencies

```bash
npm install
```
2. Set Environment Keys Create a .env file (or use default dev config):

```bash
COOKIE_KEY=asdfjkl123
```
3. Run in Development Mode
```bash
npm run start:dev
```

## 🧪 Testing
The application includes a comprehensive test suite to ensure reliability.
```bash
# Run Unit Tests
npm run test

# Run End-to-End (E2E) Tests
npm run test:e2e
```

## 📡 API Reference
| Method | Endpoint       | Description                                      |
|:-------|----------------|--------------------------------------------------|
| `POST` | `/auth/signup` | Create a new user account                        |
| `POST` | `/auth/signin` | Log in an existing user                          |
| `POST` | `/reports`     | Create a new sales report (Requires Auth)        |
| `GET`  | `/reports`     | Get a price estimate based on vehicle parameters |
| `PATCH`| `/reports/:id` | Approve/Reject a report (Admin only)             |

<br/>

**Author**: Ayevbeosa Iyamu
