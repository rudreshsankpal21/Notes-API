# 📝 NotesAPI – Full Backend CRUD API with Auth

A secure and modular **Notes Management API** with **User Authentication** built using Node.js, Express, and MongoDB. Authenticated users can register, login, and manage their personal notes. All note routes are protected using JWT-based authentication.

---

## 🚀 Features

- 🔐 User Registration & Login
- 🔒 JWT Authentication
- 🛡️ Protected Routes via Middleware
- 🧑‍💻 User-specific Notes (CRUD)
- 🧪 Tested with Postman
- 📦 Clean, Scalable Folder Structure

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv
- Postman (for testing)

---

## 📁 Folder Structure

```

notes-api/
├── config/
│ └── db.js # MongoDB connection setup
│
├── controllers/
│ ├── authController.js # Register & login logic
│ └── noteController.js # CRUD operations for notes
│
├── middleware/
│ └── authMiddleware.js # Protect routes with JWT
│
├── models/
│ ├── User.js # User schema
│ └── Note.js # Note schema
│
├── routes/
│ ├── authRoutes.js # /api/auth (register, login)
│ └── noteRoutes.js # /api/notes (CRUD)
│
├── .env # Environment variables
├── server.js # Entry point
├── package.json # Project dependencies
└── README.md

```

---

## 🔐 API Endpoints

> All `/api/notes` routes are protected and require a valid JWT in the header.

### 🧑‍💼 Auth Endpoints

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login and get JWT   |

### 📝 Notes Endpoints (Protected)

| Method | Endpoint       | Description            |
| ------ | -------------- | ---------------------- |
| POST   | /api/notes     | Create a new note      |
| GET    | /api/notes     | Get all notes for user |
| GET    | /api/notes/:id | Get a specific note    |
| PUT    | /api/notes/:id | Update a specific note |
| DELETE | /api/notes/:id | Delete a specific note |

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/notes-api.git
   cd notes-api
   ```

````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   ```
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the server**

   ```bash
   npm run dev
   ```

---

## 🧪 How to Use in Postman

1. Register or login to get a JWT token.
2. In your Notes requests, set the following header:

   ```
   Authorization: Bearer <your_token_here>
   ```

---

## 👨‍💻 Author

Built with ❤️ by Rudresh

---

````
