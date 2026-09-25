const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Type your code below this line!

/* uso el método splice para ordenar que en el espacio 4 del array, borre 1 número.
Al no indicarla un 3er parámetro no incluye ningún elemento nuevo
*/

arr.splice(4, 1);

// Type your code above this line!

arr.forEach(element => console.log(element))