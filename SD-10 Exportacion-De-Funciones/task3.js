//le asignamos los argumentos de year, month y day a la función
export function ageCalculator(year, month, day) {
    //indicamos que se conviertan estos argumentos en números
    year = Number(year);
    month = Number(month);
    day = Number(day);
   
    //generamos una constante con la fecha de hoy con new Date
    //otra constante con la fecha del cumpleaños asignada por los argumentosd ela función
   const today = new Date();
   const birthday = new Date(year, month, day);

    /*  generamos variable age que calcula la edad restando el año actual menos
    el año del cumpleaños */
   let age = today.getFullYear() - birthday.getFullYear();
   /*   generamos variable que calcule la diferencia de los meses del año menos el
   del cumpleaños */
   const diffMonth = today.getMonth() - birthday.getMonth();

   /*   condional if que si la diferencia de meses es un número negativo, por ej estamos en
   julio (06 en js) y el cumpleaños es en marzo (02 en js), la resta da -4 quiere decir que aún no cumples años.
   Aregagos que si es el mismo mes, entonces haga la operación anterior con el día, si es número
   negativo entonces -> le resta 1 a la variable edad, porque aun no cumples años este año
   */
   if (diffMonth<0 || (diffMonth === 0 && today.getDate()<birthday.getDate())){
    age = age-1;
   }
return age;
}