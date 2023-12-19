import { CreateError } from '../middleware/Error/error.js';
import Job from '../model/Job.js';
import User from '../model/User.js';

//get all job

export const getAllJob = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    if (!jobs) return next(CreateError(404, 'job is not found'));
    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};

//get one jobs
export const getJob = async (req, res, next) => {
  try {
    const findJob = await Job.findById(req.params.id);
    if (!findJob) return next(CreateError(404, 'job is not found'));
    res.status(200).json(findJob);
  } catch (error) {
    next(error);
  }
};
//get job creator user
export const getCreator = async (req, res, next) => {
  try {
    const findUser = await User.findById(req.params.id);
    if (!findUser) return next(CreateError(404, 'user is not found'));
    const { password, ...other } = findUser._doc;
    res.status(200).json(other);
  } catch (error) {
    next(error);
  }
};

export const CreateJob = async (req, res, next) => {
  try {
    const newJob = new Job({ ...req.body, userId: req.user.id });
    await newJob.save();
    res.status(200).json('you have created a new Job');
  } catch (error) {
    next(error);
  }
};

export const updateJob = async (req, res, next) => {
  try {
    const findJob = await Job.findById(req.params.id);
    if (!findJob) return next(CreateError(404, 'job is not found'));
    if (findJob.userId === req.user.id || req.user.isAdmin) {
      const update = await Job.findByIdAndUpdate(
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
      return next(CreateError(403, 'you can update only your job posts'));
    }
  } catch (error) {
    next(error);
  }
};

//delete
export const Delete = async (req, res, next) => {
  try {
    const findJob = await Job.findById(req.params.id);
    if (!findJob) return next(CreateError(404, 'job is not found'));
    if (findJob.userId === req.user.id || req.user.isAdmin) {
      await Job.findByIdAndDelete(req.params.id);
      res.status(200).json('job is delete');
    } else {
      return next(CreateError(403, 'you can delete only your job posts'));
    }
  } catch (error) {
    next(error);
  }
};

//
export const Search = async (req, res, next) => {
  try {
    const Jobs = await Job.find({
      title: { $regex: req.body.title, $options: 'i' },
    }).limit(40);
    if (Jobs.length === 0) return next(CreateError(404, 'Job is not Found'));
    res.status(200).json(Jobs);
  } catch (error) {
    next(error);
  }
};
