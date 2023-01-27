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
            if(!userAddId) {
                throw new CustomError(400, "Body invalid! userAddId");
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




}