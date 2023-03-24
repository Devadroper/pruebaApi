import express, { Express } from 'express'
import homeRouter from './routes/home.router'
import 'dotenv/config'
import './dao/config'

const app: Express = express()
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRouter)

app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
})