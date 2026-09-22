// Refer to Task 2 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
  /* en el curso de js me gustó que podemos usar variables o constantes para guardar el
  resultado de una condición */
  
  const multiplo_tres = i % 3 === 0;
  
  if (multiplo_tres) {
    console.log("Fizz");
  } else {
    console.log(i);
  }

  if (i === 105) {
    break;
  }
}
