import { CustomError } from "../error/CustomError";
import { CommentDTO } from "../model/postDTO";
import { BaseDatabase } from "./BaseDatabase";

export class CommentDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_comments";

    create = async ({ id, comment, userId, postId }: CommentDTO):Promise<void> => {
        try {
            await CommentDatabase.connection.insert({
                id: id,
                comment: comment,
                user_id: userId,
                post_id: postId
            }).into(CommentDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

}