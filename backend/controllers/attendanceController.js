import Attendance from '../models/attendanceSchema.js';
import Student from '../models/studentSchema.js';

export const makeAttendance = async (req, res) => {
  try {
    const { studentId, status } = req.body;

    // Check if the student exists
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Create a new attendance record
    const attendance = new Attendance({
      student: studentId,
      status,
    });

    // Save the attendance record to the database
    await attendance.save();

    // Return a success response
    res.status(201).json({
      message: 'Attendance recorded successfully',
      attendance,
    });
  } catch (error) {
    console.error('Error adding attendance:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to get all attendance records with detailed student information
export const getAllAttendance = async (req, res, next) => {
  try {
    // Fetch all attendance records and populate the 'student' field with name, registrationNumber, and grade
    const attendance = await Attendance.find().populate(
      'student', // This is Ref -> Object Id ,  i am trying to populate based on this field
      'name registrationNumber grade -_id'
    );

    // Return the attendance records with a success message
    res.status(200).json({
      message: 'Attendance records retrieved successfully',
      attendance,
    });
  } catch (error) {
    // Pass any errors to the next middleware (error handler)
    next(error);
  }
};
