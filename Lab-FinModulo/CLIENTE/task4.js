// Task 4: delUser(number)
import { getServerURL } from "./task1.js";

export function delUser(id) {
  fetch(getServerURL() + "/users/" + id, { //indicamos que queremos acceder al ID en users
    method: "DELETE"     //usamos el método DELETE para borrar el ID
    });
}










/*
4. Create and export a method to **delete** a user from the JSON server.
    * The `delUser()` method should:
      * Take an **id** number as input as follows: `delUser(<id>)`
      * Result in the user matching that **id** number being deleted from the JSON server.
      * */