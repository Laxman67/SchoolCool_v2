import User from '../models/userSchema.js';

import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import { ErrorHandler } from '../middleware/errorHandler.js';
import Parent from '../models/ParentSchema.js';
import cloudinary from 'cloudinary';

export const addStudent = catchAsyncErrors(async (req, res, next) => {
  // 1. Files

  if (!req.files || Object.keys(req.files) === 0) {
    return next(new ErrorHandler('avatar is Required'));
  }

  const { avatar } = req.files;
  const allowedFormat = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

  if (!allowedFormat.includes(avatar.mimetype)) {
    return next(new ErrorHandler('Format not Supported', 400));
  }

  const { firstName, lastName, email, phone, dob, gender, parentId, password } =
    req.body;

  // 3. Check for Email
  const isEmailRegistered = await User.findOne({ email });
  if (isEmailRegistered) {
    return next(
      new ErrorHandler(
        `${isEmailRegistered.role} is already registered with this email`
      )
    );
  }

  // 4. Find Parent to check it is linked or not to student

  const parent = await Parent.findById(parentId).exec();

  if (parent.isMapped === 'true') {
    return next(
      new ErrorHandler(`${parent.email} is already mapped to Student `)
    );
  }

  // 5 . Upload avatar to Cloudinary

  // let avararCloudinaryResponse;
  // try {
  //   avararCloudinaryResponse = await cloudinary.uploader.upload(
  //     avatar.tempFilePath,
  //     { folder: 'Students' }
  //   );
  // } catch (error) {
  //   return next(new ErrorHandler('Failed to Upload avatar to Cloudinary', 500));
  // }

  const student = await User.create({
    firstName,
    lastName,
    // avatar: {
    //   public_url: avararCloudinaryResponse.public_url,
    //   url: avararCloudinaryResponse.secure_url,
    // },
    email,
    phone,
    dob,
    gender,
    parentId,
    password,
    role: 'Student',
  });

  // TODO parent.isMapped => true
  await parent.updateOne({ isMapped: 'true' });
  await parent.save();

  // await Parent.findByIdAndUpdate(parentId, { isMapped: 'true' }, { new: true });

  res.status(201).json({
    success: true,
    message: 'Student Added',
    student,
  });
});

/*
 */

export const getAllStudents = catchAsyncErrors(async (req, res, next) => {
  let students = await User.find({ role: 'Student' }).populate(
    'parentId',
    '-_id'
  );

  res.status(200).json({
    success: true,
    students,
  });
});

export const addAcademicHistory = catchAsyncErrors(async (req, res, next) => {
  const { year, grade, subjects, achievements } = req.body;

  if (!year || !grade || !subjects || !achievements) {
    return next(new ErrorHandler('Fill All Details', 400));
  }

  const student = await User.findByIdAndUpdate(
    req.params.studentId,
    {
      $push: {
        academicHistory: {
          year,
          grade,
          subjects,
          achievements,
        },
      },
    },
    { new: true }
  );

  res.status(201).json({
    success: true,
    message: 'Academic history Added Successfuly',
  });
});

export const updateStudent = catchAsyncErrors(async (req, res, next) => {
  const studentId = req.params.studentId;

  if (!studentId) {
    return next(new ErrorHandler('Provide Student Id'));
  }

  const student = await User.findByIdAndUpdate(req.params.studentId, req.body, {
    new: true,
  });

  if (!student) {
    return next(new ErrorHandler('No student found'));
  }

  res.status(201).json({
    success: true,
    message: 'student Updated Successfully',
  });
});
