# PokeTeam Up
PokeTeam Up is a full-stack web application that allows users to assemble, manage, and strategize teams with their favorite Pokémon. The project leverages a robust Laravel API for data management and a modern Next.js interface for a responsive user experience.

## Technologies

This project is built using the following stack:

**Backend:**
- **Laravel v12.41.1:** RESTful API architecture.
- **PHP v8.3.28:** Core language.
- **MySQL:** Database management.
- **Eloquent ORM:** Database interactions and relationships.

**Frontend:**
- **Next.js v15.5.7:** React framework with App Router.
- **TypeScript 5.9.3:** Type safety and developer experience.
- **Tailwind CSS:** Styling and responsive design.
- **Axios:** HTTP client for API requests.

##### Check for version informations in: [../frontend../package.json](https://github.com/gabriellatcc/PokeTeamUp/blob/main/frontend/package.json)
---

## Installation & Setup

To run this project locally, you will need **PHP**, **Composer**, **Node.js**, and a database (MySQL) installed on your machine.

### 1. Backend (Laravel API)

Navigate to the backend directory and install the PHP dependencies:

```bash
cd backend
composer install
```

Copy the example environment file to create your local configuration:

```bash
cp .env.example .env
```

Open the .env file and configure your database credentials

Generate the application security key and run the database migrations:
```bash
php artisan key:generate
php artisan migrate
```
Start the development server:
```bash
php artisan serve
```

The API should now be running at http://localhost:8000

### 2. Frontend (Next.js Client)

Open a new terminal, navigate to the frontend directory, and install the Node dependencies:
```bash
npm install
```

Create a .env.local file to configure the API URL:
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

Start the development server:
```bash
npm run dev
```

Open your browser and visit http://localhost:3000.