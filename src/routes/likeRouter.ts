import express from "express";
import { LikePostBusiness } from "../business/LikePostBusiness";
import { LikePostController } from "../controller/LikePostController";
import { LikePostDatabase } from "../data/LikePostDatabase";

export const likepostRouter = express.Router();

const likepostDatabase = new LikePostDatabase()

const likepostBusiness = new LikePostBusiness(likepostDatabase)

const likepostController = new LikePostController(likepostBusiness)

likepostRouter.post("/like/:userId", (req, res) => likepostController.createLike(req, res))

likepostRouter.post("/unlike", (req, res) => likepostController.unlikePost(req, res))