import express from "express";
const router = express.Router();

import { createPost } from "../controllers/createPost.js";
import { AddComment } from "../controllers/addComment.js";
import { viewpost } from "../controllers/getpost.js";

router.post('/Addpost',createPost);
router.put('/addcomment/:id',AddComment)
router.get('/getpost',viewpost)

export default router