import { CommentDTO } from "../model/postDTO";

export interface CommentRepository {
    create ({ id, comment, userId, postId }: CommentDTO):Promise<void>
}