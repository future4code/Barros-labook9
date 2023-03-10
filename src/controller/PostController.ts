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

    getAllPost = async (req: Request, res: Response) => {
        try {

            const id = req.params.id as string

            const postId = await this.postBusiness.getAllPost(id)

            res.status(200).send(postId)

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)

        }

    }

    feedFriend = async (req: Request, res: Response) => {
        try {
            const userId = req.params.userId as string

            const postFriend = await this.postBusiness.feedFriend(userId)

            res.status(200).send(postFriend)

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    PostType = async (req: Request, res: Response) => {
        try {

            const type = req.body.type as string


            const postType = await this.postBusiness.PostType(type)

            res.status(200).send(postType)
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

}