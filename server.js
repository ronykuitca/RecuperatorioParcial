import express from 'express'
import { RouterCalculador } from './router/calculador.js'

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))

app.use('/', new RouterCalculador().start())