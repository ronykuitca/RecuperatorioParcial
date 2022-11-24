class ApiCalculador {

    async obtenerMsgHora() {
        let mensaje = 'Buenas noches!'
        var date = new Date();
        var hour = date.getHours();

        if(hour >=6 && hour <=12){
            mensaje = 'Buenss dias!'
        }
        if(hour>=13 && hour <=19){
            mensaje = 'Buenas tardes!' 
        }
        console.log(hour);
        return mensaje;
    }

    async obtenerRandom() {
        const counts = {};
        let min = 1;
        let max = 20;
        min = Math.ceil(min);
        max = Math.floor(max);
        let numeros = [...Array(10000).keys()]

        for (let i = 0; i< numeros.length; i++) {
            numeros[i] = Math.floor(Math.random() * (max - min + 1) + min)
            
        }

        numeros.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        console.log(counts)
        console.log(numeros.length);

        return counts
    }
    



      calcular = (numero1, numero2, operacion) => {
        let resultado = 0
        let resFinal ={
            numero1,
            numero2,
            operacion,
            resultado
        }
        
          if (operacion.toLowerCase() == "suma") {
            resultado = numero1 + numero2

            resFinal ={
                numero1,
                numero2,
                operacion,
                resultado
            }
         
          }
          else if (operacion.toLowerCase() == "resta") {
            resultado = numero1 - numero2

            resFinal ={
                numero1,
                numero2,
                operacion,
                resultado
            }
         
          }
          else if (operacion.toLowerCase() == "multiplicacion") {
            resultado = numero1 * numero2

            resFinal ={
                numero1,
                numero2,
                operacion,
                resultado
            }
         
          }
          else if (operacion.toLowerCase() == "division") {
            resultado = numero1 / numero2

            resFinal ={
                numero1,
                numero2,
                operacion,
                resultado
            }
         
          }
          else {
            resFinal = {
              error: {
                num1: {valor: numero1, tipo: typeof(numero1)},
                num2: {valor: numero2, tipo: typeof(numero2)},
                operacion: {valor: operacion, tipo: typeof(operacion)}
              }
            }
          }
        

        return resFinal
      };


    }

export default ApiCalculador