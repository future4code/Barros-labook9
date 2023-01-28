import { FriendRepository } from "./FriendRepository";
import { InputFriendDTO, CreateFriendDTO } from "../model/friendDTO"
import { CustomError } from "../error/CustomError";
import { generateId } from "../services/idGenerator";

export class FriendBusiness {
    constructor(private friendDatabase: FriendRepository) { }

    createFriend = async ({ userId, userAddId }: InputFriendDTO) => {
        try {
            if (!userId) {
                throw new CustomError(400, "Params invalid! userId");
            }
            if (!userAddId) {
                throw new CustomError(400, "Body invalid! userAddId");
            }
            const verificationUserId = await this.friendDatabase.getAll(userId, userAddId)

            if (verificationUserId) {
                throw new CustomError(400, "Friendship already exists");
            }

            const id = generateId()

            const insertFriend: CreateFriendDTO = {
                id: id,
                userId: userId,
                userAddId: userAddId
            }

            await this.friendDatabase.create(insertFriend)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    deleteFriend = async ({ userId, userAddId }: InputFriendDTO) => {
        try {

            if (!userId || !userAddId) {
                throw new CustomError(400, "invalid! userId or userAddId");
            }

            const verificationUserId = await this.friendDatabase.getAll(userId, userAddId)

            if (!verificationUserId) {
                throw new CustomError(400, "Friendship not exists");
            } else {
                await this.friendDatabase.delete(userId, userAddId)
            }

        } catch (error: any) {

            throw new CustomError(error.statusCode, error.message)
        }
    }


}