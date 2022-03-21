import { hashSync } from "bcrypt"

export async function encryptPassword({password}){
    const encryptedPassword = await hashSync(password, 10);
    return encryptedPassword;
}