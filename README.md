# 🚀 Performance App

Welcome to the **Performance App** — your tool to **search, add, update, view, and manage journeys**, all wrapped with a smooth basket feature!

---

## 📋 Features

- Search, add, update, and view **journeys** — a complete CRUD experience
- Manage journeys in a **basket** for easy multi-select & checkout
- Fully **standalone components** with Angular Signals for reactive state
- API client generated from OpenAPI spec with strong typings
- Automatic code formatting and linting with Prettier and ESLint

---

## ⚙️ Scripts

Use these handy commands to develop, build, test, and maintain the app:

| Script               | Description                                                      |
|----------------------|------------------------------------------------------------------|
| `npm start`          | Start the Angular dev server (`ng serve`)                        |
| `npm run start:mock` | Start dev server with mock configuration on port 8901            |
| `npm run build`      | Build the Angular app for production                             |
| `npm test`           | Run unit tests                                                   |
| `npm run lint`       | Run linting to check code style                                  |
| `npm run start:node:server` | Start the backend node server with nodemon                  |
| `npm run prepare`    | Install Git hooks with Husky                                     |
| `npm run generate:client` | Generate API client from OpenAPI spec and format with Prettier |
| `npm run prettier:fix` | Format all source files with Prettier                            |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- Angular CLI (`npm install -g @angular/cli`)
- `openapi-generator-cli` (for API client generation)

### Installation

```bash
git clone <your-repo-url>
cd your-angular-app
npm install
npm run prepare
