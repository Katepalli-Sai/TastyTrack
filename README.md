# TastyTrack

**TastyTrack** is a MERN stack-based application that allows users to manage multiple recipes, including creating, editing, and deleting them. The app features user authentication, saving favorite recipes, and secure storage of data in MongoDB. Built with React on the frontend and Express.js on the backend, this project demonstrates the full capabilities of the MERN stack.

## Features
- **Create, Edit, Delete Recipes**: Manage a variety of recipes.
- **User Authentication**: Secure login and registration using JWT.
- **Save Recipes**: Save and access favorite recipes.
- **View Recipes**: Display recipes in a structured, easy-to-read format.
- **JWT Authentication**: Protect routes and data with JSON Web Tokens.
- **Bcrypt Hashing**: Secure password storage using bcrypt.

## Prerequisites
To get started with this project, you will need the following tools installed:

- **React.js** (Frontend)
- **MongoDB** (Database)
- **Express.js** (Backend)
- **Node.js** (Runtime Environment)
- **JWT (JSON Web Token)** (For Authentication)
- **Bcrypt** (For Password Hashing)

## Project Setup

### Backend Setup
1. **Create Index File**: Set up the basic boilerplate code for Node.js and Express.js in the `server/` directory.
2. **Install Dependencies**: Run `npm install` to install all required packages.
3. **Connect to MongoDB**: Configure Mongoose to connect to MongoDB and set up the database connection.
4. **Create Routes & Models**: Define routes for handling recipes and users, and create Mongoose models for storing data.
5. **JWT Authentication**: Implement JWT for securing user access and private routes.
6. **Environment Variables**: Store sensitive data like MongoDB URLs and JWT secrets in a `.env` file.

### Frontend Setup
1. **Create Vite Project**: Run `npm create vite@latest` to initialize a new React project.
2. **Install Dependencies**: Navigate to the frontend directory (`cd my-react-app`) and install necessary dependencies with `npm install`.
3. **Create Pages and Components**: Build pages for login, registration, viewing recipes, and creating new recipes. Create reusable components like a navigation bar and recipe form.
4. **JWT Authentication**: Store JWT tokens in local storage for user authentication and session management.
5. **Routing**: Use React Router for page navigation (e.g., login, register, saved recipes, view recipes).

## Project Structure

### Backend (`server/`)

