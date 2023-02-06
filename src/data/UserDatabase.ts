import { UseRepository } from "../business/UserRepository";
import { CustomError } from "../error/CustomError";
import { UserCreateDTO } from "../model/UserDTO";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UseRepository {
    private static TABLE_NAME = "labook_users"

    create = async ({ id, name, email, password }: UserCreateDTO) => {
        try {
            await UserDatabase.connection.insert({
                id: id,
                name: name,
                email: email,
                password: password
            }).into(UserDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    get = async()=>{
        try{
        const result = await UserDatabase.connection.raw(`
        SELECT * FROM ${UserDatabase.TABLE_NAME}
        `)
        return (result[0])
        }catch(error:any){
            throw new CustomError(error.statusCode, error.message)
        }
    }

}