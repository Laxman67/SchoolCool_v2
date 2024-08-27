import Events from '../models/eventsSchema.js';

export const createEvents = async (req, res, next) => {
  const { event, eventDeadline } = req.body;

  try {
    if (!event || !eventDeadline) {
      // handleValidationError('Please Enter All Details', 400);
      return res.status(404).json({
        message: 'Please Enter All Details',
      });
    }

    await Events.create({ event, eventDeadline });

    res.status(201).json({
      message: 'Event Created',
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      errorMsg: error,
    });
  }
};

export const getAllEvents = async (req, res, next) => {
  try {
    const events = await Events.find();

    res.status(200).json({
      message: 'Events ',
      data: events,
    });
  } catch (error) {
    next(error);
  }
};
