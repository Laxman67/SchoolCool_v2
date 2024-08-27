import express from 'express';
import { createEvents, getAllEvents } from '../controllers/eventsController.js';

const eventsRouter = express.Router();

eventsRouter.get('/', getAllEvents);
eventsRouter.post('/', createEvents);

export default eventsRouter;
