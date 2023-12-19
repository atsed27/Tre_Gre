import express from 'express';
import { verifyToken } from '../middleware/Token/verifyToken.js';
import {
  CreateJob,
  Delete,
  Search,
  getAllJob,
  getCreator,
  getJob,
  updateJob,
} from '../controllers/Jobs.js';

const router = express.Router();

//get all jobs
router.get('/', getAllJob);

//get one job
router.get('/:id', getJob);
///get job creator use
router.get('/creator/:id', getCreator);

router.post('/create', verifyToken, CreateJob);

router.put('/update/:id', verifyToken, updateJob);

router.delete('/delete', verifyToken, Delete);

router.post('/search', Search);

export default router;
