import { model, Schema } from 'mongoose';

const schemaOptions = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};
const librarySchema = new Schema(
  {
    bookname: {
      type: String,
      required: true,
    },
    author: { type: String, required: true },
  },
  schemaOptions
);

const Book = model('Library', librarySchema);

export default Book;
