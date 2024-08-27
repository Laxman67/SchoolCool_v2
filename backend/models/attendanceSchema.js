import mongoose, { model, Schema } from 'mongoose';

const attendanceSchema = new Schema({
  student: {
    type: mongoose.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  status: {
    type: String,
    enum: ['Present', 'Absent', 'Absent with Apology'],
    required: true,
  },
});

const Attendance = model('Attendance', attendanceSchema);

export default Attendance;
