import { Person } from "../models/Person.js";
import * as createUserService from "../services/createUser.js";

export async function createUser(req, res) {
    const { name, email, password } = req.body;
    if(!name || !email || !password) { 
     return res.status(500).json({ error: "Nenhum campo pode estar em branco" });
    }
    
    try {
      const user = await createUserService.createUser({name, email, password});
      if(!user){
          return res.status(401).json({ error: "Usuario não pode ser criado"});
      }
      res.status(201).send({message: 'Usuário criado com sucesso!'});
    } catch (error) {
      res.status(500).json({ error: error });
    }
}