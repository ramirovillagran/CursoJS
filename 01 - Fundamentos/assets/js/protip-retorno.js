// function crearPersona(nombre, apellido){
//     return {
//         nombre, apellido
//     }
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona ('Fernando', 'Díaz');
// console.log(persona);

const imprimeArgs = (...args) => {
    console.log(args);
}

// imprimeArgs(10, true, false, 'Raul');

const pers = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: true,
    edad: 40,
    trajes: ['Mark I', 'Hulkbuster'],
}

// const imprimirPropiedades = (personaje) => {
//     console.log('nombre: ', personaje.nombre);
//     console.log('codeName: ', personaje.codeName);
//     console.log('vivo: ', personaje.vivo);
//     console.log('edad: ', personaje.edad);
//     console.log('trajes: ', personaje.trajes);
// }

// const imprimirPropiedades = ({nombre, codeName, vivo = true, edad, trajes}) => {
//     console.log({nombre}); 
//     console.log({codeName}); 
//     console.log({vivo}); 
//     console.log({edad}); 
//     console.log({trajes});
// }

// imprimirPropiedades (pers);

const frutas = ['Pera', 'Manzana', 'Banana'];
const otrasFrutas = [...frutas];
otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});