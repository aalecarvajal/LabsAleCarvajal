//  con export habilitó que la función pueda exportarse a otro archivo
export function costCalculator(cost) {

    /*las indicaciones dicen que debe ser número, así que primero convierto el 
    argumento en número */
    cost = Number(cost);

    // indico el calculo del costo + los fees 
    return cost + (cost*0.01) + 3;
    
    }