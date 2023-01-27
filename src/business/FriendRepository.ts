import { CreateFriendDTO } from "../model/friendDTO";

export interface FriendRepository {
    create({ id, userId, userAddId }: CreateFriendDTO): Promise<void>
}