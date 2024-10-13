import express from 'express';
import { addParent } from '../controllers/parentController.js';
const parentRouter = express.Router();

parentRouter.post('/add', addParent);

export default parentRouter;
