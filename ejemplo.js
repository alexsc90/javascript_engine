/// Hoisting

var nombre = 'Diego';

nombre;

function apellido() {
    console.log('De Granda');
}

console.log(nombre);
apellido();

// Memory heap

const edad = 28;
const carro = {
    marca: 'Toyota',
    modelo: 'Corolla'
}

carro;

//Call Stack

function restarDos(num) {
    return num - 2;
}

function calcular() {
    const sumarTotal = 4 + 5;
    return restarDos(sumarTotal);
}

debugger;

calcular(); 

//Garbage collection

var carro = {
    marca: 'Toyota',
    modelo: '2020',
} 

carro = "Mio";

carro;

//Stack overflow

function overflow() {
    overflow();
}

overflow();

// JS Runtime

console.log('taco1');
console.log('taco2');
console.log('torta');
console.log('taco3');

// Asincronía

setTimeout(() => {
    console.log('torta')
}, 500);
console.log('taco 4')