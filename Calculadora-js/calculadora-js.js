let nombre = prompt("Hola, vamos a hacer una calculadora simple, ¿cómo te llamas?");

let numero1 = Number(prompt("Escribe el primer número"));
let numero2 = Number(prompt("Escribe el segundo número"));

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

console.log("Hola " + nombre + ", estos son los resultados");
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación " + multiplicacion);
console.log("División: " + division);