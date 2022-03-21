import { Router } from 'express';
import { Company } from '../models/Person.js';

const cRouter = Router();

cRouter.post('/', async (req, res) => {
    const { name } = req.body;
    await Company.create(name);
    try {
        return res.sendStatus(201);
        
    } catch (error) {
        return res.sendStatus(500);
    }
})

export default cRouter;