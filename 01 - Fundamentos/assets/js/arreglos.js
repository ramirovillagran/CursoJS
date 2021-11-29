// const arr = new Array(10);
// const arr = [];
// let arr = ['MDX', 'BTC', 'ETH'];

// console.log({arr});
// console.log(arr[0]);

let arr = [
    ['MDX', 'BTC', 'ETH']
];  

console.log('TAMAÑO: ', arr.length); 

arr.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
} );

arr.unshift('WHATSAPPPPP');

