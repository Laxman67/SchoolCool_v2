import { model, Schema } from 'mongoose';

const schemaOptions = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};
const eventsSchema = new Schema(
  {
    event: {
      type: String,
      required: true,
    },
    eventDeadline: { type: String, required: true },
  },
  schemaOptions
);

const Events = model('Events', eventsSchema);

export default Events;
