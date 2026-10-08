export function calcularSubtotal(precio, cantidad){ 
//usamos export para poder usar la funcion en otro archivo
    return precio*cantidad;
}

export function calcularIVA(subtotal){
    return subtotal*0.16;
}