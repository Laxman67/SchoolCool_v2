import { model, Schema } from 'mongoose';

const studentSchema = new Schema({
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
});

const Student = model('student', studentSchema);

export default Student;
