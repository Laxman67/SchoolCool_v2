import Exam from '../models/examModel.js';

export const createExam = async (req, res, next) => {
  const { name, registrationNumber, grade, marks } = req.body;

  try {
    if (!name || !registrationNumber || !grade || !marks) {
      // handleValidationError('Please Enter All Details', 400);
      return res.status(404).json({
        message: 'Please Enter All Details',
      });
    }

    await Exam.create({ name, registrationNumber, grade, marks });

    res.status(201).json({
      message: 'Exam Record Added',
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error,
    });
  }
};

export const getAllExams = async (req, res, next) => {
  try {
    const exam = await Exam.find();

    res.status(200).json({
      message: 'Exam ',
      data: exam,
    });
  } catch (error) {
    next(error);
  }
};
