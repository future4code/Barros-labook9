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

    getAll = async (userId: string, postId: string) => {
        try {
            const result = await LikePostDatabase.connection()
                .select("*")
                .from(LikePostDatabase.TABLE_NAME)
                .where({
                    user_id: userId,
                    post_id: postId
                })
                
            return (result[0])
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    unlike =async(userId:string, postId:string):Promise<void>=>{

        try{

         await LikePostDatabase.connection()
              .delete()
              .from (LikePostDatabase.TABLE_NAME)
              .where({ user_id:userId, postId:postId })

        }catch(error:any){
            throw new CustomError(error.statusCode, error.message)
        }
    } 

}