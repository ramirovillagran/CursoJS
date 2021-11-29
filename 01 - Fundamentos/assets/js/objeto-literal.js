let personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    direccion:{
        calle: '25 de Mayo',
        localidad: 'Tucumán'
    },
    arr:[
        'Jhony', 'LaGente', 'EstaMuyLoca'
    ]
};
console.log(personaje);
console.log('calle: ', personaje.direccion.calle);
const entriesPares = Object.entries(personaje);
// console.log (entriesPares);
const propiedades = Object.getOwnPropertyNames (personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);
