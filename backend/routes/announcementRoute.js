import express from 'express';
import {
  createAnnouncement,
  getAllAnnouncement,
} from '../controllers/announcementController.js';

const announcementRouter = express.Router();

announcementRouter.get('/', getAllAnnouncement);
announcementRouter.post('/', createAnnouncement);

export default announcementRouter;
