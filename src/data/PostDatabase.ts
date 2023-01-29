import { CustomError } from "../error/CustomError";
import { PostCreateDTO } from "../model/postDTO";
import { BaseDatabase } from "./BaseDatabase";
import { PostRepository } from "../business/PostRepository"

export class PostDatabase extends BaseDatabase implements PostRepository {
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

    getAll = async (id: string) => {
        try {

            const result = await PostDatabase.connection.raw(`
            SELECT * FROM ${PostDatabase.TABLE_NAME} WHERE ${id}
            `)

            return (result[0])

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    feed = async (userId: string) => {
        try {

            const result = await PostDatabase.connection.raw(`
            SELECT post.id, 
            post.photo, 
            post.description,
            post.type,
            post.created_at, 
            post.author_id , 
            user.name 
            FROM labook_posts post
            JOIN labook_users user ON post.author_id = user.id
            JOIN labook_friend friend ON post.author_id = friend.user_add_id OR post.author_id = friend.user_id
            WHERE (friend.user_id=${userId} OR friend.user_add_id=${userId}) AND post.author_id <> ${userId}
            ORDER BY created_at DESC;
            `)
            console.log(result);
            
            return (result[0])
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}