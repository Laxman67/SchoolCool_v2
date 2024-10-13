import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import DBConnect from './database/DBConnect.js';
import { errorMiddleware } from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';
import studentRouter from './routes/studentRouter.js';
import parentRouter from './routes/parentRouter.js';
import fileUpload from 'express-fileupload';

const app = express();

config({
  path: './config/config.env',
});

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

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to get form data

// Express File Upload Setup
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  })
);

// API Routes
app.get('/api/v1/docs');
app.use('/api/v1/student', studentRouter);
app.use('/api/v1/parent', parentRouter);

// Database
DBConnect();

fileUpload;

app.use(errorMiddleware);

export default app;
