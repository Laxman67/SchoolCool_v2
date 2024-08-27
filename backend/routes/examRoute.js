import express from 'express';
import { createExam, getAllExams } from '../controllers/examController.js';

const examRouter = express.Router();

examRouter.get('/', getAllExams);
examRouter.post('/', createExam);

export default examRouter;
