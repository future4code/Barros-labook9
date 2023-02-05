import { CustomError } from "../error/CustomError";
import { LikePostDTO } from "../model/postDTO";
import { generateId } from "../services/idGenerator";
import { LikePostRepository } from "./LikePostRepository";

export class LikePostBusiness{
    constructor(private likePostDatabase: LikePostRepository) { }
    
    createLike = async ({userId, postId}: LikePostDTO):Promise<void>=>{
        try{
            if (!userId) {
                throw new CustomError(400, "Params invalid! userId");
            }
            if (!postId) {
                throw new CustomError(400, "Body invalid! postId");
            }
            const verificationPostId = await this.likePostDatabase.getAll(userId, postId)

            if (verificationPostId) {
                throw new CustomError(400, "Already existing like");
            }

            const id = generateId()

            const insertLike: LikePostDTO = {
                id: id,
                userId: userId,
                postId : postId,
            }

            await this.likePostDatabase.create(insertLike)


        }catch(error:any){
            throw new CustomError(error.statusCode, error.message)
        }
    }
}