import Parent from '../models/ParentSchema.js';

import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import { ErrorHandler } from '../middleware/errorHandler.js';

export const addParent = catchAsyncErrors(async (req, res, next) => {
  const { fatherName, motherName, email, phone, address } = req.body;

  if (!fatherName || !motherName || !email || !phone || !address) {
    return next(new ErrorHandler('Provide All Details'));
  }

  const isRegistered = await Parent.findOne({ email });

  if (isRegistered) {
    return next(new ErrorHandler('Email is Already Registered '));
  }

  const parent = await Parent.create({
    fatherName,
    motherName,
    email,
    phone,
    address,
  });

  res.status(201).json({
    success: true,
    parent,
  });
});
