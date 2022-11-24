import express from 'express'
import ControladorCalculador from '../controller/calculador.js'

export class RouterCalculador {
    constructor() {
        this.router = express.Router()
        this.controladorCalculador = new ControladorCalculador()
    }

    start() {
        this.router.get('/hora', this.controladorCalculador.getMsgHora)

        this.router.get('/random', this.controladorCalculador.getRandom)

        this.router.get('/operaciones', this.controladorCalculador.getOperaciones)

        return this.router
    }
}