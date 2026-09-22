// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
   
  const multiplo_tres = i % 3 === 0;
  const multiplo_cinco = i % 5 === 0;
  
 /* indico primero la condición de fizzbuzz, luego la de fizz y luego la de buzz,
 porque si no nunca llegaría a leer la condición de fizzbuzz*/
  
  if (multiplo_tres && multiplo_cinco) {
    console.log("FizzBuzz");
  } else if (multiplo_tres) {
    console.log("Fizz");  
  } else if (multiplo_cinco) {
    console.log("Buzz");
  } else {
    console.log(i);
  }

  if (i === 105) {
    break;
  }
}
