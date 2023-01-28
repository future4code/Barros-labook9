import { CreateFriendDTO } from "../model/friendDTO";

export interface FriendRepository {
    create({ id, userId, userAddId }: CreateFriendDTO): Promise<void>

    getAll(userId: string, userAddId: string): Promise<string>

    delete(userId:string, userAddId:string):Promise<any>
}