# User Management REST API

A RESTful API built with **Node.js**, **Express**, and **PostgreSQL** for managing users. Features input validation, centralized error handling, and a connection pool for efficient database communication.

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL (via `pg` pool)
- **Validation:** Joi
- **Environment Variables:** dotenv
- **CORS:** enabled via `cors`

---

## Project Structure

```
├── config/
│   └── db.js                 # PostgreSQL connection pool
├── controllers/
│   └── userController.js     # Route handler logic
├── data/
│   └── createUserTable.js    # Auto-creates users table on startup
├── middlewares/
│   ├── errorHandler.js       # Centralized
│   └── inputValidator.js     # Joi request body validation
├── models/
│   └── userModel.js          # Database query services
├── routes/
│   └── userRoutes.js         # Express route definitions
├── .env                      # Environment variables (not committed)
├── index.js                  # App entry point
└── README.md
```

---

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/link
cd repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=5001

DB_USER=your_db_user
DB_HOST=localhost
DATABASE=your_database_name
DB_PASSWORD=your_db_password
DB_PORT=5432
```

### 4. Run the server

```bash
# Development
npm run dev
```

The server will start on `http://localhost:5001` and automatically create the `users` table if it doesn't exist.

---

## API Endpoints

Base URL: `/api`

| Method | Endpoint        | Description       | Body Required |
| ------ | --------------- | ----------------- | ------------- |
| GET    | `/api/user`     | Get all users     | No            |
| GET    | `/api/user/:id` | Get user by ID    | No            |
| POST   | `/api/user`     | Create a new user | Yes           |
| PUT    | `/api/user/:id` | Update a user     | Yes           |
| DELETE | `/api/user/:id` | Delete a user     | No            |

### Request Body (POST / PUT)

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Validation Rules

- `name`: string, minimum 3 characters, required
- `email`: valid email format, required

### Response Format

All responses follow a standardized structure:

```json
{
  "status": 200,
  "message": "Users fetched successfully",
  "data": [ ... ]
}
```

---

## Error Handling

- **400** – Validation error (invalid input)
- **404** – User not found
- **500** – Internal server error

All errors are caught and handled by the centralized `errorHandler` middleware.

---

## Database Schema

```sql
CREATE TABLE IF NOT EXISTS users (
  id         SERIAL PRIMARY KEY,
  name       VARCHAR(100) NOT NULL,
  email      VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

.
