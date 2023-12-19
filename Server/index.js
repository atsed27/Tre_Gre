import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import AuthRouter from './routers/Auth.js';
import UserRouter from './routers/user.js';
import JobRouter from './routers/Job.js';

const app = express();

//dotenv config
dotenv.config();

// mongo db connection
const connect = () => {
  mongoose
    .connect(process.env.DataBase)
    .then(() => {
      console.log('mongo db is connect');
    })
    .catch((error) => {
      throw error;
    });
};

//router on based express

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//Router
app.use('/api/auth', AuthRouter);
app.use('/api/users', UserRouter);
app.use('/api/jobs', JobRouter);

//error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message =
    err.message || "something wrong! their don't no servers this error ";
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
  });
});
//Listen to server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  connect();
  console.log('port is connect at ' + port);
});
