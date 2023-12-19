import mongoose from 'mongoose';

const JObSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
    salary: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    workTime: {
      type: String,
      required: true,
    },
    workPlace: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Job', JObSchema);
