import {calcularSubtotal, calcularIVA} from "./calculos.js";
import {formatearMoneda} from "./formato.js";

function mostrarResumen(producto, total){
    console.log(producto + " - Total: " + formatearMoneda(total));
}

const producto ={
    nombre: "Labial",
    precio: 150,
    cantidad: 2
}

const subtotal=calcularSubtotal(producto.precio, producto.cantidad);

const iva=calcularIVA(subtotal);

const total=subtotal+iva;

mostrarResumen(producto.nombre, total);
