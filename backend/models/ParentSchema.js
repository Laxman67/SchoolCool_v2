import { model, Schema } from 'mongoose';
import validator from 'validator';

const parentSchema = new Schema({
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'Provide Valid Email'],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, 'Must contain atleat 10 Number'],
    maxLength: [10, 'Must contain 10 Numbers only'],
  },
  address: {
    type: String,
    required: true,
  },
  isMapped: {
    type: String,
    default: 'false',
    required: true,
    enum: ['true', 'false'],
  },
});

const Parent = model('Parent', parentSchema);
export default Parent;
