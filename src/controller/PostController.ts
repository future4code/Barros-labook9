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

    feedFriend=async(req:Request, res:Response)=>{
        try{
            // const userId = req.body.userId as string
            const userId = req.params.userId as string
                console.log(userId);
                
            // const {userId, userAddId} = req.body
            const postFriend = await this.postBusiness.feedFriend(userId)
                console.log(postFriend);

            res.status(200).send(postFriend)

        }catch(error:any){
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}