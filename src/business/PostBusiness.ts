import { CustomError } from "../error/CustomError";
import { PostCreateDTO, PostInputDTO } from "../model/postDTO";
import { generateId } from "../services/idGenerator";
import { PostRepository } from "./PostRepository";

export class PostBusiness {
    constructor(private postDatabase: PostRepository) { }

    createPost = async ({ photo, description, type, authorId }: PostInputDTO) => {
        try {
            if (!photo || !description || !type || !authorId) {
                throw new CustomError(400, "Body invalid! photo or description or type or authorId.");
            }

            const postId = generateId()

            const insertPost: PostCreateDTO = {
                id: postId,
                photo: photo,
                description: description,
                type: type,
                authorId: authorId
            }

            await this.postDatabase.create(insertPost)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}