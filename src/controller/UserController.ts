import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/UserDTO";

export class UserController {
    constructor(private userBusiness: UserBusiness) { }
    createUser = async (req: Request, res: Response): Promise<void> => {

        try {
            const { name, email, password } = req.body;

            const input: UserInputDTO = {
                name: name,
                email: email,
                password: password
            }
            await this.userBusiness.createUser(input)

            res.status(200).send("User created successfully!")
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

}