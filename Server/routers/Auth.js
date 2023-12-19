import express from 'express';
import { signUp } from '../controllers/Auth.js';
import { signIn } from '../controllers/Auth.js';

const router = express.Router();

router.post('/signUp', signUp);

router.post('/signin', signIn);
export default router;
