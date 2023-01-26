import { PostBusiness } from "../business/PostBusiness";
import { Response, Request } from "express";
import { PostInputDTO } from "../model/postDTO";

export class PostController {
    constructor(private postBusiness: PostBusiness) { }

    createPost = async (req: Request, res: Response) => {
        try {
            const { photo, description, type, authorId } = req.body;

            const input: PostInputDTO = {
                photo,
                description,
                type,
                authorId
            }
            await this.postBusiness.createPost(input)

            res.status(200).send("Post created successfully!")
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}