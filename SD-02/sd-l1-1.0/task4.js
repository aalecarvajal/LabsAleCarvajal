// Refer to Task 4 in your Instructions to complete this task


for (let i = 1; i <= 105; i++) {
   
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

  if (i === 105) {
    break;
  }
}