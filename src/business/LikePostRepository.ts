import { LikePostDTO } from "../model/postDTO";

export interface LikePostRepository{
    create ({ id, userId, postId }: LikePostDTO):Promise<void>

    getAll (userId: string, postId: string):Promise<string>


}