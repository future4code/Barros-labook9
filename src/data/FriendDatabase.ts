import { CustomError } from "../error/CustomError";
import { CreateFriendDTO } from "../model/friendDTO";
import { BaseDatabase } from "./BaseDatabase";

export class FriendDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_friend";

    create = async ({ id, userId, userAddId }: CreateFriendDTO) => {
        try {

            await FriendDatabase.connection.insert({
                id: id,
                user_id: userId,
                user_add_id: userAddId
            }).into(FriendDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    getAll = async (userId: string, userAddId: string) => {
        try {
            const result = await FriendDatabase.connection()
                .select("*")
                .from(FriendDatabase.TABLE_NAME)
                .where({
                    user_id: userId,
                    user_add_id: userAddId
                })
                
            return (result[0])
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    delete=async(userId:string, userAddId:string):Promise<any>=>{

        try{

            const result =await FriendDatabase.connection()
              .delete()
              .from(FriendDatabase.TABLE_NAME)
              .where({ user_id:userId, user_add_id:userAddId })
            console.log(result);
            
              return (result)
        }catch(error:any){
            throw new CustomError(error.statusCode, error.message)
        }
    }

}