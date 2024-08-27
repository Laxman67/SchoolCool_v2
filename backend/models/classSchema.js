import { model, Schema } from 'mongoose';

const schemaOptions = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};
const classSchema = new Schema(
  {
    grade: {
      type: String,
      required: true,
    },
    
  },
  schemaOptions
);

const Class = model('Class', classSchema);

export default Class;
