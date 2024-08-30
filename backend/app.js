import { configDotenv } from 'dotenv';
import express from 'express';
import cors from 'cors';
import DBConnect from './database/DBConnect.js';
import studentRouter from './routes/studentRouter.js';
import eventsRouter from './routes/eventsRoute.js';
import libraryRouter from './routes/libraryRoute.js';
import announcementRouter from './routes/announcementRoute.js';
import assignmentRouter from './routes/assignmentRoute.js';
import attendanceRouter from './routes/attendanceRoute.js';
import classRouter from './routes/ClassRoute.js';
import examRouter from './routes/examRoute.js';
import teacherRouter from './routes/teacherRoute.js';

const app = express();
configDotenv();

// Database
DBConnect();

// CORS Configuration
app.use(
  cors({
    origin: [
      'http://localhost:5173', // Local development URL
      'https://schoolcool2-frontend.onrender.com', // Production frontend URL
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // If you need to handle cookies or authentication headers
  })
);

// Middleware
app.use(express.json()); // To parse JSON body
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/v1/students', studentRouter);
app.use('/api/v1/events', eventsRouter);
app.use('/api/v1/library', libraryRouter);
app.use('/api/v1/announcement', announcementRouter);
app.use('/api/v1/assignment', assignmentRouter);
app.use('/api/v1/attendance', attendanceRouter);
app.use('/api/v1/classes', classRouter);
app.use('/api/v1/exam', examRouter);
app.use('/api/v1/teachers', teacherRouter);

export default app;
