const arr = [1,2,3,4,5,6,7,9,10,11,12]

// Type your code below this line!
/* uso el método splice y le indico que coloque en el 7mo espacio el número
   que faltaba, que es el 8, sin borrar nada. Se especifica que sea el 7mo espacio
   porque el índice en los arrays inicia siempre en 0
   */

arr.splice(7, 0, 8);

// Type your code above this line!

arr.forEach(element => console.log(element))