import Student from '../models/studentSchema.js';
import {
  handleValidationError,
  errorHandler,
} from '../middleware/errorHandler.js';

export const createStudent = async (req, res, next) => {
  const { name, registrationNumber, grade } = req.body;

  try {
    if (!name || !registrationNumber || !grade) {
      // handleValidationError('Please Enter All Details', 400);
      res.status(404).json({
        message: 'Please Enter All Details',
      });
    }

    await Student.create({ name, registrationNumber, grade });

    res.status(201).json({
      message: 'Student Created',
    });
  } catch (error) {
    const { errmsg } = error.errorResponse;
    return res.status(404).json({
      success: false,
      errmsg,
    });
  }
};

export const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      message: 'Students ',
      data: students,
    });
  } catch (error) {
    next(error);
  }
};
