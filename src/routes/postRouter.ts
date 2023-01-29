import express from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";
import { PostDatabase } from "../data/PostDatabase";


export const postRouter = express.Router();
const postDatabase = new PostDatabase()

const postBusiness = new PostBusiness(postDatabase)

const postController = new PostController(postBusiness)

postRouter.post("/post",(req,res)=> postController.createPost(req,res))

postRouter.get("/:id",(req,res)=> postController.getAllPost(req,res))

postRouter.get("/:userId",(req,res)=> postController.postFriend(req,res))