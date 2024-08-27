import { model, Schema } from 'mongoose';
const schemaOptions = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};
const announcementSchema = new Schema(
  {
    announcement: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

const Announcement = model('Announcement', announcementSchema);

export default Announcement;
