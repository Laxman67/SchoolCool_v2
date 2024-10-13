import express from 'express';
import {
  addAcademicHistory,
  addStudent,
  getAllStudents,
  updateStudent,
} from '../controllers/studentController.js';

const studentRouter = express.Router();

studentRouter.get('/', getAllStudents);
studentRouter.post('/add', addStudent);
studentRouter.post('/academic/:studentId', addAcademicHistory);
studentRouter.put('/update/:studentId', updateStudent);

export default studentRouter;
