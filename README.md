# 🛒 Shopping List Web

A minimal, modern React + TypeScript web app for managing your shopping list.

## 🚀 Quick Start

### Prerequisites

- Docker ([get Docker](https://docs.docker.com/get-docker/))
- Docker Compose v1.29+ ([get Docker Compose](https://docs.docker.com/compose/))

### 🐳 Run Locally with Docker

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/shopping-list-web.git
    cd shopping-list-web
    ```

2. Build and start the development server:

    ```bash
    docker-compose up
    ```

    - The first build may take a few minutes.
    - The app will be available at [http://localhost:5173](http://localhost:5173).

3. To stop the app:

    ```bash
    docker-compose down
    ```

**Tip:** Your local code changes are reflected instantly inside the Docker container thanks to the volume mount.

## 🛠️ Tech Stack

- React 19 + TypeScript
- [Vite](https://vitejs.dev/) (Development & Build)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/)
- Axios for HTTP requests

## ✨ Features

- Create, edit, and remove shopping list items
- Fast, responsive UI
- Type-safe codebase with TSLint/ESLint recommendations
