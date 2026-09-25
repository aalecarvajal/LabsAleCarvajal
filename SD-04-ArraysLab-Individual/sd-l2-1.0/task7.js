const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!

  /* Agregar un número a solo 1 fila, en este caso quise agregar el número 30
    en la tercera fila, que en el array sería la fila 2*/

  arr[2].push(30);
  console.log(arr)

  /* Agrego una fila en el array con números, investigué que se hace poniendo 
  los elementos entre corchetes */

  arr.push([30,31,32,33,34,35]);
  console.log(arr);

/*  Quito el número 13 de la segunda fila  */

  arr[1].splice(3, 1);
  console.log(arr);

  /* Invierto el orden de la tercera fila  */
  arr[2].reverse();
  console.log(arr);
  
  // Type your code above this line!