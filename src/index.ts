import express, { Express, Request, Response } from 'express'
import homeRouter from './routes/home.router'

const app: Express = express()
const PORT = '8080'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRouter)

app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
})