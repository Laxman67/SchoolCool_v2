import Teacher from '../models/teacherModel.js';

export const createTeacher = async (req, res, next) => {
  const { name, email, subject } = req.body;

  try {
    if (!name || !email || !subject) {
      // handleValidationError('Please Enter All Details', 400);
      return res.status(404).json({
        message: 'Please Enter All Details',
      });
    }

    await Teacher.create({ name, email, subject });

    res.status(201).json({
      message: 'Teacher Created',
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error,
    });
  }
};

export const getAllTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.find();

    res.status(200).json({
      message: 'Teacher ',
      data: teacher,
    });
  } catch (error) {
    next(error);
  }
};
