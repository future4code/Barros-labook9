
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

export interface LikePostDTO{
    id: string;
    userId: string;
    postId: string
}

export interface InputLikePostDTO{
    userId: string;
    postId: string
}

export interface CommentDTO{
    id: string;
    comment:string;
    userId: string;
    postId: string
}


export interface InputCommentDTO{
    comment:string;
    userId: string;
    postId: string
}
