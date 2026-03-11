# 🛒 ProShop MERN E-Commerce Application

A full-stack **MERN (MongoDB, Express, React, Node.js)** e-commerce application inspired by the ProShop project.

The application includes **user authentication, product APIs, database integration, and API testing using Postman**.

⚠️ **Note:** Payment integration is **not implemented yet**. All other features are working.

---

# 🚀 Features

### 👤 User Features

* User registration
* User login authentication
* Logout functionality
* Get user profile
* Update user profile

### 📦 Product Features

* Get all products
* Get single product
* Product API endpoints

### 🗄 Database

* MongoDB Atlas integration
* Mongoose models
* Database seeding support

### 🔧 Backend

* Node.js + Express
* REST API
* Authentication with JWT
* Cookie Parser
* Error handling middleware

### 🎨 Frontend

* React.js
* Axios API calls
* User authentication flow

### 🧪 API Testing

* Postman collection included
* Environment variables supported

---

# 🏗 Tech Stack

Frontend:

* React
* React Router
* Axios

Backend:

* Node.js
* Express.js
* JWT Authentication

Database:

* MongoDB Atlas
* Mongoose

Tools:

* Postman
* Nodemon
* Git & GitHub

---

# 📂 Project Structure

```
project-root
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
├── frontend
│   ├── src
│   └── public
│
├── data
├── package.json
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the **backend folder**.

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

---

# ▶️ How To Run The Project

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/proshop.git
```

```
cd proshop
```

---

### 2️⃣ Install dependencies

Backend:

```
cd backend
npm install
```

Frontend:

```
cd ../frontend
npm install
```

---

### 3️⃣ Run Backend Server

```
cd backend
npm run server
```

Server will start on:

```
http://localhost:5000
```

---

### 4️⃣ Run Frontend

```
cd frontend
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

# 🔌 API Endpoints

### Products

Get all products

```
GET /api/products
```

Get single product

```
GET /api/products/:id
```

---

### Users

Register user

```
POST /api/users
```

Login user

```
POST /api/users/auth
```

Logout user

```
POST /api/users/logout
```

Get user profile

```
GET /api/users/profile
```

Update user profile

```
PUT /api/users/profile
```

---

# 🧪 Postman Testing

Base URL:

```
http://localhost:5000/api
```

Example request:

```
GET /products
POST /users
POST /users/auth
```

Body example for registration:

```
{
 "name": "Test User",
 "email": "test@example.com",
 "password": "123456"
}
```

---

# 🗄 MongoDB

The application connects to **MongoDB Atlas** using Mongoose.

Example connection:

```
MongoDB Connected
```

Make sure your **MongoDB URI is added in `.env`**.

---



# 👨‍💻 Author

Developed by **Nk**

---

# 📜 License

This project is for **learning and educational purposes**.
