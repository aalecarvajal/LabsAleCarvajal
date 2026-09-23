// Refer to Task 6 in your Instructions to complete this task

//Le pido a Node que Node.js le falta que le digas explícitamente que use prompt-sync en lugar del prompt() del navegador//
const prompt = require("prompt-sync")();

//Primero le pido al usuario que me indique la duración del contador//
let numero = Number(prompt("Hola, bienvenido al contador FizzBuzzWoof. Escribe hasta qué número quieres que cuente"));

//genero un array vacío//
let resultados = [];

//luego seguimos con nuestro código fizzbuzzwoof adaptado para que termine en el número indicado por el usuario//
for (let i = 1; i <= numero; i++) {
   
  const multiplo_tres = i % 3 === 0;
  const multiplo_cinco = i % 5 === 0;
  const multiplo_siete = i % 7 === 0;
  
 /* uso push en vez de consolelog para almacenar los resultados en
 el array resultados que generé al inicio*/
  
  if (multiplo_tres && multiplo_cinco) {
    resultados.push("FizzBuzz");
  } else if (multiplo_tres) {
    resultados.push("Fizz");  
  } else if (multiplo_cinco) {
    resultados.push("Buzz");
  } else if (multiplo_siete) {
    resultados.push("Woof");
  } else {
    resultados.push(i);
  }

  if (i === numero) {
    break;
  }
}//ahora pido que se imprima el array resultados en la consola//
console.log(resultados);
