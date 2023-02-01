import { PostCreateDTO } from "../model/postDTO";

export interface PostRepository{
    
    create ({ id, photo, description, type, authorId }: PostCreateDTO):Promise<void>

    getAll (id:string):Promise<any[]>

    feed (userId: string):Promise<any[]>

    getType (type:string):Promise<any[]>
}
