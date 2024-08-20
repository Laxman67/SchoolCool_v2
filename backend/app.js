import { configDotenv } from 'dotenv';
import express from 'express';
import DBConnect from './database/DBConnect.js';
const app = express();
configDotenv();

// Database
DBConnect();

// middleware

// Port

export default app;
