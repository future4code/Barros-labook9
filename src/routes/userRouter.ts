import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController"
import { UserDatabase } from "../data/UserDatabase";

export const userRouter = express.Router();

const userDatabase = new UserDatabase()

const userBusiness = new UserBusiness(userDatabase)

const userController = new UserController(userBusiness)

userRouter.post("/users", (req, res) => userController.createUser(req, res))

userRouter.get("/users", (req, res) => userController.getAllUser(req, res))