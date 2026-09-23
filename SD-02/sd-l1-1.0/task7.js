// Refer to Task 7 in your Instructions to complete this task
//primero hago el array buzzWords que contiene las palabras que necesitamos
//para sustituir los números primos del 1 al 105

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang",
    "Yip",
    "Growl",
    "Howl",
    "Snarl",
    "Ruff",
    "Paws",
    "Fetch",
    "Wag",
    "Sniff",
    "Chomp",
    "Trot",
    "Pounce",
    "Whimper",
    "Snout",
    "Muzzle",
    "Gnaw",
    "Yelp",
    "Romp",
    "Scamper",
    "Prowl"
  ];

//posteriormente creo una función que define si un número es primo o no//  
function esPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
// despuésgenero un objeto vacío llamado "resultados" donde vamos a recopilar
// las palabras correspondientes a los número primos en el array "buzzWords"
// y creo una variable que indica que vamos a iniciar con el número 0

let resultados = [];
let indicePrimo = 0;

//genero el bucle que indica que del número 1 al 105 corra la condición for:
//si el número es primo mete en el objeto "resultados" la palabra correspondiente
// al array "buzzWords" y si no cumple la condición que meta al objeto
// el número solito.

for (let i = 1; i <= 105; i++) {

  if (i !== 2 && esPrimo(i)) {
    resultados.push(buzzWords[indicePrimo]);
    indicePrimo++;
  } else {
    resultados.push(i);
  }

}

//pedimos que imprima el objeto "resultado" que ya recopiló 
// lo que indica el bucle anterior
console.log(resultados);