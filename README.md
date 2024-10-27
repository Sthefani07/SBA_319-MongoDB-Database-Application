# TravelDiary API

## Description
This project is a RESTful API built with Express.js and MongoDB for managing users, notes, and destinations. It includes CRUD operations (Create, Read, Update, Delete) for each of these entities, with validation and error handling. The database schema is designed using Mongoose, and the data can be seeded with sample records for testing.

## Features
- **User Management**: Create, retrieve, update, and delete user records with validation and unique email enforcement.
- **Note Management**: Handle notes related to users, with CRUD capabilities.
- **Destination Management**: Manage destination entries, allowing clients to save, edit, view, and delete destinations.
- **MongoDB Integration**: Connects to MongoDB via Mongoose for data modeling.
- **Data Validation**: Basic validation for required fields, unique constraints, and custom validation rules.

## Author
**Sthefani Denhof**

---

## Getting Started

### Prerequisites
- Node.js
- MongoDB (local instance or a MongoDB Atlas connection string)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>




## API Routes

Each route is prefixed by the resource path (e.g., `/user`, `/note`, `/destination`). Below are the endpoints for each resource.

---

### User Routes (`/user`)

| Method | Endpoint       | Description                 | Request Body                                                 |
|--------|----------------|-----------------------------|--------------------------------------------------------------|
| POST   | `/user`       | Create a new user           | `{ "firstName": "John", "email": "john@example.com", "password": "123456" }` |
| GET    | `/user`       | Retrieve all users          | N/A                                                          |
| PUT    | `/user/:id`    | Update a user by ID         | `{ "firstName": "UpdatedName", "email": "new@example.com" }` |
| DELETE | `/user/:id`    | Delete a user by ID         | N/A                                                          |

---

### Note Routes (`/note`)

| Method | Endpoint       | Description                 | Request Body                                                 |
|--------|----------------|-----------------------------|--------------------------------------------------------------|
| POST   | `/note`       | Create a new note           | `{ "title": "Sample Note", "content": "Content here", "userId": "<User ID>" }` |
| GET    | `/note`       | Retrieve all notes          | N/A                                                          |
| PUT    | `/note/:id`    | Update a note by ID         | `{ "title": "Updated Title", "content": "Updated content" }` |
| DELETE | `/note/:id`    | Delete a note by ID         | N/A                                                          |

---

### Destination Routes (`/destination`)

| Method | Endpoint          | Description                 | Request Body                                                     |
|--------|--------------------|-----------------------------|------------------------------------------------------------------|
| POST   | `/destination`    | Create a new destination    | `{ "city": "Paris", "country": "France", "description": "Eiffel Tower visit" }` |
| GET    | `/destination`    | Retrieve all destinations   | N/A                                                              |
| PUT    | `/destination/:id` | Update a destination by ID  | `{ "city": "Tokyo", "country": "Japan", "description": "Land of the Rising Sun" }` |
| DELETE | `/destination/:id` | Delete a destination by ID  | N/A                                                              |

---

