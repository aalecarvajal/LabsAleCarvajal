// Refer to Task 5 in your Instructions to complete this task

//Le pido a Node que Node.js le falta que le digas explícitamente que use prompt-sync en lugar del prompt() del navegador//
const prompt = require("prompt-sync")();

//Primero le pido al usuario que me indique la duración del contador//
let numero = Number(prompt("Hola, bienvenido al contador FizzBuzzWoof. Escribe hasta qué número quieres que cuente"));

//luego seguimos con nuestro código fizzbuzzwoof adaptado para que termine en el número indicado por el usuario//
for (let i = 1; i <= numero; i++) {
   
  const multiplo_tres = i % 3 === 0;
  const multiplo_cinco = i % 5 === 0;
  const multiplo_siete = i % 7 === 0;
  
 /* indico primero la condición de fizzbuzz, luego la de fizz, luego la de buzz
 y luego la de woof cada 7mo número*/
  
  if (multiplo_tres && multiplo_cinco) {
    console.log("FizzBuzz");
  } else if (multiplo_tres) {
    console.log("Fizz");  
  } else if (multiplo_cinco) {
    console.log("Buzz");
  } else if (multiplo_siete) {
    console.log("Woof");
  } else {
    console.log(i);
  }

  if (i === numero) {
    break;
  }
}