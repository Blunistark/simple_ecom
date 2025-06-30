# Backend Project Documentation

## Overview
This is the backend for a simple e-commerce web application built with Node.js, Express, and MongoDB (MERN stack). It provides RESTful APIs for authentication, product management, cart, and orders.

---

## Folder Structure

```
backend/
│
├── src/
│   ├── config/           # Database and environment config
│   ├── controllers/      # Route logic (auth, product, cart, order)
│   ├── middleware/       # Auth, error handling
│   ├── models/           # Mongoose models (User, Product, Cart, Order)
│   ├── routes/           # Express routes
│   ├── services/         # Business logic (optional)
│   ├── utils/            # Helper functions
│   ├── uploads/          # Uploaded files
│   ├── public/           # Static assets
│   ├── app.js            # Express app setup
│   ├── server.js         # Entry point
│   └── seed.js           # DB seeding script
│
├── tests/                # Automated tests
├── doc/                  # Documentation
├── .env                  # Environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## Setup & Usage

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Configure environment:**
   - Create a `.env` file in `backend/` with:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```
3. **Seed the database:**
   ```sh
   node src/seed.js
   ```
4. **Start the server:**
   ```sh
   npm start
   ```

---

## Main Features
- User registration and login (JWT authentication)
- Product CRUD (admin only for create/update/delete)
- Cart management (add/remove items)
- Order creation and history
- Error handling middleware
- Modular and scalable folder structure

---

## Testing
- Use Postman or similar tools to test API endpoints (see `api-docs.md` for details).
- Automated tests can be added in the `tests/` folder.

---

## Notes
- All protected routes require a valid JWT in the `Authorization` header.
- Admin routes require the user to have `isAdmin: true`.
- For file uploads, use the `uploads/` directory and configure static serving as needed.

---

## Authors
- Your Name

## License
- MIT (or your chosen license)
