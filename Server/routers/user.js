import express from 'express';
import { verifyToken } from '../middleware/Token/verifyToken.js';
import { Delete, update } from '../controllers/users.js';

const router = express.Router();

router.put('/update/:id', verifyToken, update);

//delete user
router.delete('/delete/:id', verifyToken, Delete);

export default router;
