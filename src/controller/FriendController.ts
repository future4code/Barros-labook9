import { Request, Response } from "express";
import { FriendBusiness } from "../business/FriendBusiness";
import { InputFriendDTO } from "../model/friendDTO";

export class FriendController {
    constructor(private friendBusiness: FriendBusiness) { }

    createFriend = async (req: Request, res: Response) => {
        try {
            const userId = req.params.userId;
            const userAddId = req.body.userAddId;

            const insertFriend: InputFriendDTO = {
                userId: userId,
                userAddId: userAddId
            }
            await this.friendBusiness.createFriend(insertFriend)

            res.status(200).send("friendship created successfully!")
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }

    }

    deleteFriend = async(req:Request, res:Response)=>{
        try{
        const {userId, userAddId} = req.body

        await this.friendBusiness.deleteFriend({userId:userId,userAddId:userAddId})
         

        res.status(200).send("successfully broken friendship!")
        }catch(error:any){
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)

        }
    }
}