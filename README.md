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

### API Endpoints

Implemented CRUD operations for tasks using RESTful API endpoints.

Include endpoints for:
- Creating a new task
- Retrieving a list of all tasks
- Retrieving a single task by ID
- Updating an existing task
- Deleting a task

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
