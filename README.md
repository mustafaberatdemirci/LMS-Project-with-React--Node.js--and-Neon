# LMS (Learning Management System) Project Documentation

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Frontend Components](#frontend-components)

## Overview

This Learning Management System (LMS) is a full-stack web application built with React, Node.js, and Neon PostgreSQL. It provides a platform for managing courses with features like course creation, updating, and deletion.

## Tech Stack

### Frontend
- React 18.3.1
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Axios (for API requests)

### Backend
- Node.js
- Express.js
- PostgreSQL (Neon)
- CORS
- dotenv

## Project Structure

```
project/
├── src/                    # Frontend source files
│   ├── App.tsx            # Main React component
│   ├── main.tsx           # React entry point
│   └── index.css          # Global styles
├── server/                 # Backend source files
│   ├── controllers/       # Route controllers
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── db.js            # Database configuration
│   └── index.js         # Server entry point
├── supabase/             # Database migrations
└── public/               # Static assets
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- PostgreSQL database (Neon)

### Environment Setup

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_neon_database_url_here
PORT=3000
```

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
# Start frontend
npm run dev

# Start backend (in a new terminal)
npm run server
```

## API Documentation

### Base URL
```
http://localhost:3000/api
```

### Endpoints

#### Courses

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/courses` | Get all courses |
| GET | `/courses/:id` | Get a specific course |
| POST | `/courses` | Create a new course |
| PUT | `/courses/:id` | Update a course |
| DELETE | `/courses/:id` | Delete a course |

#### Example Requests

##### Get All Courses
```javascript
GET /api/courses
```

Response:
```json
[
  {
    "id": 1,
    "title": "Course Title",
    "description": "Course Description",
    "created_at": "2025-04-07T13:06:50.000Z"
  }
]
```

##### Create Course
```javascript
POST /api/courses
Content-Type: application/json

{
  "title": "New Course",
  "description": "Course Description"
}
```

## Database Schema

### Courses Table

| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary Key |
| title | VARCHAR(255) | Course title |
| description | TEXT | Course description |
| created_at | TIMESTAMP | Creation timestamp |

## Frontend Components

### Main App Component
The main App component (`src/App.tsx`) provides the following features:
- Course listing
- Course creation form
- Course editing
- Course deletion
- Responsive design with Tailwind CSS

### State Management
- Uses React hooks (useState, useEffect)
- Manages course data through API calls
- Handles form state for course creation/editing

### UI Components
- Form inputs for course management
- Course cards with edit/delete actions
- Responsive grid layout
- Icon integration with Lucide React

## Error Handling

### Backend
- Centralized error handling middleware
- Validation error handling
- 404 route handling
- Database error handling

### Frontend
- API error handling
- Form validation
- User feedback for actions
- Loading states

## Security

- CORS enabled
- Input validation
- Error message sanitization
- SSL enabled for database connection

## Development Guidelines

1. **Code Style**
   - Use TypeScript for type safety
   - Follow ESLint configuration
   - Use async/await for asynchronous operations

2. **Git Workflow**
   - Create feature branches
   - Write descriptive commit messages
   - Review code before merging

3. **API Development**
   - Follow RESTful conventions
   - Validate input data
   - Handle errors consistently
   - Document new endpoints

4. **Database**
   - Use migrations for schema changes
   - Add appropriate indexes
   - Follow naming conventions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.