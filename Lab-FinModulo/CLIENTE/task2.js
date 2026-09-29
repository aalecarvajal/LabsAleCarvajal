// Task 2: listUsers()

/*  primero importamos la función del task1 que ya nos conectó
con el servidor 
*/
import { getServerURL } from "./task1.js"; 

/*  creamos y exportamos la función que va a imprimir la lista
    de users del servidor
*/
export function listUsers() {
    //fetch: Le das una URL, va al servidor, y te trae la respuesta.
    //Por defecto hace un GET, es decir, "dame esta información".
    fetch(getServerURL() + "/users") 
/*  Hablar con un servidor toma tiempo, y JS no se queda esperando: 
    sigue con lo demás. 
    Por eso fetch no te devuelve los datos directamente, 
    sino una promesa: algo como "te aviso cuando llegue la respuesta". 
    Con .then le dices qué hacer cuando llegue
*/

// Cuando llegue la respuesta, conviértela a objeto JS
    .then(response => response.json()) 

// Cuando esté convertida, úsala
    .then(data => console.log(data))
};




/*
2. Create and export a method to **print** a list of **users** from 
    the JSON server.
    * The `listUsers()` method should simply print the **entire** JSON response,
    containing the list of **users**, to the console.
*/