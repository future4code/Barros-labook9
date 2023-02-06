import { Request, Response } from "express";
import { CommentBusiness } from "../business/CommentBusiness";
import { InputCommentDTO } from "../model/postDTO";

export class CommentController {
    constructor(private commentBusiness: CommentBusiness) { }

    createComment = async (req: Request, res: Response):Promise<void> => {
        try {
            const { comment, userId, postId } = req.body;

            const insertComment: InputCommentDTO = {
                comment,
                userId,
                postId
            }
            await this.commentBusiness.createComment(insertComment)

            res.status(201).send("Comment successfully added!")

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}