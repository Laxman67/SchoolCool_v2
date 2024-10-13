import catchAsyncErrors from './catchAsyncErrors';
import { ErrorHandler } from '../middleware/errorHandler';
import JWT from 'jsonwentoken';

export const isStudentAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    let token = req.cookies.studentToken;

    if (!token) {
      return next(new ErrorHandler('Student Not Authenticated', 400));
    }

    //   Get id from token
    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);

    // _id is decoded and now search for role
    req.user = await User.findById(decoded.id);

    //
    if (req.user.role !== 'Student') {
      return next(
        new ErrorHandler(
          `${req.user.role} not authorised for this resource`,
          403
        )
      );
    }

    //   if all conditions match -> Admin is Requesting
    next();
  }
);
export const isAdminAuthenticated = catchAsyncErrors(async (req, res, next) => {
  let token = req.cookies.adminToken;

  if (!token) {
    return next(new ErrorHandler('Admin Not Authenticated', 400));
  }

  //   Get id from token
  const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);

  // _id is decoded and now search for role
  req.user = await User.findById(decoded.id); // id:_id in jwtGenerate

  // Checking for user role
  if (req.user.role !== 'Admin') {
    return next(
      new ErrorHandler(`${req.user.role} not authorised for this resource`, 403)
    );
  }

  //   if all conditions match -> Admin is Requesting
  next();
});
export const isTeacherAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    let token = req.cookies.teacherToken;

    if (!token) {
      return next(new ErrorHandler('Teacher Is  Not Authenticated', 400));
    }

    //   Get id from token
    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);

    // _id is decoded and now search for role
    req.user = await User.findById(decoded.id); // id:_id in jwtGenerate

    // Checking for user role
    if (req.user.role !== 'Teacher') {
      return next(
        new ErrorHandler(
          `${req.user.role} not authorised for this resource`,
          403
        )
      );
    }

    //   if all conditions match -> Admin is Requesting
    next();
  }
);
export const isParentAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    let token = req.cookies.parentToken;

    if (!token) {
      return next(new ErrorHandler('Parent Is  Not Authenticated', 400));
    }

    //   Get id from token
    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY);

    // _id is decoded and now search for role
    req.user = await User.findById(decoded.id); // id:_id in jwtGenerate

    // Checking for user role
    if (req.user.role !== 'Parent') {
      return next(
        new ErrorHandler(
          `${req.user.role} not authorised for this resource`,
          403
        )
      );
    }

    //   if all conditions match -> Admin is Requesting
    next();
  }
);
