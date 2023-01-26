import { CustomError } from "../error/CustomError";
import { PostCreateDTO } from "../model/postDTO";
import { BaseDatabase } from "./BaseDatabase";
import {PostRepository} from "../business/PostRepository"

export class PostDatabase extends BaseDatabase implements  PostRepository{
    private static TABLE_NAME = "labook_posts";

    create = async ({ id, photo, description, type, authorId }: PostCreateDTO) => {
        try {
            await PostDatabase.connection.insert({
                id: id,
                photo: photo,
                description: description,
                type: type,
                author_id: authorId
            }).into(PostDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    getAll=async(id:string)=>{
        try{
            const result = await PostDatabase.connection.select('*').where(id)
            console.log(result);
            
            return (result)
        }catch(error: any){
            throw new CustomError(error.statusCode, error.message)
        }
    }


}