import { Request, Response } from "express";
import { LikePostBusiness } from "../business/LikePostBusiness";
import { InputLikePostDTO } from "../model/postDTO";

export class LikePostController{
    constructor(private likePostBusiness: LikePostBusiness) { }
    createLike = async (req: Request, res: Response) => {
        try {
            const userId = req.params.userId;
            const postId = req.body.postId ;

            const insertLike: InputLikePostDTO = {
                userId: userId,
                postId: postId
            }
            await this.likePostBusiness.createLike(insertLike)

            res.status(200).send("like created successfully!")
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }

    }

}