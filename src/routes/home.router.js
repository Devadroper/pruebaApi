import { Router } from "express";

const homeRouter = Router()

homeRouter.get('/', (req, res) => {
    res.json({ message: "Buenas" })
})

export default homeRouter