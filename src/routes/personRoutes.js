import { Router } from "express";
import { Person } from "../models/Person.js";
import * as createUserController from "../controllers/createUser.js";

const router = Router();
router.post("/", createUserController.createUser);
  
  router.get('/', async (req, res) => {
      try {
          const person = await Person.find();
          res.status(200).send(person);
      } catch (error) {
          res.status(500).json({ error: error });
      }
  })

router.patch('/', async(req, res) => {

})


  export default router ;