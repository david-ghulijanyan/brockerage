# Brokerage Platform

A simple brokerage platform built with Laravel 11 (PHP) and Vue.js 3.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- PHP >= 8.2
- Composer
- Node.js and npm
- PostgreSQL (manual installation or run `docker compose -f docker-compose.dev.yml up -d`)
- Docker and Docker Compose (optional for containerized setup)

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/david-ghulijanyan/brockerage.git
   cd brockerage
   ```

2. **Set Up the Backend (Laravel):**
   - Navigate to the server directory:
     ```bash
     cd server
     ```
   - Install PHP dependencies:
     ```bash
     composer install
     ```
   - Copy the `.env.example` file to `.env` and modify the environment variables as needed:
     ```bash
     cp .env.example .env
     ```
   - Generate an application key:
     ```bash
     php artisan key:generate
     ```
   - Run migrations and seed the database (optional):
     ```bash
     php artisan migrate --seed
     ```

3. **Set Up the Frontend (Vue.js):**
   - Navigate to the client directory:
     ```bash
     cd ../client
     ```
   - Install npm dependencies:
     ```bash
     npm install
     ```
   - Copy the `.env.example` file to `.env` and modify the environment variables as needed:
     ```bash
     cp .env.example .env
     ```

## Running the Project

- **Running the Backend:**
  - From the `server` directory, start the Laravel development server:
    ```bash
    php artisan serve
    ```
  - The backend should now be running on `http://localhost:8000`.

- **Running the Frontend:**
  - From the `client` directory, start the Vue development server:
    ```bash
    npm run dev
    ```
  - The frontend should now be accessible on `http://localhost:8080`.

## Testing the Project

- **Running Backend tests:**
  - From the `server` directory (database must be up with docker compose `.test.yml`):
    ```bash
    php artisan test
    ```

- **Running Frontend tests:**
  - From the `client` directory:
    ```bash
    npm run test:unit
    ```
  - Before running e2e tests:
		```bash
		npx playwright install

		```

	- Then run the tests
    ```bash
    npm run test:e2e

    ```

## Using Docker (Optional)

If you prefer to use Docker for development, you can use the provided `docker-compose.yml` file:

1. **Start the Docker Containers:**
   ```bash
   docker-compose up -d
   ```

2. **Access the Application:**
   - The frontend will be accessible on `http://localhost:8080`.
   - The backend will be accessible on `http://localhost:8000`.

## Known bugs (TODO)

- When running with docker there is a CORS error
- Responsive and Pixel perfect design
- correct input components
- add more tests (unit and e2e)
- separate tests and prod databases
- add ci/cd pipeline
- font correction