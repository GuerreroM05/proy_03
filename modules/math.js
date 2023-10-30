const math = {};

function add(a,b) {
    return a + b;
}
//Se define una función de suma que toma dos parámetros a y b y devuelve su suma.
function substract(a,b) {
    return a - b;
}
// Se define una función de resta que toma dos parámetros a y b y devuelve su diferencia.
function multiply(a,b){
    return a * b;
}
//Se define una función de multiplicación que toma dos parámetros a y b y devuelve su producto.
function divide(a,b){
    if (b == 0){
        return "Error no se puede dividir entre cero";
    }else {
        return a / b;
    }
    // verifica si el divisor b es cero. 
    //Si es cero, devuelve un mensaje de error; de lo contrario, devuelve el cociente de a dividido por b.
}

math.add = add;
math.substract = substract;
math.multiply = multiply;
math.divide = divide;

module.exports = math;
//Se exporta el objeto math para que esté disponible para su uso en otros archivos