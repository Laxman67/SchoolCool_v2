import express from 'express';
import {
  makeAttendance,
  getAllAttendance,
} from '../controllers/attendanceController.js';

const attendanceRouter = express.Router();

attendanceRouter.get('/', getAllAttendance);
attendanceRouter.post('/', makeAttendance);

export default attendanceRouter;
