import express from 'express';
import { createPost, getPost } from '../Controllers/PostController.js';
const router = express.Router();

// Create new post
router.post('/', createPost);
router.get('/:id',getPost)
export default router;
