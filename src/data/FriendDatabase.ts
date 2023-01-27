import { CustomError } from "../error/CustomError";
import { CreateFriendDTO } from "../model/friendDTO";
import { BaseDatabase } from "./BaseDatabase";

export class FriendDatabase extends BaseDatabase {
    private static TABLE_NAME= "labook_friend";

    create = async ({id, userId, userAddId}:CreateFriendDTO)=>{
        try{

            await FriendDatabase.connection.insert({
                id: id,
                user_id: userId,
                user_add_id: userAddId
            }).into(FriendDatabase.TABLE_NAME)

        }catch(error:any){
            throw new CustomError(error.statusCode, error.message)
        }
    }
}