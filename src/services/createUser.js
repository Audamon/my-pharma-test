import * as encrypPasswordService from './encryptPassword.js';
import { Person } from '../models/Person.js'

export async function createUser({name, password, email}){
    const encryptedPassword = await encrypPasswordService.encryptPassword({password});
    const person = {
        name,
        password: encryptedPassword,
        email,
    }
    const user = await Person.create(person);
    return user;

}