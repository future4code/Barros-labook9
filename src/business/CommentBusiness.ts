import { CustomError } from "../error/CustomError";
import { CommentDTO, InputCommentDTO } from "../model/postDTO";
import { generateId } from "../services/idGenerator";
import { CommentRepository } from "./CommentRepository";

export class CommentBusiness {
    constructor(private commentDatabase: CommentRepository) { }

    createComment = async ({ comment, userId, postId }: InputCommentDTO): Promise<void> => {
        try {
            if (!comment || !userId || !postId) {
                throw new CustomError(400, "invalid! comment or userId or postId");
            }

            if(comment === ""){
                throw new CustomError(400, "Empty comment!");
            }

            const id = generateId()

            const insertComment: CommentDTO = {
                id: id,
                comment: comment,
                userId: userId,
                postId: postId
            }

            await this.commentDatabase.create(insertComment)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}