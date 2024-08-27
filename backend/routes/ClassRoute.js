import express from 'express';
import { createClass, getAllClass } from '../controllers/classController.js';

const classRouter = express.Router();

classRouter.get('/', getAllClass);
classRouter.post('/', createClass);

export default classRouter;
