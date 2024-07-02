# Task Manager

A simple task management application with a ReactJS frontend and a Flask backend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the Frontend](#running-the-frontend)
- [Running the Backend](#running-the-backend)
- [Running Unit Tests](#running-unit-tests)

## Prerequisites

- Node.js and npm (for frontend)
- Python3 and pip (for backend)
- SQLite as a database

## Getting Started

1. **Clone the repository**

    ```sh
    git clone https://github.com/MUKESHSIHAG/Full-Stack-Developer-pestotech.git
    cd Full-Stack-Developer-pestotech
    ```
## Running the Frontend

1. **Navigate to the frontend directory**

    ```sh
    cd frontend
    ```

2. **Install the dependencies**

    ```sh
    npm install
    ```

3. **Start the frontend application**

    ```sh
    npm start
    ```

    The application will start on `http://localhost:3000`.

## Running the Backend

1. **Navigate to the backend directory**

    ```sh
    cd backend
    ```

2. **Create and activate a virtual environment (optional but recommended)**

    ```sh
    python -m venv venv
    source venv/bin/activate   # On Windows use `venv\Scripts\activate`
    ```

3. **Install the dependencies**

    ```sh
    pip install -r requirements.txt
    ```

4. **Start the backend application**

    ```sh
    python app.py
    ```

    The backend will start on `http://localhost:5000`.

## Running Unit Tests

1. **Navigate to the backend directory (If not in the backend directory)**

    ```sh
    cd backend
    ```

2. **Run the tests using pytest**

    ```sh
    pytest
    ```

    This will run the unit tests.

## Notes

- Ensure the backend is running before starting the frontend to ensure the frontend can communicate with the backend.
- The frontend and backend are configured to run on ports `3000` and `5000` respectively. Make sure these ports are available or modify the configuration if necessary.
