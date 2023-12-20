import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/User.js';
import { CreateError } from '../middleware/Error/error.js';

export const signUp = async (req, res, next) => {
  try {
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).json('new user is created');
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const findUser = await User.findOne({ email: req.body.email });
    if (!findUser) return next(CreateError(404, 'email is not found'));
    const comPass = await bcryptjs.compare(
      req.body.password,
      findUser.password
    );
    if (!comPass) return next(CreateError(401, 'password is inCorrect '));

    //generate token

    const token = jwt.sign(
      { id: findUser._id, isAdmin: findUser.isAdmin },
      process.env.JWT_S
    );
    const { password, ...other } = findUser._doc;

    res
      .cookie('ene', token, {
        httpOnly: true,
        sameSite: 'None',
        secure: true,
      })
      .status(200)
      .json(other);
  } catch (error) {
    next(error);
  }
};
