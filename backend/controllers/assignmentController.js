import Assignment from '../models/assignmentSchema.js';

export const createAssignment = async (req, res, next) => {
  const { title, description, grade, deadline } = req.body;

  try {
    if (!title || !description || !grade || !deadline) {
      // handleValidationError('Please Enter All Details', 400);
      return res.status(404).json({
        message: 'Please Enter All Details',
      });
    }

    await Assignment.create({ title, description, grade, deadline });

    res.status(201).json({
      message: 'Assignment Created',
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      error,
    });
  }
};

export const getAllAssignment = async (req, res, next) => {
  try {
    const assignment = await Assignment.find();

    res.status(200).json({
      message: 'Assignments ',
      assignment,
    });
  } catch (error) {
    next(error);
  }
};
