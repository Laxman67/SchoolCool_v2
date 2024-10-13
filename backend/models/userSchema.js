import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

const AcademicHistorySchema = new mongoose.Schema({
  year: { type: Number, required: true },
  grade: { type: String, required: true },
  subjects: [{ type: String }],
  achievements: { type: String },
});

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  avatar: {
    public_id: String,
    url: String,
  },
  dob: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'Please Provide a Valid Email !'],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, 'Phone must be min of 10 characher'],
    maxLength: [10, 'Phone must be max of 10 characher'],
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Others'],
  },
  password: {
    type: String,
    minLength: [8, 'Password must contain atleast 8 Characters '],
    required: true,
    select: false, // by default it will not fetch when user is fetched
  },
  role: {
    type: String,
    required: true,
    enum: ['Admin', 'Parent', 'Student', 'Teacher'],
  },

  // For Student =======
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parent',
    unique: true,
  },
  academicHistory: [AcademicHistorySchema],
  // ======

  // For Teacher
  subject: {
    type: String,
    enum: [
      'Hindi',
      'English',
      'Maths',
      'Science',
      'Social Science',
      'Political Science',
      'Economics',
      'History',
      'Chemistry',
      'Biology',
      'Physical Education',
    ],
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});
const User = mongoose.model('"User"', userSchema);

export default User;

/**
 * 
 * 
 * 
 *   const student = await Student.findByIdAndUpdate(
      req.params.studentId,
      {
        $push: {
                academicHistory: {
                  year,
                  grade,
                  subjects,
                  achievements
                }
              }
      },
      { new: true }
    );
 */
