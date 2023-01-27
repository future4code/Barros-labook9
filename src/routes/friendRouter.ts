import express from "express";
import { FriendBusiness } from "../business/FriendBusiness";
import { FriendController } from "../controller/FriendController";
import { FriendDatabase } from "../data/FriendDatabase";

export const friendRouter = express.Router();

const friendDatabase = new FriendDatabase()

const friendBusiness = new FriendBusiness(friendDatabase)

const friendController = new FriendController(friendBusiness)

friendRouter.post("/:userId",(req,res)=> friendController.createFriend(req,res))