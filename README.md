# Task-Management-System

Welcome to the Task Management System project. Our application simplifies task management, empowering users to efficiently organize their daily tasks with ease. By providing functionalities for task creation, retrieval, updating, and deletion, users can seamlessly manage their tasks after registering and logging in, ensuring a personalized and secure experience based on their authentication credentials.


## Technology Stack

- Node.js: A powerful JavaScript runtime environment for building server-side applications.
- Express.js: A minimalist web framework for Node.js that simplifies building APIs and web applications.
- MongoDB: A flexible NoSQL database system for storing and managing task data.


## Objective

The objective of this project is to develop a RESTful API that allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks for a task management system.

## Requirements

### Task Model

Defined a MongoDB schema for tasks with fields such as title, description, due date, priority, status, etc.

## API Endpoints

### Task Routes

#### Get all tasks
- **Endpoint:** `GET /api/tasks`
- **Description:** Retrieves a list of all tasks.
- **Authentication:** Requires authentication using JWT token.
- **Response:** Returns an array of tasks in JSON format.

#### Get a task by ID
- **Endpoint:** `GET /api/tasks/:id`
- **Description:** Retrieves a single task by its ID.
- **Authentication:** Requires authentication using JWT token.
- **Parameters:**
  - `id`: ID of the task to retrieve.
- **Response:** Returns the task object in JSON format.

#### Create a new task
- **Endpoint:** `POST /api/tasks/add`
- **Description:** Creates a new task.
- **Authentication:** Requires authentication using JWT token.
- **Request Body:** JSON object containing task details (title, description, dueDate, priority, status, userId).
- **Response:** Returns a success message and the newly created task object in JSON format.

#### Update a task
- **Endpoint:** `PATCH /api/tasks/update/:id`
- **Description:** Updates an existing task.
- **Authentication:** Requires authentication using JWT token.
- **Parameters:**
  - `id`: ID of the task to update.
- **Request Body:** JSON object containing updated task details (title, description, dueDate, priority, status).
- **Response:** Returns a success message and the updated task object in JSON format.

#### Delete a task
- **Endpoint:** `DELETE /api/tasks/delete/:id`
- **Description:** Deletes a task.
- **Authentication:** Requires authentication using JWT token.
- **Parameters:**
  - `id`: ID of the task to delete.
- **Response:** Returns a success message and the deleted task object in JSON format.

### User Routes

#### User registration
- **Endpoint:** `POST /api/users/register`
- **Description:** Registers a new user.
- **Request Body:** JSON object containing user details (userName, email, pass).
- **Response:** Returns a success message and the registered user object in JSON format.

#### User login
- **Endpoint:** `POST /api/users/login`
- **Description:** Logs in an existing user.
- **Request Body:** JSON object containing user credentials (email, pass).
- **Response:** Returns a success message, the user object, and a JWT token in JSON format.

#### User logout
- **Endpoint:** `GET /api/users/logout`
- **Description:** Logs out the current user and blacklists the JWT token.
- **Authentication:** Requires authentication using JWT token in the request headers.
- **Response:** Returns a success message in JSON format.


### Validation and Error Handling

Implement validation for incoming data (e.g., required fields, data types).
Handled errors gracefully and returned appropriate HTTP status codes and error messages.

### Security

Implemented basic authentication for API endpoints using JWT (JSON Web Tokens).
Only authenticated users can perform CRUD operations on tasks.


## Technical Considerations

- Used Node.js with Express.js for building the RESTful API.
- Used MongoDB as the database for storing tasks.
- Implemented JWT-based authentication for securing the API endpoints.


## Getting Started

To get started with the Task Management System API, follow these steps:

1. Clone this repository:
   ```bash
   `git clone https://github.com/Sonali020200/Task-Management-System.git`

   `cd task-management-api`

   `npm install`

## Deployed link

https://task-management-system-3.onrender.com/
