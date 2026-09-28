/* Creamos la class FriendAge con el constructor para recolectar
nombre, año, mes y día*/
export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = Number(year); //con Number los convierto a número
        this.month = Number(month);
        this.day = Number(day);
                       
    }
    
/*Genero un public method returnAge para calcular la edad basados en los datos que
recolecte mi clase y luego que imprima el mensaje de nombre con edad*/

returnAge(){
    const today = new Date();
    const birthday = new Date(this.year, this.month, this.day);  
    let age = today.getFullYear() - birthday.getFullYear();
    const diffMonth = today.getMonth() - birthday.getMonth();

    if (diffMonth<0 || (diffMonth === 0 && today.getDate()<birthday.getDate())){
    age = age-1;
   }
    return this.name + " is " + age + " today!";
    }
}