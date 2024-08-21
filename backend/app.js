import { configDotenv } from 'dotenv';
import express from 'express';
import DBConnect from './database/DBConnect.js';
import studentRouter from './routes/studentRouter.js';
const app = express();
configDotenv();

// Database
DBConnect();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Port

app.use('/api/v1/students', studentRouter);

export default app;
