# E-Commerce API Documentation

Base URL: `/api`

## Authentication

### Register
- **POST** `/auth/register`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "123456"
  }
  ```
- **Response:** User object + JWT token

### Login
- **POST** `/auth/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "123456"
  }
  ```
- **Response:** User object + JWT token

---

## Products

### Get All Products
- **GET** `/products`
- **Response:** Array of products

### Get Product by ID
- **GET** `/products/:id`
- **Response:** Product object

### Create Product *(Admin only)*
- **POST** `/products`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "title": "Product Name",
    "description": "...",
    "price": 10,
    "imageURL": "...",
    "category": "...",
    "inStock": true
  }
  ```
- **Response:** Created product

### Update Product *(Admin only)*
- **PUT** `/products/:id`
- **Headers:** `Authorization: Bearer <token>`
- **Body:** (any updatable fields)
- **Response:** Updated product

### Delete Product *(Admin only)*
- **DELETE** `/products/:id`
- **Headers:** `Authorization: Bearer <token>`
- **Response:** Success message

---

## Cart *(Authenticated users only)*

### Get Cart
- **GET** `/cart`
- **Headers:** `Authorization: Bearer <token>`
- **Response:** Cart object

### Add to Cart
- **POST** `/cart/add`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "productId": "<product_id>",
    "quantity": 1
  }
  ```
- **Response:** Updated cart

### Remove from Cart
- **POST** `/cart/remove`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "productId": "<product_id>"
  }
  ```
- **Response:** Updated cart

---

## Orders *(Authenticated users only)*

### Create Order
- **POST** `/orders`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "items": [
      { "product": "<product_id>", "quantity": 2 }
    ],
    "total": 20
  }
  ```
- **Response:** Created order

### Get Orders
- **GET** `/orders`
- **Headers:** `Authorization: Bearer <token>`
- **Response:** Array of orders

---

## Error Handling
- All errors return JSON: `{ "error": "Error message" }`

---

## Notes
- All protected routes require a valid JWT in the `Authorization` header.
- Admin routes require the user to have `isAdmin: true`.
