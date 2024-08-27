import express from 'express';
import { createBook, getAllBooks } from '../controllers/libraryController.js';

const libraryRouter = express.Router();

libraryRouter.get('/', getAllBooks);
libraryRouter.post('/', createBook);

export default libraryRouter;
