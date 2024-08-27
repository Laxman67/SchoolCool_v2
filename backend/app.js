import { configDotenv } from 'dotenv';
import express from 'express';
import DBConnect from './database/DBConnect.js';
import studentRouter from './routes/studentRouter.js';
import eventsRouter from './routes/eventsRoute.js';
import libraryRouter from './routes/libraryRoute.js';
import announcementRouter from './routes/announcementRoute.js';
import assignmentRouter from './routes/assignmentRoute.js';
import attendanceRouter from './routes/attendanceRoute.js';
const app = express();
configDotenv();

// Database
DBConnect();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Port URL ->REST API

// Student
app.use('/api/v1/students', studentRouter);

// Events
app.use('/api/v1/events', eventsRouter);

// library
app.use('/api/v1/library', libraryRouter);

// annoucements
app.use('/api/v1/announcement', announcementRouter);

// assignments
app.use('/api/v1/assignment', assignmentRouter);

// attendance
app.use('/api/v1/attendance', attendanceRouter);

export default app;
