# 🛍️ E-Commerce Shop (Final Project)

A full-featured e-commerce application built with **React.js** and **Django REST Framework** as a final semester project.

##  Features

- 🔐 JWT Authentication (Login / Logout)
- 🧾 Product Listing with Images
- 🛒 Add to Cart (Backend + Frontend)
- 📦 Checkout & Order History
- 📂 Image upload via Django Admin
- 🔄 React AuthContext with token refresh
- 📊 Swagger API Docs (`/api/docs/`)

## 📸 Screenshots

| React Frontend              | Django Admin                |
|----------------------------|-----------------------------|
| ![Frontend](./screenshots/frontend.png) | ![Admin](./screenshots/admin.png) |

## 🛠️ Tech Stack

- **Frontend:** React, Axios, React Router
- **Backend:** Django, Django REST Framework, JWT (SimpleJWT)
- **Database:** SQLite (can be changed to PostgreSQL)
- **Other:** Swagger, CORS, dotenv, GitHub

## 🧩 Folder Structure

## 🚀 Development

### Prerequisites

- [Docker](https://www.docker.com/get-started/) and [Docker Compose](https://docs.docker.com/compose/install/) are required to run this project.

### Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd E-Commerce-shop-f-d
    ```

2.  **Start the services using Make:**

    ```bash
    make up
    ```

    This command will build and start the backend and frontend services.

3.  **Access the application:**

    -   Frontend: [http://localhost:3000](http://localhost:3000)
    -   Backend: [http://localhost:8000](http://localhost:8000)
    -   Swagger API Docs: [http://localhost:8000/api/docs/](http://localhost:8000/api/docs/)

### Development

All development commands should be run inside the Docker containers using `make`. See the Makefile for available commands.

#### Available commands:

- `make up`: Builds and starts the services.
- `make down`: Stops the services.
- `make backend-migrate`: Runs backend migrations.
- `make backend-createsuperuser`: Creates a backend superuser.
- `make backend-shell`: Opens a bash shell in the backend container.
- `make frontend-shell`: Opens a bash shell in the frontend container.
- `make collectstatic`: Collects static files for the Django backend.
