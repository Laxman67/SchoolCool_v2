import express from 'express';
import {
  createAssignment,
  getAllAssignment,
} from '../controllers/assignmentController.js';

const assignmentRouter = express.Router();

assignmentRouter.get('/', getAllAssignment);
assignmentRouter.post('/', createAssignment);

export default assignmentRouter;
