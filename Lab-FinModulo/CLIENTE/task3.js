// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";

export function addUser(first_name, last_name, email) {
  fetch(getServerURL() + "/users")
    .then(response => response.json())
    .then(users => {
    // 1. calcular el id nuevo (el máximo + 1)
        const id = Math.max(...users.map(u => u.id)) + 1;
    // 2. hacer el POST y devolverlo con return
        return fetch(getServerURL() + "/users", {
            method: "POST", //POST: crear un dato nuevo
            headers: { "Content-Type": "application/json" }, //avisa "lo que te mando en el cuerpo está en formato JSON"
            body: JSON.stringify({id, first_name, last_name, email}) //(cuerpo) son los datos que envío convertidos en formato JSON
        });  
    });
}



/*
3. Create and export a method to **add** a new user to the JSON server.
    * The `addUser()` method should:
      * Take **3** inputs as follows: 
      * `addUser(<first_name>, <last_name>, <email>)`
      * Result in a complete new user being added to the JSON server 
      * with a **new, sequential, unique id number**.
      * For example: if the highest id number in the existing list 
      * is `4`, then this new id number should be `5`.
*/