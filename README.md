
# School Management System

Welcome to the **School Management System** project! This application is an all-in-one platform designed to streamline school operations, making it easier for administrators, teachers, students, and parents to manage daily activities, communication, and resources.

## Table of Contents

- [School Management System](#school-management-system)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Technology Stack](#technology-stack)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [API Endpoints](#api-endpoints)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Project Overview

The School Management System is a comprehensive web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a robust backend and a user-friendly frontend, offering various modules to manage different aspects of a school’s operations. This project has been meticulously crafted to showcase my skills in full-stack web development and plays a pivotal role in my journey towards securing my first job in the tech industry.

## Features

- **User Authentication**: Secure login for admins, teachers, students, and parents.
- **Student Management**: CRUD operations for student data, including enrollment, grading, and attendance.
- **Teacher Management**: Manage teacher profiles, schedules, and assignments.
- **Class Management**: Create and manage classes, subjects, and timetables.
- **Attendance Tracking**: Record and view attendance for students across different classes.
- **Assignment Management**: Teachers can create, assign, and grade assignments.
- **Library Management**: Manage books, issue/return records, and track library inventory.
- **Event Management**: Create and manage school events, and notify stakeholders.
- **Announcement System**: Broadcast important announcements to students, teachers, and parents.
- **Exam Management**: Schedule exams, assign grades, and generate report cards.

## Technology Stack

- **Frontend**: React.js, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API Testing**: Thunder Client
- **Environment**: Node.js, npm

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Laxman67/SchoolCool2.git
   cd SchoolCool2
   ```

1. Navigate to the frontend directory:
   ```bash
   cd backend
   ```


2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=4000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## API Endpoints

Below are some of the key API endpoints used in the project:

- **Students**: `/api/v1/students`
- **Teachers**: `/api/v1/teachers`
- **Classes**: `/api/v1/classes`
- **Attendance**: `/api/v1/attendance`
- **Exams**: `/api/v1/exam`
- **Library**: `/api/v1/library`
- **Announcements**: `/api/v1/announcement`
- **Assignments**: `/api/v1/assignment`
- **Events**: `/api/v1/events`

## Usage

Once both the backend and frontend servers are running, you can access the application in your browser at `http://localhost:5173`.

- **Admin Login**: Use the admin credentials to access the admin dashboard, where you can manage all aspects of the school system.
- **Teacher Login**: Teachers can log in to manage classes, assignments, and exams.
- **Student Login**: Students can view their classes, submit assignments, and check their grades.
- **Parent Login**: Parents can monitor their children's performance and stay updated with school announcements.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

For any questions or inquiries, please contact me at:
- **Email**: laxman.yourname@example.com
- **LinkedIn**: [Laxman LinkedIn](https://www.linkedin.com/in/yourprofile/)
- **GitHub**: [Laxman GitHub](https://github.com/yourusername)

