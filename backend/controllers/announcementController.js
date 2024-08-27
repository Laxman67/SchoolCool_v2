import Announcement from '../models/announcementsSchema.js';

export const createAnnouncement = async (req, res, next) => {
  const { announcement } = req.body;

  try {
    if (!announcement) {
      // handleValidationError('Please Enter All Details', 400);
      res.status(404).json({
        message: 'Please Enter All Details',
      });
    }

    await Announcement.create({ announcement });

    res.status(201).json({
      message: 'Announcement Created',
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error,
    });
  }
};

export const getAllAnnouncement = async (req, res, next) => {
  try {
    const announcement = await Announcement.find();

    res.status(200).json({
      message: 'Announcements ',
      announcement,
    });
  } catch (error) {
    next(error);
  }
};
