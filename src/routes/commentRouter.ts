import express from 'express';
import { CommentBusiness } from '../business/CommentBusiness';
import { CommentController } from '../controller/CommentController';
import { CommentDatabase } from '../data/CommentDatabase';

export const commentRouter = express.Router();

const commentDatabase = new CommentDatabase()

const commentBusiness = new CommentBusiness(commentDatabase)

const commentController = new CommentController(commentBusiness)

commentRouter.post("/comment",(req,res)=> commentController.createComment(req,res))