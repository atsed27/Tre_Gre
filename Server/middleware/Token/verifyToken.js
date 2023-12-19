import jwt from 'jsonwebtoken';
import { CreateError } from '../Error/error.js';

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.ene;
  if (!token) {
    return next(CreateError(401, 'You are not authenticated'));
  }
  jwt.verify(token, process.env.JWT_S, (err, user) => {
    if (err) return next(CreateError(403, 'token is Invalid'));
    req.user = user;
    console.log(user);
    next();
  });
};
