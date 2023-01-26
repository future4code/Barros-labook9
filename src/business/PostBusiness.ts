import { query } from "express";
import { PostDatabase } from "../data/PostDatabase";
import { CustomError } from "../error/CustomError";
import { PostCreateDTO, PostInputDTO } from "../model/postDTO";
import { generateId } from "../services/idGenerator";
import { PostRepository } from "./PostRepository";

export class PostBusiness {
    // constructor(private postDatabase: PostRepository) { }
    postDatabase = new PostDatabase();

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

    getAllPost = async (id: string) => {
        try {

            const postId = await this.postDatabase.getAll(id)
            console.log(postId[0]);

            if (!postId[0]) {
                throw new CustomError(404, "Post not found");
            }
            const queryResult = {
                id: postId[0].id,
                photo: postId[0].photo,
                description: postId[0].description,
                type: postId[0].type,
                createdAt: postId[0].createdAt,
                authorId: postId[0].author_id
            }
            console.log(queryResult);
            
            return queryResult

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}