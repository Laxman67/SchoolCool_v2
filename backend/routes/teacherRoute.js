import express from 'express';
import {
  createTeacher,
  getAllTeacher,
} from '../controllers/teacherController.js';

const teacherRouter = express.Router();

teacherRouter.get('/', getAllTeacher);
teacherRouter.post('/', createTeacher);

export default teacherRouter;
