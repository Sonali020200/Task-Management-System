# Task-Management-System

This repository contains a RESTful API for a Task Management System built using Node.js with Express.js and MongoDB.

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


