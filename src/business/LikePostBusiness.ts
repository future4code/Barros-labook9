import { CustomError } from "../error/CustomError";
import { LikePostDTO } from "../model/postDTO";
import { LikePostRepository } from "./LikePostRepository";

export class LikePostBusiness{
    constructor(private likePostDatabase: LikePostRepository) { }
    
    createLike = async ({userId, postId}: LikePostDTO):Promise<void>=>{
        try{



        }catch(error:any){
            throw new CustomError(error.statusCode, error.message)
        }
    }
}