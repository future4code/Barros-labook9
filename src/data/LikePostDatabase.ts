import { CustomError } from "../error/CustomError";
import { LikePostDTO } from "../model/postDTO";
import { BaseDatabase } from "./BaseDatabase";

export class LikePostDatabase extends BaseDatabase{
    private static TABLE_NAME = "labook_like";

    create = async ({ id, userId, postId }: LikePostDTO) => {
        try {

            await LikePostDatabase.connection.insert({
                id: id,
                user_id: userId,
               post_id: postId
            }).into(LikePostDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
    
}