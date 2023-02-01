
enum TypePost{
    NORMAL = "normal",
    EVENT = "event"
}
export interface PostInputDTO {
    photo: string,
    description: string,
    type: TypePost, 
    authorId: string
}

export interface PostCreateDTO {
    id: string,
    photo: string,
    description: string,
    type: TypePost, 
    authorId: string
}
