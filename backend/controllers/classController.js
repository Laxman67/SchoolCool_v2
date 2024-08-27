import Class from '../models/classSchema.js';

export const createClass = async (req, res, next) => {
  const { grade } = req.body;

  try {
    if (!grade) {
      // handleValidationError('Please Enter All Details', 400);
      return res.status(404).json({
        message: 'Please Enter All Details',
      });
    }

    await Class.create({ grade });

    res.status(201).json({
      message: 'Class Created',
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      errorMsg: error,
    });
  }
};

export const getAllClass = async (req, res, next) => {
  try {
    const classes = await Class.find();

    res.status(200).json({
      message: 'Class ',
      data: classes,
    });
  } catch (error) {
    next(error);
  }
};
