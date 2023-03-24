import { Router, Request, Response } from "express";

const homeRouter = Router()

homeRouter.get('/', (req: Request, res: Response) => {
    res.json({ message: "Buenas" })
})

export default homeRouter