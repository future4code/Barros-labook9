import { PostDatabase } from "../data/PostDatabase";
import { CustomError } from "../error/CustomError";
import { PostCreateDTO, PostInputDTO } from "../model/postDTO";
import { generateId } from "../services/idGenerator";
import { PostRepository } from "./PostRepository";

export class PostBusiness {
    constructor(private postDatabase: PostRepository) { }
    // postDatabaseteste = new PostDatabase();

    createPost = async ({ photo, description, type, authorId }: PostInputDTO) => {
        try {
            if (!photo || !description || !type || !authorId) {
                throw new CustomError(400, "Body invalid! photo or description or type or authorId.");
            }
            if (type.toUpperCase() !== "normal".toUpperCase() && type.toUpperCase() !== "event".toUpperCase()) {
                throw new CustomError(400, "Type invalid, normal or event.");
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

    getAllPost = async (id: string) => {
        try {

            const postId = await this.postDatabase.getAll(id)

            if (postId.length < 0) {
                throw new CustomError(404, "Post not found");
            }

            return (postId)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    feedFriend = async (userId: string) => {
        try {

            const result = await this.postDatabase.feed(userId)

            return (result)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    PostType = async (type: string) => {
        try {
            if (type.toUpperCase() !== "normal".toUpperCase() && type.toUpperCase() !== "event".toUpperCase()) {
                throw new CustomError(400, "Type invalid, normal or event.");
            }
            const result = await this.postDatabase.getType(type)

            return (result)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

}