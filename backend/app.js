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

// middleware
// This defines which site or url can request to this server & accepted methods

app.use(express.json()); // To parse JSON body
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://schoolcool2-frontend.onrender.com/',
    ],
  })
);
// app.use(

//   cors({
//     origin: ['http://localhost:5173/'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   })
// );
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

// class
app.use('/api/v1/classes', classRouter);

// exam
app.use('/api/v1/exam', examRouter);

// teacher
app.use('/api/v1/teachers', teacherRouter);

export default app;
