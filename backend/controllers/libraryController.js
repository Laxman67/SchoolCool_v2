import Book from '../models/librarySchema.js';

export const createBook = async (req, res, next) => {
  const { bookname, author } = req.body;

  try {
    if (!bookname || !author) {
      // handleValidationError('Please Enter All Details', 400);
      return res.status(404).json({
        message: 'Please Enter All Details',
      });
    }

    await Book.create({ bookname, author });

    res.status(201).json({
      message: 'Book Created',
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      errorMsg: error,
    });
  }
};

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();

    res.status(200).json({
      message: 'Books ',
      books,
    });
  } catch (error) {
    next(error);
  }
};
