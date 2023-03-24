import { Router, Request, Response } from "express";
import UserManager from "../dao/container/UserManager";

const homeRouter = Router()
const um = new UserManager()

homeRouter.get('/', (req: Request, res: Response) => {
    res.json({ message: "Buenas" })
})

homeRouter.post('/login', async (req: Request, res: Response) => {
    const user = await um.addUser(req.body)  
    res.json({user})
})

export default homeRouter