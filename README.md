
# Expense Tracker Application

This project is an Expense Tracker application built using the MVC (Model-View-Controller) architecture. The backend is powered by Node.js and Express, while the frontend is built with React. The application is a full-stack expense tracker that enables users to record, view, update, and delete expense entries. Built using the MVC architecture, it efficiently manages data flow between the database, backend logic, and frontend UI. Users can log expenses by date, assign categories, mark essential items, and view expense histories. The app's responsive design supports real-time data interaction, making it a practical tool for personal finance management.

## Features

- **Expense Management:** Add, update, delete, and categorize expenses.
- **Expense Analysis:** View lists of expenses based on dates or categories.
- **User-friendly Interface:** Interactive UI built using React for easy expense tracking.
- **Database Integration:** Persistent data storage using PostgreSQL.
- **RESTful API:** CRUD operations through structured routes for seamless backend communication.

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- PostgreSQL installed and running locally with Postbird (optional) as a GUI client.

### Installation

1. Clone the repository:

2. Install backend dependencies:
   ```sh
   npm install
   ```

3. Install frontend dependencies:
   ```sh
   cd view
   npm install
   cd ..
   ```

4. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   DB_USER=your_database_username
   DB_PASSWORD=your_database_password
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   DB_DATABASE=your_database_name
   PORT=8000
   ```

5. Database Setup:
    ```
    CREATE TABLE expenses(
        expense_id SERIAL PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        category VARCHAR(30) NOT NULL,
        essential BOOLEAN NOT NULL,
        created_at TIMESTAMPTZ NOT NULL
    );
    ```

### Running the Application

1. Start the backend server:
   ```sh
   npm run server
   ```

2. Start the frontend development server:
   ```sh
   cd view
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

### Project Structure

- `server.js`: Entry point for the backend server.
- `controllers/`: Contains the controller functions for handling requests.
- `routes/`: Defines the API routes.
- `models/`: Contains the database models.
- `view/`: Contains the React frontend application.
- `view/src/`: Source code for the React application.
- `view/src/components/`: React components used in the application.
- `view/src/utils/`: Utility functions for interacting with the backend.


### License

This project is licensed under the MIT License.
```