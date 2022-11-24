import ApiCalculador from "../api/calculador.js";

class ControladorCalculador {

    constructor() {
        this.apiCalculador = new ApiCalculador()
    }


    getMsgHora = async (req,res) => {
        res.json( await this.apiCalculador.obtenerMsgHora() )
    }

    getRandom = async (req,res) => {
        res.json( await this.apiCalculador.obtenerRandom() )
    }

    getOperaciones = async (req,res) => {
        let {num1, num2, operacion} = req.query
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        res.json( this.apiCalculador.calcular(num1, num2, operacion))
    }
}


export default ControladorCalculador