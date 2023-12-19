import { CreateError } from '../middleware/Error/error.js';
import User from '../model/User.js';

export const update = async (req, res, next) => {
  try {
    const findUser = await User.findById(req.params.id);
    if (!findUser) return next(CreateError(404, 'user is not found'));
    if (req.params.id === req.user.id || req.user.isAdmin) {
      const update = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(update);
    } else {
      return next(CreateError(403, 'you can update only your account'));
    }
  } catch (error) {
    next(error);
  }
};

export const Delete = async (req, res, next) => {
  try {
    const findUser = await User.findById(req.params.id);
    if (!findUser) return next(CreateError(404, 'user is not found'));
    if (req.params.id === req.user.id || req.user.isAdmin) {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('your is deleted ');
    } else {
      return next(CreateError(403, 'you can delete only your account'));
    }
  } catch (error) {
    next(error);
  }
};
