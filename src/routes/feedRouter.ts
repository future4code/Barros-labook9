import express from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";
import { PostDatabase } from "../data/PostDatabase";

export const feedRouter = express.Router();

const postDatabase = new PostDatabase()

const postBusiness = new PostBusiness(postDatabase)

const postController = new PostController(postBusiness)

feedRouter.get("/:userId", (req, res) => postController.feedFriend(req, res))

feedRouter.get("/post/type", (req, res) => postController.PostType(req, res))