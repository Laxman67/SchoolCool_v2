import mongoose from 'mongoose';

const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
  },
  grade: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

const Exam = mongoose.model('Exam', examSchema);

export default Exam;
