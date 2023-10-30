//importa el paquete 'colors'
require ("colors");

const math = require("./modules/math.js")
// limpia la consola
console.clear();

console.log(math);
//función asíncrona llamada 'main'.
const main = async() => {
    console.log("***************************************".blue);
    console.log("*     ".blue,"funciones matematicas".bgBlue,
    "     *".blue);
    console.log("***************************************\n".blue);
    console.log("***************************************".red);
    console.log("*                                      *".red);


    console.log(math.add(5,3)); //llama a la funcion add
    console.log(math.substract(2,8));//llama a la funcion substract
    console.log(math.multiply(2,8));//llama a la funcion multiply
    console.log(math.divide(4,2));//llama a la funcion divide
}

main();
