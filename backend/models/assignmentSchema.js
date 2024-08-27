import { model, Schema } from 'mongoose';

const assignmentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
});

const Assignment = model('Assignment', assignmentSchema);

export default Assignment;
