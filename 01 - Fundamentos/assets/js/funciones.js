function saludar () {
    console.log("Hola Mundo");
}

// const saludar2 = function (nombre) {
//     console.log("Hola " + nombre);
// }

// saludar2("Ramiro");

const funcFlecha = (nombre) => {
    console.log("Hola " + nombre);
}

funcFlecha("Ramiro");

const sumar = (a, b) => a + b;

console.log(sumar(785, 15));

function getAleatorio (){
    return Math.random();
}

console.log(getAleatorio());

const aleatorio = () => Math.random();

console.log(aleatorio());