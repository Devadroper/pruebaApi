import express from 'express'
import homeRouter from './routes/home.router.js'
import { __dirname } from './utils.js'

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use('/', homeRouter)

app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
})