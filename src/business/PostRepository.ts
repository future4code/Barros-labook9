import { PostCreateDTO } from "../model/postDTO";

export interface PostRepository{
    
    create ({ id, photo, description, type, authorId }: PostCreateDTO):Promise<void>

    getAll (id:string):Promise<any[]>

    feed (id: string):Promise<any[]>
}
